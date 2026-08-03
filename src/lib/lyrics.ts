// src/lib/lyrics.ts
// Letras de canciones sincronizadas vía LRCLIB (gratis, sin API key, formato LRC).
// Docs: https://lrclib.net/docs

export interface LyricLine {
  timeMs: number;
  text: string;
}

export interface LyricData {
  lines: LyricLine[];
  plainText: string | null;
}

const LRCLIB_API = "https://lrclib.net/api";
const USER_AGENT = "LiganJavaLab/1.0 (https://ligan-java-lab.vercel.app)";

interface LrclibResult {
  id: number;
  trackName: string;
  artistName: string;
  albumName: string | null;
  duration: number;
  instrumental: boolean;
  plainLyrics: string | null;
  syncedLyrics: string | null;
}

// Convierte el texto LRC ("[mm:ss.xx] texto", varias marcas por línea) a
// líneas ordenadas por milisegundos.
function parseLrc(lrc: string): LyricLine[] {
  const lines: LyricLine[] = [];
  const re = /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]\s*(.*)/;
  for (const raw of lrc.split(/\r?\n/)) {
    const match = raw.match(re);
    if (!match) continue;
    const minutes = parseInt(match[1], 10);
    const seconds = parseInt(match[2], 10);
    const fractionRaw = match[3] ?? "0";
    const fraction =
      fractionRaw.length === 2
        ? parseInt(fractionRaw, 10) * 10
        : parseInt(fractionRaw.padEnd(3, "0"), 10);
    lines.push({
      timeMs: (minutes * 60 + seconds) * 1000 + fraction,
      text: match[4].trim(),
    });
  }
  return lines.sort((a, b) => a.timeMs - b.timeMs);
}

// Elige el resultado que mejor coincida: prioriza los que tienen letra
// sincronizada y con duración más cercana a la canción en curso.
function pickBest(
  results: LrclibResult[],
  durationMs: number
): LrclibResult | null {
  if (!Array.isArray(results) || results.length === 0) return null;
  const targetSec = durationMs > 0 ? durationMs / 1000 : null;

  let best: LrclibResult | null = null;
  let bestDiff = Infinity;
  for (const item of results) {
    if (!item.syncedLyrics) continue;
    const diff =
      targetSec !== null && item.duration > 0
        ? Math.abs(item.duration - targetSec)
        : 0;
    if (best === null || diff < bestDiff) {
      best = item;
      bestDiff = diff;
    }
  }
  if (!best) {
    for (const item of results) {
      if (item.plainLyrics) return item;
    }
  }
  return best;
}

export async function getSyncedLyrics(
  trackName: string,
  artistName: string,
  durationMs: number
): Promise<LyricData | null> {
  const params = new URLSearchParams({ track_name: trackName, artist_name: artistName });
  try {
    // User-Agent es un header prohibido en el navegador: asignarlo provoca que
    // la petición lance en iOS Safari. Solo se envía en runtime server-side.
    const init: RequestInit =
      typeof process !== "undefined" && process.release?.name === "node"
        ? { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }
        : { headers: { Accept: "application/json" } };
    const res = await fetch(`${LRCLIB_API}/search?${params.toString()}`, init);
    if (!res.ok) return null;
    const results = (await res.json()) as LrclibResult[];
    const best = pickBest(results, durationMs);
    if (!best) return null;
    if (best.instrumental) {
      return { lines: [], plainText: "Instrumental" };
    }
    const lines = best.syncedLyrics ? parseLrc(best.syncedLyrics) : [];
    const plainText = lines.length === 0 ? best.plainLyrics : null;
    return { lines, plainText };
  } catch {
    return null;
  }
}

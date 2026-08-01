// src/lib/spotify.ts
// Fuente única de verdad para toda la integración con Spotify Web API.
// Authorization Code Flow con PKCE. NUNCA importar SPOTIFY_CLIENT_SECRET aquí.

const CLIENT_ID = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID as string;

function getRedirectUri(): string {
  if (import.meta.env.PUBLIC_SPOTIFY_REDIRECT_URI) {
    return import.meta.env.PUBLIC_SPOTIFY_REDIRECT_URI as string;
  }
  if (typeof window !== "undefined") {
    return `${window.location.origin}/spotify-callback`;
  }
  return "";
}

const SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
].join(" ");

const STORAGE_KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expiresAt: "spotify_expires_at",
  codeVerifier: "spotify_code_verifier",
  state: "spotify_auth_state",
};

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type SpotifyErrorKind =
  | "no_device"
  | "no_playback"
  | "premium_required"
  | "missing_scope"
  | "token_expired"
  | "api_error"
  | "network_error";

export class SpotifyAppError extends Error {
  kind: SpotifyErrorKind;
  constructor(kind: SpotifyErrorKind, message: string) {
    super(message);
    this.kind = kind;
    this.name = "SpotifyAppError";
  }
}

export interface SpotifyTokens {
  accessToken: string;
  refreshToken: string | null;
  expiresAt: number; // epoch ms
}

// ---------------------------------------------------------------------------
// Utilidades PKCE
// ---------------------------------------------------------------------------

function randomString(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values)
    .map((v) => chars[v % chars.length])
    .join("");
}

async function sha256(input: string): Promise<ArrayBuffer> {
  const data = new TextEncoder().encode(input);
  return crypto.subtle.digest("SHA-256", data);
}

function base64UrlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function createCodeChallenge(verifier: string): Promise<string> {
  const digest = await sha256(verifier);
  return base64UrlEncode(digest);
}

// ---------------------------------------------------------------------------
// Almacenamiento de tokens (localStorage, consistente en un solo lugar)
// ---------------------------------------------------------------------------

export function getStoredTokens(): SpotifyTokens | null {
  if (typeof window === "undefined") return null;
  const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
  const expiresAtRaw = localStorage.getItem(STORAGE_KEYS.expiresAt);
  if (!accessToken || !expiresAtRaw) return null;
  return {
    accessToken,
    refreshToken: localStorage.getItem(STORAGE_KEYS.refreshToken),
    expiresAt: Number(expiresAtRaw),
  };
}

function storeTokens(tokens: {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}) {
  const expiresAt = Date.now() + tokens.expires_in * 1000;
  localStorage.setItem(STORAGE_KEYS.accessToken, tokens.access_token);
  localStorage.setItem(STORAGE_KEYS.expiresAt, String(expiresAt));
  if (tokens.refresh_token) {
    localStorage.setItem(STORAGE_KEYS.refreshToken, tokens.refresh_token);
  }
}

export function clearSession() {
  Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
}

export function isConnected(): boolean {
  return getStoredTokens() !== null;
}

// ---------------------------------------------------------------------------
// Flujo de autorización
// ---------------------------------------------------------------------------

export async function startLogin(): Promise<void> {
  const verifier = randomString(64);
  const challenge = await createCodeChallenge(verifier);
  const state = randomString(24);

  localStorage.setItem(STORAGE_KEYS.codeVerifier, verifier);
  localStorage.setItem(STORAGE_KEYS.state, state);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: getRedirectUri(),
    code_challenge_method: "S256",
    code_challenge: challenge,
    state,
    scope: SCOPES,
  });

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

/**
 * Debe llamarse únicamente desde spotify-callback.astro.
 * Valida `state`, intercambia el código por tokens y limpia los valores
 * temporales de PKCE. Lanza SpotifyAppError si algo falla.
 */
export async function handleAuthCallback(
  searchParams: URLSearchParams
): Promise<void> {
  const error = searchParams.get("error");
  if (error) {
    throw new SpotifyAppError("api_error", `Spotify devolvió un error: ${error}`);
  }

  const code = searchParams.get("code");
  const returnedState = searchParams.get("state");
  const savedState = localStorage.getItem(STORAGE_KEYS.state);
  const verifier = localStorage.getItem(STORAGE_KEYS.codeVerifier);

  // Limpiar valores de un solo uso independientemente del resultado
  localStorage.removeItem(STORAGE_KEYS.state);
  localStorage.removeItem(STORAGE_KEYS.codeVerifier);

  if (!code || !returnedState || !verifier) {
    throw new SpotifyAppError(
      "api_error",
      "Faltan parámetros en la respuesta de Spotify."
    );
  }

  if (returnedState !== savedState) {
    throw new SpotifyAppError(
      "api_error",
      "El parámetro state no coincide. Posible intento de CSRF; inicia sesión de nuevo."
    );
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: getRedirectUri(),
    client_id: CLIENT_ID,
    code_verifier: verifier,
  });

  let res: Response;
  try {
    res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    throw new SpotifyAppError("network_error", "No se pudo contactar a Spotify.");
  }

  if (!res.ok) {
    throw new SpotifyAppError(
      "api_error",
      "Spotify rechazó el intercambio del código de autorización."
    );
  }

  const json = await res.json();
  storeTokens(json);
}

async function refreshAccessToken(): Promise<boolean> {
  const tokens = getStoredTokens();
  if (!tokens?.refreshToken) return false;

  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: tokens.refreshToken,
        client_id: CLIENT_ID,
      }),
    });
    if (!res.ok) return false;
    const json = await res.json();
    storeTokens({
      access_token: json.access_token,
      refresh_token: json.refresh_token ?? tokens.refreshToken,
      expires_in: json.expires_in,
    });
    return true;
  } catch {
    return false;
  }
}

/** Refresca proactivamente si el token vence en menos de 60s. */
async function ensureFreshToken(): Promise<string | null> {
  const tokens = getStoredTokens();
  if (!tokens) return null;
  if (tokens.expiresAt - Date.now() < 60_000) {
    const ok = await refreshAccessToken();
    if (!ok) {
      clearSession();
      return null;
    }
  }
  return getStoredTokens()?.accessToken ?? null;
}

export function logout(): void {
  clearSession();
}

// ---------------------------------------------------------------------------
// Cliente HTTP autenticado con reintento de refresh y manejo de errores
// ---------------------------------------------------------------------------

async function apiFetch(
  path: string,
  init: RequestInit = {},
  _retried = false
): Promise<Response> {
  const token = await ensureFreshToken();
  if (!token) {
    throw new SpotifyAppError("token_expired", "Tu sesión de Spotify expiró.");
  }

  let res: Response;
  try {
    res = await fetch(`https://api.spotify.com/v1${path}`, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    throw new SpotifyAppError("network_error", "Problema de red al hablar con Spotify.");
  }

  if (res.status === 401 && !_retried) {
    const refreshed = await refreshAccessToken();
    if (refreshed) return apiFetch(path, init, true);
    clearSession();
    throw new SpotifyAppError("token_expired", "Tu sesión de Spotify expiró.");
  }

  if (res.status === 403) {
    throw new SpotifyAppError(
      "premium_required",
      "Esta acción requiere Spotify Premium o falta un permiso autorizado."
    );
  }

  if (res.status === 404) {
    throw new SpotifyAppError("no_device", "No hay ningún dispositivo activo.");
  }

  if (res.status >= 500) {
    throw new SpotifyAppError("api_error", "Spotify tuvo un problema interno.");
  }

  return res;
}

// ---------------------------------------------------------------------------
// API pública usada por el reproductor
// ---------------------------------------------------------------------------

export interface SpotifyUser {
  display_name: string;
  product: string; // "premium" | "free" | "open"
}

export async function getMe(): Promise<SpotifyUser> {
  const res = await apiFetch("/me");
  if (!res.ok) throw new SpotifyAppError("api_error", "No se pudo obtener el perfil.");
  return res.json();
}

export interface PlaybackState {
  isPlaying: boolean;
  progressMs: number;
  durationMs: number;
  trackName: string;
  artistNames: string;
  albumImageUrl: string | null;
  deviceName: string | null;
  volumePercent: number | null;
}

export async function getPlaybackState(): Promise<PlaybackState | null> {
  const res = await apiFetch("/me/player");
  if (res.status === 204) return null; // sin reproducción activa
  if (!res.ok) throw new SpotifyAppError("api_error", "No se pudo leer el estado de reproducción.");
  const json = await res.json();
  if (!json || !json.item) return null;

  const item = json.item;
  const isEpisode = item.type === "episode";
  return {
    isPlaying: Boolean(json.is_playing),
    progressMs: json.progress_ms ?? 0,
    durationMs: item.duration_ms ?? 0,
    trackName: item.name ?? "",
    artistNames: isEpisode
      ? item.show?.name ?? ""
      : (item.artists || []).map((a: any) => a.name).join(", "),
    albumImageUrl: isEpisode
      ? item.images?.[0]?.url ?? null
      : item.album?.images?.[0]?.url ?? null,
    deviceName: json.device?.name ?? null,
    volumePercent: json.device?.volume_percent ?? null,
  };
}

export async function play(uri?: string): Promise<void> {
  await apiFetch("/me/player/play", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: uri ? JSON.stringify({ uris: [uri] }) : undefined,
  });
}

export async function pause(): Promise<void> {
  await apiFetch("/me/player/pause", { method: "PUT" });
}

export async function nextTrack(): Promise<void> {
  await apiFetch("/me/player/next", { method: "POST" });
}

export async function previousTrack(): Promise<void> {
  await apiFetch("/me/player/previous", { method: "POST" });
}

export async function seek(positionMs: number): Promise<void> {
  await apiFetch(`/me/player/seek?position_ms=${Math.round(positionMs)}`, {
    method: "PUT",
  });
}

export async function setVolume(percent: number): Promise<void> {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  await apiFetch(`/me/player/volume?volume_percent=${clamped}`, {
    method: "PUT",
  });
}

export interface SearchResultItem {
  uri: string;
  name: string;
  artistNames: string;
  albumImageUrl: string | null;
  durationMs: number;
}

export async function searchTracks(query: string): Promise<SearchResultItem[]> {
  if (!query.trim()) return [];
  // Sin forzar market: se deja que Spotify use el mercado de la cuenta conectada.
  const params = new URLSearchParams({ q: query, type: "track", limit: "20" });
  const res = await apiFetch(`/search?${params.toString()}`);
  if (!res.ok) throw new SpotifyAppError("api_error", "La búsqueda falló.");
  const json = await res.json();
  return (json.tracks?.items || []).map((t: any) => ({
    uri: t.uri,
    name: t.name,
    artistNames: (t.artists || []).map((a: any) => a.name).join(", "),
    albumImageUrl: t.album?.images?.[0]?.url ?? null,
    durationMs: t.duration_ms ?? 0,
  }));
}

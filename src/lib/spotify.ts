/* ========================================================================
   spotify — Cliente Spotify Web API con flujo PKCE (sin client secret).
   Todo client-side: la web estática puede pedir tokens sin backend.

   Uso:
     - startSpotifyAuth()   → redirige a Spotify para autorizar
     - handleSpotifyAuth()  → intercambia code por tokens (página callback)
     - getPlayerState()     → estado actual (canción, progreso, artista)
     - controlSpotify(...)  → play/pause/next/previous (requiere Premium)
     - seekSpotify(ms)      → mover la barra de progreso (requiere Premium)
     - clearSpotifyAuth()   → desconectar
   ======================================================================== */

export const SPOTIFY_CLIENT_ID = '1fcccfc7748e44a8b0a22e07a5085531';

const SCOPES =
  'user-read-playback-state user-modify-playback-state user-read-currently-playing';

const VERIFIER_KEY = 'spotify_pkce_verifier';
const STATE_KEY = 'spotify_pkce_state';
const TOKENS_KEY = 'spotify_tokens';

export interface SpotifyTokens {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

export interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string; height?: number; width?: number }[];
  };
  duration_ms: number;
}

export interface SpotifyPlayerState {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack | null;
  device: { name: string; type: string } | null;
}

function base64Url(bytes: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function randomString(len: number): string {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return base64Url(arr).slice(0, len);
}

/** La URI de callback debe coincidir EXACTO con la registrada en el dashboard. */
export function spotifyRedirectUri(): string {
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'http://localhost:4321/spotify-callback';
  }
  return 'https://ligan-java-lab.vercel.app/spotify-callback';
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(verifier),
  );
  return base64Url(new Uint8Array(digest));
}

/** Inicia el login: redirige a Spotify con code_challenge (PKCE). */
export async function startSpotifyAuth(): Promise<void> {
  const verifier = randomString(64);
  const state = randomString(16);
  localStorage.setItem(VERIFIER_KEY, verifier);
  localStorage.setItem(STATE_KEY, state);

  const challenge = await generateCodeChallenge(verifier);
  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: spotifyRedirectUri(),
    scope: SCOPES,
    state,
    code_challenge_method: 'S256',
    code_challenge: challenge,
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

/** Intercambia el code de la URL del callback por access + refresh token. */
export async function handleSpotifyAuth(): Promise<SpotifyTokens> {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const error = params.get('error');

  if (error) {
    clearSpotifyAuth();
    throw new Error(error);
  }
  if (!code) {
    clearSpotifyAuth();
    throw new Error('No authorization code');
  }

  const expectedState = localStorage.getItem(STATE_KEY);
  if (expectedState && state !== expectedState) {
    clearSpotifyAuth();
    throw new Error('State mismatch');
  }

  const verifier = localStorage.getItem(VERIFIER_KEY);
  if (!verifier) {
    clearSpotifyAuth();
    throw new Error('No verifier stored');
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: spotifyRedirectUri(),
    client_id: SPOTIFY_CLIENT_ID,
    code_verifier: verifier,
  });

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Token exchange failed (${res.status})`);

  const data = await res.json();
  const tokens: SpotifyTokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + data.expires_in * 1000,
  };
  localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens));
  localStorage.removeItem(VERIFIER_KEY);
  localStorage.removeItem(STATE_KEY);
  return tokens;
}

export function getSpotifyTokens(): SpotifyTokens | null {
  try {
    const raw = localStorage.getItem(TOKENS_KEY);
    return raw ? (JSON.parse(raw) as SpotifyTokens) : null;
  } catch {
    return null;
  }
}

export function isSpotifyConnected(): boolean {
  const tokens = getSpotifyTokens();
  return !!tokens && !!tokens.access_token;
}

export function clearSpotifyAuth(): void {
  localStorage.removeItem(TOKENS_KEY);
  localStorage.removeItem(VERIFIER_KEY);
  localStorage.removeItem(STATE_KEY);
}

async function refreshAccessToken(): Promise<SpotifyTokens> {
  const tokens = getSpotifyTokens();
  if (!tokens || !tokens.refresh_token) throw new Error('No refresh token');

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: tokens.refresh_token,
    client_id: SPOTIFY_CLIENT_ID,
  });

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Refresh failed (${res.status})`);

  const data = await res.json();
  const next: SpotifyTokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token || tokens.refresh_token,
    expires_at: Date.now() + data.expires_in * 1000,
  };
  localStorage.setItem(TOKENS_KEY, JSON.stringify(next));
  return next;
}

async function getValidAccessToken(): Promise<string> {
  let tokens = getSpotifyTokens();
  if (!tokens || !tokens.access_token) throw new Error('Not connected');
  if (tokens.expires_at < Date.now() + 30000) {
    tokens = await refreshAccessToken();
  }
  return tokens.access_token;
}

async function api(path: string, init?: RequestInit): Promise<Response> {
  const token = await getValidAccessToken();
  return fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init?.headers || {}),
    },
  });
}

/** Estado actual del reproductor. null si no hay nada sonando/dispositivo. */
export async function getPlayerState(): Promise<SpotifyPlayerState | null> {
  const res = await api('/me/player');
  if (res.status === 204 || res.status === 404 || res.status === 200 && res.body === null) {
    return null;
  }
  if (!res.ok) throw new Error(`Player state failed (${res.status})`);
  return res.json();
}

export type SpotifyAction = 'play' | 'pause' | 'next' | 'previous';

export interface SpotifyControlResult {
  ok: boolean;
  /** Código HTTP de Spotify: 202/204 = ok, 403 = Premium requerido,
   *  404/204 = sin dispositivo activo, 401 = token inválido, 0 = red. */
  status: number;
}

/**
 * Control de reproducción. Devuelve el código HTTP real para distinguir
 * entre "requiere Premium" (403) y "no hay dispositivo activo" (404/204).
 */
export async function controlSpotify(action: SpotifyAction): Promise<SpotifyControlResult> {
  const map: Record<SpotifyAction, { method: string; path: string }> = {
    play: { method: 'PUT', path: '/me/player/play' },
    pause: { method: 'PUT', path: '/me/player/pause' },
    next: { method: 'POST', path: '/me/player/next' },
    previous: { method: 'POST', path: '/me/player/previous' },
  };
  const { method, path } = map[action];
  try {
    const res = await api(path, { method });
    const ok = res.status === 202 || res.status === 200 || res.status === 204;
    return { ok, status: res.status };
  } catch (e) {
    return { ok: false, status: e && (e as Error).message === 'Not connected' ? 401 : 0 };
  }
}

export async function seekSpotify(positionMs: number): Promise<SpotifyControlResult> {
  try {
    const res = await api(`/me/player/seek?position_ms=${Math.round(positionMs)}`, {
      method: 'PUT',
    });
    return { ok: res.status === 202 || res.status === 204, status: res.status };
  } catch (e) {
    return { ok: false, status: e && (e as Error).message === 'Not connected' ? 401 : 0 };
  }
}

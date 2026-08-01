# Integración con Spotify

Este proyecto usa **Authorization Code Flow con PKCE** para conectar la cuenta
de Spotify del visitante desde el navegador, sin backend propio y sin exponer
ningún secreto.

## 1. Crear la app en el Spotify Developer Dashboard

1. Entra a https://developer.spotify.com/dashboard y crea una app nueva.
2. En **Redirect URIs** agrega EXACTAMENTE estas dos URLs:
   ```
   http://localhost:4321/spotify-callback
   https://ligan-java-lab.vercel.app/spotify-callback
   ```
3. Guarda los cambios. Copia el **Client ID** (el Client Secret no se usa en
   este proyecto y nunca debe copiarse al frontend ni a variables `PUBLIC_*`).

## 2. Variables de entorno en local

Crea un archivo `.env` en la raíz del proyecto:

```
PUBLIC_SPOTIFY_CLIENT_ID=tu_client_id
PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:4321/spotify-callback
```

Si `PUBLIC_SPOTIFY_REDIRECT_URI` no se define, el código usa automáticamente
`window.location.origin + "/spotify-callback"`.

## 3. Variables de entorno en Vercel

En el proyecto de Vercel (`ligan-java-lab`) ve a **Settings → Environment
Variables** y agrega:

| Nombre | Valor | Entornos |
|---|---|---|
| `PUBLIC_SPOTIFY_CLIENT_ID` | tu Client ID | Production, Preview, Development |
| `PUBLIC_SPOTIFY_REDIRECT_URI` | `https://ligan-java-lab.vercel.app/spotify-callback` | Production |

> ⚠️ Nunca definas ni publiques `SPOTIFY_CLIENT_SECRET`. Este flujo con PKCE
> no lo necesita en ningún punto.

## 4. Funciones que requieren Spotify Premium

La Web API de Spotify restringe el control de reproducción (play, pause,
siguiente, anterior, seek, volumen) a cuentas **Premium**. Con una cuenta
Free, el reproductor solo puede:

- Mostrar la canción/episodio que suena actualmente en otro dispositivo.
- Mostrar nombre de usuario y plan.
- Buscar canciones.

Si el usuario Free intenta controlar la reproducción, la app muestra un aviso
claro en vez de fallar silenciosamente.

## 5. Solución de problemas

- **"El parámetro state no coincide"**: el usuario tardó demasiado en el
  login o abrió el enlace de callback en otra pestaña/dispositivo. Debe
  iniciar sesión de nuevo.
- **401 al llamar la API**: la app intenta refrescar el token una vez; si el
  refresh falla, limpia la sesión local y vuelve a mostrar el botón de
  "Conectar con Spotify".
- **"No hay ningún dispositivo activo"**: el usuario debe abrir Spotify
  (app de escritorio, móvil o web) en algún dispositivo antes de controlar la
  reproducción desde aquí.

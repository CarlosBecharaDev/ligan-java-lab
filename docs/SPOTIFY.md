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

## 4. Que cualquier visitante pueda conectar su cuenta (Extended Quota Mode)

Toda app nueva de Spotify arranca en **Development Mode**. En ese modo, Spotify
**solo deja autorizar a los usuarios que agregues a mano** en el dashboard
(máx. 25 cuentas, por email) — cualquier otra persona llega a la pantalla de
login de Spotify sin problema, pero al intentar autorizar la app recibe un
error de Spotify ("esta app está en modo de desarrollo...") **antes** de que
nuestro código pueda hacer nada; el bloqueo ocurre del lado de Spotify, no en
`spotify-callback.astro`.

Para que **cualquier visitante** pueda conectar su cuenta sin que lo agregues
manualmente, hay que pedirle a Spotify pasar la app a **Extended Quota Mode**:

1. Entra a https://developer.spotify.com/dashboard → tu app → **Settings**.
2. Busca la sección de cuota/usuarios (**"User Management"** o el aviso de
   *Development Mode* en la parte superior) y sigue el enlace para solicitar
   extensión de cuota ("Request Extension" / "Extend Quota").
3. Completa el formulario: qué hace la app, por qué necesita cada scope que
   pide (`user-read-private`, `user-read-email`, `user-read-playback-state`,
   `user-modify-playback-state`, `user-read-currently-playing`, `streaming`).
   Para este proyecto: es un reproductor decorativo dentro de una plataforma
   educativa de Java, cada visitante conecta **su propia** cuenta de Spotify
   para ver/controlar lo que ya suena en sus propios dispositivos — la app no
   usa los datos del usuario para nada más ni los almacena en un servidor
   (los tokens quedan solo en `localStorage` del navegador del visitante).
4. Spotify revisa la solicitud manualmente; puede tardar días y no está
   garantizada, sobre todo para scopes de control de reproducción
   (`streaming`, `user-modify-playback-state`). Mientras se revisa, se puede
   seguir agregando testers manualmente (paso siguiente) para no bloquear el
   desarrollo.
5. Mientras tanto (o si la extensión no se aprueba), la única forma de que
   alguien más pruebe el reproductor es agregar su email en **Settings →
   User Management** del dashboard — el tope duro es 25 cuentas.

## 5. Funciones que requieren Spotify Premium

La Web API de Spotify restringe el control de reproducción (play, pause,
siguiente, anterior, seek, volumen) a cuentas **Premium**. Con una cuenta
Free, el reproductor solo puede:

- Mostrar la canción/episodio que suena actualmente en otro dispositivo.
- Mostrar nombre de usuario y plan.
- Buscar canciones.

Si el usuario Free intenta controlar la reproducción, la app muestra un aviso
claro en vez de fallar silenciosamente.

## 6. Solución de problemas

- **Un visitante no puede conectar su cuenta / Spotify le muestra un error
  al autorizar** (y no llega a `spotify-callback`): la app sigue en
  Development Mode y ese usuario no está en la lista de testers — ver
  sección 4.
- **"El parámetro state no coincide"**: el usuario tardó demasiado en el
  login o abrió el enlace de callback en otra pestaña/dispositivo. Debe
  iniciar sesión de nuevo.
- **401 al llamar la API**: la app intenta refrescar el token una vez; si el
  refresh falla, limpia la sesión local y vuelve a mostrar el botón de
  "Conectar con Spotify".
- **"No hay ningún dispositivo activo"**: el usuario debe abrir Spotify
  (app de escritorio, móvil o web) en algún dispositivo antes de controlar la
  reproducción desde aquí.

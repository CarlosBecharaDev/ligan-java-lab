<div align="center">

# ☕ Ligan Java Lab

**Aprende Java 21 LTS desde cero, escribiendo y ejecutando código real en el navegador.**

Una plataforma educativa con la estética de un escritorio retro, en español latino e inglés.

[![Ver el sitio](https://img.shields.io/badge/▶_Ver_el_sitio-ligan--java--lab.vercel.app-FF5D01?style=for-the-badge)](https://ligan-java-lab.vercel.app)

[![Astro](https://img.shields.io/badge/Astro_7-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![CodeMirror](https://img.shields.io/badge/CodeMirror_6-D30707?logo=codemirror&logoColor=white)](https://codemirror.net)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## ¿Qué es esto?

Un curso completo de Java presentado como un **escritorio interactivo** (`JAVA_WORKSPACE`) que simula un sistema operativo retro. Cada módulo es una carpeta que abre ventanas con lecciones, quizzes y ejercicios.

Lo que lo diferencia de un curso escrito normal: **no tienes que instalar nada ni cambiar de ventana para practicar**. Cada ejercicio trae un editor de código real dentro de la página, y el botón *Ejecutar* compila y corre tu Java de verdad, mostrándote la salida y comparándola con el resultado esperado.

## Características

| | |
|---|---|
| 🖥️ **Escritorio retro** | Ventanas, taskbar e iconos estilo Windows 95, con temas claro/oscuro |
| 💻 **Code Lab** | Editor CodeMirror 6 en cada ejercicio + **ejecución real de Java** con veredicto automático |
| 📚 **50 lecciones** | Escritas en MDX, con resaltado de sintaxis (Shiki), analogías y errores frecuentes |
| 🧠 **92 quizzes** | 2 por lección (básico + avanzado), 383 preguntas con explicación de cada opción |
| ✍️ **138 ejercicios** | 3 niveles de dificultad por lección, con pistas y solución explicada |
| 🌐 **Bilingüe** | Plataforma y contenido completos en español e inglés (`/en/`) |
| 📊 **Progreso local** | Lecciones/quizzes/ejercicios completados y racha de estudio, en `localStorage` |
| 📖 **Glosario** | Más de 60 términos clave de Java explicados de forma sencilla |
| 🎵 **Reproductor Spotify** | Integración opcional con PKCE, con letras sincronizadas |

> Los totales son **por idioma**: hay otras 50 lecciones, 92 quizzes y 138 ejercicios en inglés.

---

## El Code Lab en detalle

Cada tarjeta de ejercicio incluye:

- **Editor en vivo** (CodeMirror 6) precargado con la plantilla del ejercicio.
- **▶ Ejecutar** → compila y ejecuta el código en un sandbox aislado, y muestra:
  - ✅ si la salida coincide con la esperada,
  - ⚠️ si el programa corrió pero la salida difiere,
  - 🛑 el error de compilación o la excepción, tal cual la reporta `javac`/la JVM.
- **⌨️ Entrada estándar** opcional, para ejercicios que usan `Scanner`.
- **↺ Reiniciar**, **Copiar** y **Descargar `.java`**.

Los ejercicios que piden datos propios del estudiante (*"declara tu nombre, tu edad..."*) están marcados como abiertos: no se compara la salida contra un valor fijo, solo se confirma que el programa corrió bien.

**Arquitectura:** el sitio es estático (`output: 'static'`). La única ruta dinámica es `/api/execute`, que corre como función serverless en Vercel y delega la compilación a un sandbox externo — **este servidor nunca ejecuta código de usuario**. Los detalles de la integración, sus límites conocidos y qué hacer si el servicio de ejecución deja de estar disponible están en **[docs/CODE_LAB.md](docs/CODE_LAB.md)**.

---

## Empezar

**Requisitos:** Node.js >= 22.12.0 · npm >= 9

```bash
git clone https://github.com/CarlosBecharaDev/ligan-java-lab.git
cd ligan-java-lab
npm install
npm run dev          # → http://localhost:4321
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción (sitio estático + la función de `/api/execute`) |
| `npm run preview` | Previsualiza el build local |
| `npm run check` | Verificación de tipos y lint de Astro (debe dar 0 errores) |

### Variables de entorno

Solo hacen falta para el reproductor de Spotify (la plataforma funciona sin ellas). Crea un `.env`:

```bash
PUBLIC_SPOTIFY_CLIENT_ID=tu_client_id
PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:4321/spotify-callback
```

Guía completa en **[docs/SPOTIFY.md](docs/SPOTIFY.md)**. El flujo usa PKCE, así que **nunca** se expone un client secret.

---

## Contenido del curso

| # | Módulo | Lecciones | Quizzes | Ejercicios |
|:--|:--|--:|--:|--:|
| 00 | Introducción a Java | 1 | 2 | 3 |
| 01 | Fundamentos de Java | 6 | 12 | 18 |
| 02 | Control de Flujo | 5 | 10 | 15 |
| 03 | Métodos y Arreglos | 6 | 12 | 18 |
| 04 | Programación Orientada a Objetos | 7 | 14 | 21 |
| 05 | Colecciones y Strings | 6 | 12 | 18 |
| 06 | Errores y Depuración | 5 | 10 | 15 |
| 07 | Archivos y APIs Estándar | 4 | 8 | 12 |
| 08 | Java Moderno | 6 | 12 | 18 |
| 09 | Proyectos Guiados | 4 | — | — |
| | **Total** | **50** | **92** | **138** |

*(El módulo 09 son proyectos integradores, sin quizzes ni ejercicios sueltos.)*

---

## Estructura del proyecto

```
ligan-java-lab/
├── docs/                    # CODE_LAB, SPOTIFY, DECISIONS (ADR), ROADMAP, CHANGELOG…
├── public/                  # Wallpaper, favicons
└── src/
    ├── components/
    │   ├── desktop/         # Escritorio, ventanas, taskbar, reproductor
    │   ├── lesson/          # Cabecera, explorador, bloques de código, tablas…
    │   ├── quiz/            # QuizCard
    │   ├── exercises/       # ExerciseCard (editor + ejecución), SolutionReveal
    │   └── ui/              # Card, LiganLogo
    ├── content/             # Colecciones (lessons, quizzes, exercises, modules)
    │   └── en-*/            # Espejo 1:1 en inglés
    ├── layouts/             # Base, App, Content, Lesson
    ├── pages/               # Rutas ES + espejo /en/ + api/execute.ts
    ├── lib/                 # course, progress, i18n, codeEditor, codeRunner, spotify…
    └── styles/              # tokens.css y hojas por área
```

**Modelo de contenido** (validado con Zod en `src/content.config.ts`):

- **Lección** — MDX con frontmatter: objetivos, prerrequisitos, historia, ejemplos del mundo real, comparativas, videos, FAQs y fuentes.
- **Quiz** — JSON: `{ id, lessonSlug, level, questions[] }`, cada pregunta con explicación *por cada opción*.
- **Ejercicio** — JSON (array de 3): `{ difficulty, description, template, hints[], solution, expectedOutput, openEnded? }`.
- **Módulo** — JSON: metadatos + lista ordenada de slugs de lecciones.

---

## Añadir una lección

1. Crea `src/content/lessons/[NN]-[slug].mdx` con el frontmatter completo.
2. Añade el slug al array `lessons` del módulo correspondiente en `src/content/modules/`.
3. Crea 2 quizzes en `src/content/quizzes/`: `[NN]-[slug]-basico.json` y `-avanzado.json`.
4. Crea los ejercicios en `src/content/exercises/[NN]-[slug].json` (array de 3 niveles).
5. Replica todo en las colecciones `en-*` para la versión en inglés.
6. Registra la lección en `docs/CONTENT_REGISTRY.md`.
7. Verifica: `npm run check && npm run build`.

> **Recomendado:** antes de publicar un ejercicio nuevo, ejecútalo contra `/api/execute` para confirmar que compila y que su `expectedOutput` es exacto. Correr esta verificación sobre el curso existente sacó a la luz ~30 errores de contenido que la revisión manual no había detectado.

---

## Despliegue

Desplegado en **Vercel** con integración continua: cada push a `master` publica automáticamente, y cada PR genera una preview.

🔗 **[ligan-java-lab.vercel.app](https://ligan-java-lab.vercel.app)**

No requiere configuración especial: el adaptador `@astrojs/vercel` genera el sitio estático más la función serverless de `/api/execute`.

---

## Documentación

| Documento | Contenido |
|---|---|
| [CODE_LAB.md](docs/CODE_LAB.md) | Cómo funciona la ejecución de Java, límites conocidos y mantenimiento |
| [SPOTIFY.md](docs/SPOTIFY.md) | Configuración de la app de Spotify y modo de cuota extendida |
| [DECISIONS.md](docs/DECISIONS.md) | Decisiones de arquitectura (ADR) |
| [CONTENT_REGISTRY.md](docs/CONTENT_REGISTRY.md) | Catálogo de lecciones y sus fuentes |
| [ROADMAP.md](docs/ROADMAP.md) | Hoja de ruta |
| [CHANGELOG.md](docs/CHANGELOG.md) | Historial de cambios |

---

## Licencia

Proyecto educativo. Todos los derechos reservados © **Carlos Bechara**.

## Autor

**Carlos Bechara** — [@CarlosBecharaDev](https://github.com/CarlosBecharaDev)

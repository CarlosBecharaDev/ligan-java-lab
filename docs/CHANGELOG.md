# Changelog — Ligan Java Lab

Historial cronológico de cambios del proyecto.

---

## [0.2.0] — 2026-08-01

### Internacionalización completa (ES/EN) ✅

- Traducción íntegra del contenido al inglés: colecciones espejo `src/content/en-lessons/` (50 MDX), `en-quizzes/` (92 JSON), `en-exercises/` (46 JSON), `en-modules/` (10 JSON).
- Páginas `/en/` completas: `index`, `tema/[slug]`, `quiz/[slug]`, `ruta`, `practica`, `progreso`, `historia`, `glosario`, `recursos`, `sobre-el-proyecto`.
- `src/content.config.ts` registra las 8 colecciones (4 ES + 4 EN) con el mismo schema; `level` admite `Inicial/Intermedio/Avanzado` y `Beginner/Intermediate/Advanced`.
- `BaseLayout.astro` fuerza idioma EN con `data-i18n-force="en"` en rutas `/en/`.
- `src/lib/i18n.ts` centraliza traducciones y el script de cambio de idioma (clave `ligan-lang`).
- `src/lib/course.ts` usa `Lang` (`'es' | 'en'`) para helpers de colecciones.

### Pase de limpieza total ✅

- `npm run check` (astro check): de 81 errores/warnings/hints → **0 errores, 0 warnings, 0 hints** (63 archivos).
- `npm run build`: 210 páginas en ~8s (antes ~16s).
- **Shiki singleton** en `src/lib/highlighter.ts` (tema `github-dark-default`, langs `java`, `bash`): elimina warning "410 instances" y duplica velocidad de build.
- **Progreso unificado** en `src/lib/progress.ts` (`loadProgress`/`saveProgress`/`emptyProgress`/`ProgressData`, clave `ligan-java-lab-progress`): reemplaza la lógica de localStorage duplicada en 6 scripts (ES + EN).
- `z` importado de `astro/zod` en `content.config.ts` (elimina ~60 warnings por el `z` deprecado de `astro:content`).
- **Código muerto eliminado**: `components/code-lab/` (CodeEditor, CodeLab, ConsoleOutput), `ui/Modal`, `ui/Badge`, `ui/Button`, `ui/ProgressBar`, `lesson/VideoPlayer`, `lesson/LessonContent`, `quiz/QuizResult`, `desktop/Window`, `features/downloads/`, `features/progress/`, `features/quiz/`, `features/desktop/windowManager.ts`, `src/utils/` entero + alias `@utils/*`.
- Deps eliminadas: `@codemirror/lang-java`, `@codemirror/state`, `@codemirror/view`, `zod` (Astro trae el suyo). 0 vulnerabilidades.
- 14 scripts one-off de la raíz eliminados (analyze/check/fix/repro/strip-*).
- Corrección de tipos en scripts client de `tema/[slug]`, `quiz/[slug]`, `progreso` (ES y EN), `RetroChars`, `Taskbar`, `ThemeSelector`, `QuizCard`, `CodeBlock`, `ruta`.
- Imports y props muertos eliminados: `localePrefix` (LessonLayout), `prerequisites` (LessonHeader), `type` (InteractiveExample), `exId` (ExerciseCard), `icon` (DesktopIcon), `Window` (Desktop).

---

## [0.1.1] — 2026-07-30

### Explorador de lecciones estilo VS Code

- Nuevo componente `src/components/lesson/LessonExplorer.astro`: panel lateral de navegación tipo explorador de archivos dentro de la ventana de lección.
- Muestra el módulo actual expandido (p. ej. `01_FUNDAMENTOS`) con todas sus lecciones y el siguiente módulo colapsado debajo (p. ej. `02_CONTROL_DE_FLUJO`).
- Lección activa resaltada con sombreado sutil + borde izquierdo de acento y `aria-current="page"`.
- Lecciones completadas muestran un `✓` verde (leído desde `localStorage` `ligan-java-lab-progress`) con texto accesible "Completado".
- Módulos expandibles/colapsables con caret `▸`/`▾` y `aria-expanded`.
- Subsecciones (`##`/`###`) de la lección activa enlazadas como anclas dentro del mismo tema.
- Escritorio: panel fijo de 240px (200px en tablet) integrado en la ventana; ventana ampliada para conservar el ancho de lectura.
- Móvil: panel oculto como drawer lateral, abierto con el botón "☰ Contenido" de la barra de título; cierra con backdrop, `Escape` o al redimensionar a escritorio.
- `LessonLayout.astro` reconstruido: elimina el sidebar antiguo sin uso y prepara la fila ventana = explorador + contenido.
- `tema/[slug].astro` ahora pasa `currentModuleSlug`, `currentSlug`, `currentId`, `headings` y despacha `progress-update` al marcar completada una lección.

---

## [0.1.0] — 2026-07-26

### Fase 1: MVP Completo ✅

#### Setup del proyecto
- Inicializado Astro 7.1.3 con template minimal + TypeScript strict
- Configurado tsconfig.json con path aliases (`@/`, `@components/`, `@layouts/`, `@features/`, `@utils/`, `@lib/`, `@content/`, `@styles/`)
- Configurado `astro.config.mjs` con MDX, sitemap, Shiki (github-dark-default)
- Creado `vercel.json` para despliegue estático
- Instaladas dependencias: @astrojs/mdx, @astrojs/sitemap, codemirror, lucide-astro, zod

#### Sistema de diseño CSS
- `tokens.css` — Variables de diseño: colores, tipografía, espaciado, radios, transiciones, sombras, z-index
- `global.css` — Reset moderno, tipografía base, anclajes, código, scrollbar, focus-visible
- `animations.css` — Keyframes: fadeIn, slideUp, slideDown, scaleIn, pulse; respeta `prefers-reduced-motion`
- `desktop.css` — Grid de escritorio, ventanas flotantes, taskbar, iconos
- `lesson.css` — Tipografía de lecciones, historial, ejemplos reales, tablas comparativas, FAQ, navegación
- `code.css` — Bloques de código, CodeLab, CodeMirror overrides, consola

#### Tipos TypeScript (`src/lib/`)
- `lesson.ts` — Lesson, LessonHistory, RealWorldExample, Comparison, ContentSection, VideoResource, Source, FAQ
- `quiz.ts` — QuizLevel, Quiz, QuizQuestion
- `exercise.ts` — Difficulty, Exercise
- `module.ts` — ModuleStatus, Module
- `desktop.ts` — WindowState, DesktopIcon, DesktopState

#### Content Collections
- `src/content.config.ts` — 4 colecciones: lessons (MDX), quizzes (JSON), exercises (JSON), modules (JSON)
- 9 módulos JSON: fundamentos (en-progreso), control-de-flujo through proyectos (próximamente)
- 2 quizzes JSON: variables-y-tipos básico + avanzado (3 preguntas cada uno)
- 1 ejercicio JSON: variables-y-tipos (3 niveles: fácil, normal, difícil)
- 1 lección MDX: 01-variables-y-tipos con 17 secciones completas

#### Layouts
- `BaseLayout.astro` — HTML base, Google Fonts, meta tags, imports CSS
- `AppLayout.astro` — Desktop + Taskbar + slot de contenido
- `LessonLayout.astro` — Sidebar 280px sticky + contenido principal max 820px
- `ContentLayout.astro` — Contenedor simple con padding

#### Features y Utils
- `desktop/windowManager.ts` — crearVentana, cerrarVentana, minimizarVentana, maximizarVentana, traerAlFrente, moverVentana
- `desktop/desktopState.ts` — estadoInicial, 14 ICONOS_PRINCIPALES
- `progress/progressStore.ts` — obtenerProgreso, guardarProgreso, obtenerResultadoQuiz, guardarBorrador, limpiarProgreso
- `quiz/quizEngine.ts` — evaluarQuiz, calcularPorcentaje, obtenerNivel
- `downloads/fileDownload.ts` — descargarComoJava, copiarAlPortapapeles
- `utils/storage.ts` — obtenerSeguro, guardarSeguro, eliminarSeguro (con prefijo ljl_)
- `utils/format.ts` — slugify, formatearFecha, formatearDuracion
- `utils/a11y.ts` — handleKeyboardActivation, handleEscape, focusTrap

#### Componentes
- **Desktop:** Desktop.astro, DesktopIcon.astro, Window.astro, Taskbar.astro
- **Lesson:** LessonHeader, LessonContent, CodeBlock, VideoPlayer, LessonNav, LessonHistory, RealWorldExamples, InteractiveExample, ComparisonTable
- **Quiz:** QuizCard (interactivo con feedback inmediato), QuizResult
- **Exercises:** ExerciseCard (con pistas y solución), SolutionReveal
- **Code Lab:** CodeEditor (CodeMirror 6), ConsoleOutput, CodeLab (toolbar + editor + consola)
- **UI:** Button, Badge, Card, Modal, ProgressBar

#### Páginas (11 rutas)
- `/` — Index con ventana "Bienvenido.java"
- `/tema/[slug]` — Lecciones MDX dinámicas
- `/practica` — Code Lab + ejercicios
- `/ruta` — Mapa de módulos con progreso
- `/progreso` — Estadísticas y streak
- `/quiz/[slug]` — Quiz interactivo
- `/historia` — Timeline de Java
- `/recursos` — Documentación y herramientas
- `/glosario` — Términos de Java
- `/sobre-el-proyecto` — Info del autor y stack
- `/404` — Página de error con ASCII art

#### Bug fixes durante implementación
- Instalación de @astrojs/mdx: requirió eliminar package-lock.json y reinstalar explícitamente
- Content Collections: ejercicio schema necesitaba `z.array()` para JSON arrays
- CodeBlock script: template expressions no funcionan en `<script>` — migrado a data attributes
- ExerciseCard/SolutionReveal/QuizCard/CodeEditor/CodeLab/Modal: mismo fix de data attributes
- `entry.render()` → `render(entry)` para Astro 7
- `@types/` → `@lib/` para evitar conflicto TS6137
- `z.record(z.string())` → `z.record(z.string(), z.string())` para Zod 4
- tsconfig: eliminado `baseUrl` deprecado en TS 6
- Shiki langs: `@ts-ignore` para tipo LanguageRegistration

#### Build verification
- `npm run build` — ✅ 11 páginas, 0 errores, 0 warnings críticos
- `npx tsc --noEmit` — ✅ 0 errores de tipo

# Roadmap — Ligan Java Lab

Hoja de ruta del proyecto con checklist de cada fase.

---

## Fase 0: Documentación ✅

- [x] `PROMPT_IMPLEMENTACION.md` — Prompt maestro del proyecto
- [x] `docs/DECISIONS.md` — 13 ADRs documentadas
- [x] `docs/CONTENT_REGISTRY.md` — Catálogo de contenido
- [x] `docs/CHANGELOG.md` — Historial de cambios
- [x] `docs/ROADMAP.md` — Este archivo
- [x] `README.md` — Readme del proyecto

---

## Fase 1: MVP (Fase 1 del PROMPT) ✅

### 1.1 Setup del proyecto
- [x] Inicializar Astro con template minimal
- [x] Configurar TypeScript strict + path aliases
- [x] Configurar astro.config.mjs (MDX, sitemap, Shiki)
- [x] Crear vercel.json
- [x] Instalar dependencias

### 1.2 Sistema de diseño
- [x] `tokens.css` — Variables de diseño
- [x] `global.css` — Reset y tipografía base
- [x] `animations.css` — Keyframes + reduced-motion
- [x] `desktop.css` — Estilos del escritorio
- [x] `lesson.css` — Estilos de lecciones
- [x] `code.css` — Estilos de código

### 1.3 Tipos TypeScript
- [x] `lesson.ts`, `quiz.ts`, `exercise.ts`, `module.ts`, `desktop.ts`

### 1.4 Content Collections
- [x] `content.config.ts` con 4 colecciones
- [x] 9 módulos JSON
- [x] 2 quizzes JSON (variables-y-tipos)
- [x] 1 ejercicio JSON (variables-y-tipos, 3 niveles)
- [x] 1 lección MDX completa (01-variables-y-tipos)

### 1.5 Layouts
- [x] `BaseLayout.astro`
- [x] `AppLayout.astro`
- [x] `LessonLayout.astro`
- [x] `ContentLayout.astro`

### 1.6 Features y Utils
- [x] Desktop: windowManager, desktopState
- [x] Progress: progressStore
- [x] Quiz: quizEngine
- [x] Downloads: fileDownload
- [x] Utils: storage, format, a11y

### 1.7 Componentes Desktop
- [x] `Desktop.astro`
- [x] `DesktopIcon.astro`
- [x] `Window.astro`
- [x] `Taskbar.astro`

### 1.8 Componentes Lesson
- [x] LessonHeader, LessonContent, CodeBlock, VideoPlayer
- [x] LessonNav, LessonHistory, RealWorldExamples
- [x] InteractiveExample, ComparisonTable

### 1.9 Componentes Quiz + Exercises
- [x] QuizCard (interactivo con feedback)
- [x] QuizResult
- [x] ExerciseCard (con pistas y solución)
- [x] SolutionReveal

### 1.10 Code Lab
- [x] CodeEditor (CodeMirror 6)
- [x] ConsoleOutput (con warning de simulación)
- [x] CodeLab (toolbar + editor + consola)

### 1.11 UI Genérica
- [x] Button (primary/secondary/ghost/danger)
- [x] Badge (info/success/warning/danger)
- [x] Card
- [x] Modal (con backdrop blur + Escape)
- [x] ProgressBar

### 1.12 Páginas (11 rutas)
- [x] `/` — Index
- [x] `/tema/[slug]` — Lecciones
- [x] `/practica` — Code Lab
- [x] `/ruta` — Mapa de módulos
- [x] `/progreso` — Estadísticas
- [x] `/quiz/[slug]` — Quiz
- [x] `/historia` — Timeline de Java
- [x] `/recursos` — Documentación
- [x] `/glosario` — Términos
- [x] `/sobre-el-proyecto` — Info
- [x] `/404` — Error

### 1.13 Verificación
- [x] `npm run build` — 11 páginas, 0 errores
- [x] `npx tsc --noEmit` — 0 errores de tipo
- [x] `docs/CHANGELOG.md` actualizado
- [x] `docs/DECISIONS.md` actualizado (ADR-010 a ADR-013)
- [x] `docs/CONTENT_REGISTRY.md` creado
- [x] `docs/ROADMAP.md` creado

---

## Fase 2: Contenido Completo ⚪

### Módulo 01: Fundamentos (completar)
- [ ] Lección 02: Operadores
- [ ] Lección 03: Strings y Manipulación de Texto
- [ ] Lección 04: Entrada de Datos con Scanner
- [ ] Lección 05: Conversión de Tipos (Casting)
- [ ] Lección 06: Constantes y Enums

### Módulos 02-09
- [ ] Control de Flujo (5 lecciones)
- [ ] POO (7 lecciones)
- [ ] Excepciones (4 lecciones)
- [ ] Colecciones y Generics (6 lecciones)
- [ ] Entrada/Salida de Datos (5 lecciones)
- [ ] Lambdas y Streams (5 lecciones)
- [ ] Concurrencia (4 lecciones)
- [ ] Proyectos Integradores (5 lecciones)

### Contenido complementario
- [ ] Vídeos verificados por lección
- [ ] Ejercicios adicionales por módulo
- [ ] Proyectos integradores reales

---

## Fase 3: Mejoras Futuras ⚪

- [ ] Migrar `lucide-astro` → `@lucide/astro`
- [ ] Code Lab con ejecución real (Java en WASM o backend)
- [ ] Autenticación y progreso en la nube
- [ ] Modo oscuro/claro toggle
- [ ] Internacionalización (es/en)
- [ ] Tests E2E
- [ ] PWA (Progressive Web App)
- [ ] Analytics de progreso
- [ ] Sistema de logros/badges

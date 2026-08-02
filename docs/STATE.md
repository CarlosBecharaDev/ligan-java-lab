# STATE.md — Ligan Java Lab

Documentación viva del estado actual del proyecto. Generado el 2026-07-29, actualizado el 2026-08-01.

---

## 1. Resumen del Proyecto

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | Ligan Java Lab |
| **URL** | https://ligan-java-lab.vercel.app |
| **Estado actual** | 10 módulos, 50 lecciones, 92 quizzes, 46 ejercicios (por idioma ES y EN) |
| **Framework** | Astro 7.1.3 (static site generation) |
| **TypeScript** | 6.0.3 |
| **Node** | >= 22.12.0 |
| **Gestor** | npm |
| **Tema** | Retro pixel-art (Windows 95 style) con oscuro |
| **Idioma** | Español latino + inglés (rutas `/en/`) |
| **Autor** | Carlos Bechara (@CarlosBecharaDev) |
| **Despliegue** | Vercel (estático, build en cada push a main) |

### Stack técnico

| Tecnología | Propósito |
|---|---|
| Astro 7.1.3 (+ MDX, sitemap) | SSG, enrutamiento, layouts |
| TypeScript 6.0.3 strict | Tipado en todo el proyecto |
| Content Layer API (glob + Zod desde `astro/zod`) | Colecciones de contenido (8: 4 ES + 4 EN) |
| Shiki (singleton en `src/lib/highlighter.ts`) | Resaltado de sintaxis en lecciones |
| Lucide (lucide-astro 0.556.0) | Iconos |
| CSS Custom Properties | Sistema de tokens de diseño |

---

## 2. Estructura de Archivos

```
ligan-java-lab/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── fonts/
│   ├── icons/
│   ├── og/
│   └── wallpaper.jpg
├── src/
│   ├── assets/icons/
│   ├── components/
│   │   ├── desktop/        (7) Desktop, DesktopIcon, MainWindow, RetroChars,
│   │   │                       RetroPlayer, Taskbar, ThemeSelector
│   │   ├── exercises/      (2) ExerciseCard, SolutionReveal
│   │   ├── lesson/         (8) CodeBlock, ComparisonTable, InteractiveExample,
│   │   │                       LessonExplorer, LessonHeader, LessonHistory,
│   │   │                       LessonNav, RealWorldExamples
│   │   ├── quiz/           (1) QuizCard
│   │   └── ui/             (2) Card, LiganLogo
│   ├── content/
│   │   ├── lessons/         (50 archivos .mdx, ES)
│   │   ├── quizzes/         (92 archivos .json, ES)
│   │   ├── exercises/       (46 archivos .json, ES)
│   │   ├── modules/         (10 archivos .json, ES)
│   │   ├── en-lessons/      (50 archivos .mdx, EN)
│   │   ├── en-quizzes/      (92 archivos .json, EN)
│   │   ├── en-exercises/    (46 archivos .json, EN)
│   │   └── en-modules/      (10 archivos .json, EN)
│   ├── content.config.ts    (schema Zod para las 8 colecciones; `z` de `astro/zod`)
│   ├── features/
│   │   └── desktop/         desktopState.ts
│   ├── layouts/
│   │   ├── AppLayout.astro
│   │   ├── BaseLayout.astro
│   │   ├── ContentLayout.astro
│   │   └── LessonLayout.astro
│   ├── lib/
│   │   ├── course.ts        (helpers de colecciones por idioma)
│   │   ├── desktop.ts
│   │   ├── exercise.ts
│   │   ├── glossary.ts
│   │   ├── highlighter.ts   (singleton Shiki)
│   │   ├── i18n.ts          (translations ES/EN, clave `ligan-lang`)
│   │   ├── lesson.ts
│   │   ├── lyrics.ts
│   │   ├── module.ts
│   │   ├── progress.ts      (lógica de progreso unificada y tipada)
│   │   ├── quiz.ts
│   │   ├── spotify.ts
│   │   └── theme.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── glosario.astro
│   │   ├── historia.astro
│   │   ├── index.astro
│   │   ├── practica.astro
│   │   ├── progreso.astro
│   │   ├── quiz/[slug].astro
│   │   ├── recursos.astro
│   │   ├── ruta.astro
│   │   ├── sobre-el-proyecto.astro
│   │   ├── spotify-callback.astro
│   │   ├── tema/[slug].astro
│   │   └── en/              (espejo EN de todas las páginas + quiz/[slug] + tema/[slug])
│   ├── styles/
│   │   ├── animations.css
│   │   ├── code.css
│   │   ├── desktop.css
│   │   ├── global.css
│   │   ├── lesson.css
│   │   └── tokens.css
├── docs/
│   ├── CHANGELOG.md
│   ├── CONTENT_REGISTRY.md
│   ├── DECISIONS.md
│   ├── ROADMAP.md
│   ├── SPOTIFY.md
│   └── STATE.md              ← este archivo
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## 3. Módulos del Curso (10)

| # | Slug | Título | Lecciones | Icono | Estado |
|---|------|--------|-----------|-------|--------|
| 00 | 00-introduccion | Introducción a Java | 1 | BookOpen | disponible |
| 01 | 01-fundamentos | Fundamentos de Java | 6 | Terminal | disponible |
| 02 | 02-control-de-flujo | Control de Flujo | 5 | GitBranch | disponible |
| 03 | 03-metodos-y-arrays | Métodos y Arreglos | 6 | Layers | disponible |
| 04 | 04-poo | Programación Orientada a Objetos | 7 | Box | disponible |
| 05 | 05-colecciones | Colecciones y Strings | 6 | Database | disponible |
| 06 | 06-errores | Errores y Depuración | 5 | AlertTriangle | disponible |
| 07 | 07-archivos | Archivos y APIs Estándar | 4 | FileText | disponible |
| 08 | 08-java-moderno | Java Moderno | 6 | Zap | disponible |
| 09 | 09-proyectos | Proyectos Guiados | 4 | Code2 | disponible |

---

## 4. Lecciones (46)

### Módulo 00 — Introducción a Java
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 00 | introduccion-java | Introducción a Java: JDK, JRE y JVM | Inicial |

### Módulo 01 — Fundamentos de Java
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 01 | variables-y-tipos | Variables y tipos de datos | Inicial |
| 02 | operadores | Operadores | Inicial |
| 03 | strings | Strings y manipulación de texto | Inicial |
| 04 | scanner | Entrada de datos con Scanner | Inicial |
| 05 | casting | Conversión de tipos (Casting) | Intermedio |
| 06 | constantes-enums | Constantes y Enums | Intermedio |

### Módulo 02 — Control de Flujo
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 07 | if-else | Sentencias de decisión — if-else | Inicial |
| 08 | switch | Sentencia Switch y Switch Expressions | Inicial |
| 09 | while-do-while | Bucles While y Do-While | Inicial |
| 10 | for | El Bucle For y For-Each | Inicial |
| 11 | break-continue-return | Break, Continue y Return | Intermedio |

### Módulo 03 — Métodos y Arreglos
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 12 | metodos | Métodos en Java | Inicial |
| 13 | metodos-avanzados | Métodos Avanzados | Intermedio |
| 14 | sobrecarga | Sobrecarga de Métodos | Intermedio |
| 15 | arrays | Arreglos en Java | Inicial |
| 16 | arrays-avanzados | Arreglos Avanzados | Intermedio |
| 17 | matrices | Matrices (Arreglos Bidimensionales) | Intermedio |

### Módulo 04 — POO
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 17 | clases-objetos | Clases y Objetos | Inicial |
| 18 | constructores | Constructores | Inicial |
| 19 | encapsulacion | Encapsulación | Intermedio |
| 20 | herencia | Herencia | Intermedio |
| 21 | polimorfismo | Polimorfismo | Intermedio |
| 22 | clases-abstractas-interfaces | Clases Abstractas e Interfaces | Avanzado |
| 23 | agregacion-composicion | Agregación y Composición | Intermedio |

### Módulo 05 — Colecciones y Strings
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 24 | arraylist | ArrayList | Inicial |
| 25 | hashmap | HashMap | Inicial |
| 26 | linkedlist | LinkedList | Intermedio |
| 27 | set-map-avanzados | Set y Map Avanzados (HashSet, TreeSet, LinkedHashMap, TreeMap) | Intermedio |
| 28 | string-avanzado | String Avanzado | Intermedio |
| 29 | expresiones-regulares | Expresiones Regulares | Avanzado |

### Módulo 06 — Errores y Depuración
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 29 | excepciones-tipos | Excepciones: Checked y Unchecked | Inicial |
| 30 | try-catch-finally | Try-Catch-Finally | Inicial |
| 31 | throw-throws | Throw y Throws | Intermedio |
| 32 | excepciones-personalizadas | Excepciones Personalizadas | Intermedio |
| 33 | depuracion-testing | Depuración y Testing | Avanzado |

### Módulo 07 — Archivos y APIs Estándar
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 34 | file-io | File I/O (File, FileReader, FileWriter) | Inicial |
| 35 | file-writer | FileWriter y PrintWriter | Intermedio |
| 36 | serializacion | Serialización | Avanzado |
| 37 | date-time-api | Date y Time API Moderna (java.time) | Intermedio |

### Módulo 08 — Java Moderno
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 38 | lambdas | Expresiones Lambda | Intermedio |
| 39 | streams | Stream API | Intermedio |
| 40 | optional | Optional | Intermedio |
| 41 | records | Records | Intermedio |
| 42 | pattern-matching | Pattern Matching | Avanzado |
| 43 | genericos | Genéricos en Java | Intermedio |

### Módulo 09 — Proyectos Guiados
| # | Slug | Título | Nivel |
|---|------|--------|-------|
| 44 | calculadora-cli | Proyecto: Calculadora CLI | Intermedio |
| 45 | gestor-tareas | Proyecto: Gestor de Tareas | Intermedio |
| 46 | sistema-biblioteca | Proyecto: Sistema de Biblioteca | Avanzado |
| 47 | juego-texto | Proyecto: Juego de Texto | Avanzado |

---

## 5. Esquemas de Contenido

> Fuente: `src/content.config.ts`. El mismo schema se usa para las versiones ES y EN (`level` admite ambos idiomas).

### Lesson (MDX frontmatter)
```typescript
{
  title: string,
  slug: string,
  module: string,              // ej. "01-fundamentos"
  level: 'Inicial' | 'Intermedio' | 'Avanzado' | 'Beginner' | 'Intermediate' | 'Advanced',
  objectives: string[],
  prerequisites: string[],     // slugs de lecciones previas
  history?: {
    introducedIn: string,      // ej. "Java 1.0"
    context: string,
    evolution?: string
  },
  realWorldExamples: [{ domain, description, code, result }],
  hasInteractive: boolean,     // default false
  comparisons?: [{ title, items: [{ name, features: Record<string,string> }], recommendation }],
  videos: [{ url, title, channel, duration?, summary }],
  faqs: [{ question, answer }],
  sources: [{ title, url, date }],
  status: 'borrador' | 'revisado' | 'publicado',
  lastReviewed: string         // fecha ISO
}
```

### Quiz (JSON)
```typescript
{
  id: string,
  lessonSlug: string,
  level: 'basico' | 'avanzado',
  questions: [{
    id: string,
    question: string,
    options: string[],         // 4 opciones
    correctIndex: number,      // 0-3
    explanations: string[]     // 1 por opción (mismo orden)
  }]
}
```

### Exercise (JSON — array)
```typescript
[{
  id: string,
  lessonSlug: string,
  title: string,
  difficulty: 'facil' | 'normal' | 'dificil',
  description: string,
  template: string,            // código base
  hints: string[],
  solution: string,            // código solución
  solutionExplanation: string,
  expectedOutput: string
}]
```

### Module (JSON)
```typescript
{
  id: string,
  slug: string,
  number: number,
  title: string,
  description: string,
  icon: string,                // nombre del icono Lucide
  status: 'disponible' | 'proximamente' | 'en-progreso',
  lessonCount: number,
  lessons: string[]            // slugs en orden
}
```

---

## 6. Sistema de Diseño (CSS Tokens)

Archivo: `src/styles/tokens.css`

### Paleta Desktop (dark)
- `--bg: #1A0D2E` (púrpura oscuro)
- `--surface: #2D1B4E`
- `--text: #F0E8FF`
- `--accent: #FFD700` (oro)
- `--sky: #57B8FF` (celeste)
- `--magenta: #C862A8`
- `--pink: #FF6EC7`
- `--lavender: #B794F6`

### Paleta Window (light)
- `--win-bg: #F5E6C8` (beige)
- `--win-titlebar: #808098`
- `--win-text: #1A1A1A`

### Tipografía
- `--font-ui: 'VT323', 'Courier New', monospace`
- `--font-pixel: 'Press Start 2P', 'VT323', monospace`
- `--font-mono: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace`

### Layout
- `--content-width: 760px`
- `--content-width-lg: 820px`
- `--sidebar-width: 280px`

---

## 7. Enrutamiento (12 páginas ES + 8 páginas EN)

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `index.astro` | Escritorio interactivo con ventana de bienvenida |
| `/tema/[slug]` | `tema/[slug].astro` | Lección individual (MDX renderizada) |
| `/quiz/[slug]` | `quiz/[slug].astro` | Quiz interactivo por lección |
| `/ruta` | `ruta.astro` | Mapa de aprendizaje con módulos y progreso |
| `/practica` | `practica.astro` | Ejercicios filtrados por nivel y módulo |
| `/progreso` | `progreso.astro` | Estadísticas y racha de estudio |
| `/historia` | `historia.astro` | Timeline de la evolución de Java |
| `/glosario` | `glosario.astro` | Glosario A-Z de términos Java |
| `/recursos` | `recursos.astro` | Enlaces a documentación y herramientas |
| `/sobre-el-proyecto` | `sobre-el-proyecto.astro` | Información del proyecto y autor |
| `/spotify-callback` | `spotify-callback.astro` | Callback OAuth PKCE de Spotify |
| `/404` | `404.astro` | Página de error con ASCII art |

**Espejo en inglés:** `/en/` (`index`, `tema/[slug]`, `quiz/[slug]`, `ruta`, `practica`, `progreso`, `historia`, `glosario`, `recursos`, `sobre-el-proyecto`).

---

## 8. Componentes (20 total)

### desktop/ (7)
| Componente | Descripción |
|---|---|
| Desktop.astro | Contenedor del escritorio con fondo y grid de iconos |
| DesktopIcon.astro | Icono individual en el escritorio |
| MainWindow.astro | Ventana principal de bienvenida / shell de la app |
| RetroChars.astro | Efecto de caracteres retro animados |
| RetroPlayer.astro | Reproductor de Spotify integrado (estilo retro) |
| Taskbar.astro | Barra de tareas inferior con reloj y accesos |
| ThemeSelector.astro | Selector de tema (oscuro/claro) |

### lesson/ (8)
| Componente | Descripción |
|---|---|
| LessonHeader.astro | Cabecera con título, nivel, badge, objetivos |
| LessonExplorer.astro | Explorador de archivos lateral (lecciones del módulo + anclas) |
| CodeBlock.astro | Bloque de código con resaltado Shiki y botón copiar |
| LessonNav.astro | Navegación entre lecciones (anterior/siguiente) |
| LessonHistory.astro | Sección de historia del concepto |
| RealWorldExamples.astro | Ejemplos del mundo real con código y resultado |
| InteractiveExample.astro | Ejemplo interactivo con JavaScript |
| ComparisonTable.astro | Tabla comparativa con selector de características y recomendación |

### quiz/ (1)
| Componente | Descripción |
|---|---|
| QuizCard.astro | Tarjeta de pregunta con opciones y feedback inmediato |

### exercises/ (2)
| Componente | Descripción |
|---|---|
| ExerciseCard.astro | Tarjeta de ejercicio con descripción, pistas, template y solución |
| SolutionReveal.astro | Botón para revelar/ocultar solución con animación |

### ui/ (2)
| Componente | Descripción |
|---|---|
| Card.astro | Tarjeta genérica con slot |
| LiganLogo.astro | Logo `</>` de la marca |

### Eliminados en el pase de limpieza (2026-08-01)

Código muerto que no se usaba (ver CHANGELOG): `code-lab/` completo (CodeEditor, CodeLab, ConsoleOutput), `ui/Modal`, `ui/Badge`, `ui/Button`, `ui/ProgressBar`, `lesson/VideoPlayer`, `lesson/LessonContent`, `quiz/QuizResult`, `desktop/Window`, `features/downloads/`, `features/progress/`, `features/quiz/`, `features/desktop/windowManager.ts`, `utils/` completo.

---

## 9. Lógica de negocio

| Archivo | Descripción |
|---|---|
| `features/desktop/desktopState.ts` | Estado inicial del escritorio (iconos de módulos) |
| `lib/progress.ts` | Lógica de progreso unificada y tipada: `loadProgress`, `saveProgress`, `emptyProgress`, `ProgressData` |
| `lib/highlighter.ts` | Singleton de Shiki (tema `github-dark-default`, langs `java`, `bash`) |
| `lib/i18n.ts` | Traducciones ES/EN y `I18N_CLIENT_SCRIPT` (clave `ligan-lang`) |
| `lib/course.ts` | Helpers de colecciones por idioma (`lessonCollection`, `quizCollection`, etc.) |
| `lib/glossary.ts` | Catálogo de términos del glosario |
| `lib/theme.ts` | Gestión de tema oscuro/claro |
| `lib/spotify.ts`, `lib/lyrics.ts` | Integración Spotify (PKCE) y letras |

### Progreso — claves localStorage
| Clave | Formato |
|---|---|
| Progreso | `ligan-java-lab-progress` → `ProgressData` (`{ completedLessons, quizResults, exerciseResults, ... }`) |
| Idioma | `ligan-lang` → `'es'` / `'en'` |
| Tema | `ligan-theme` → tema oscuro/claro |

---

## 10. Layouts (4)

| Layout | Rol |
|---|---|
| BaseLayout.astro | HTML base, Google Fonts, meta tags, imports CSS; fuerza idioma `en` con `data-i18n-force` en rutas `/en/` |
| AppLayout.astro | Desktop + Taskbar + slot de contenido (usado en index) |
| ContentLayout.astro | Contenedor centrado con padding (usado en ruta, glosario, etc.) |
| LessonLayout.astro | Fila ventana = explorador lateral + contenido principal (usado en tema/[slug]) |

---

## 11. Contenido vs. Universidad_Java_Apuntes.md

El archivo `Universidad_Java_Apuntes.md` (3135 líneas) contiene estos bloques temáticos:

| Tema en Apuntes | Cubierto en lecciones? | Lecciones existentes |
|---|---|---|
| Intro/Instalación/JDK-JRE-JVM | ✅ | 00-introduccion-java |
| Variables y tipos | ✅ | 01-variables-y-tipos |
| Strings | ✅ | 03-strings, 28-string-avanzado |
| Scanner | ✅ | 04-scanner |
| Operadores | ✅ | 02-operadores |
| Condicionales (if-else) | ✅ | 07-if-else |
| Switch | ✅ | 08-switch |
| Ciclos (while/do-while/for) | ✅ | 09-while-do-while, 10-for |
| Break/Continue/Return | ✅ | 11-break-continue-return |
| Métodos | ✅ | 12-metodos, 13-metodos-avanzados, 14-sobrecarga |
| Arrays | ✅ | 15-arrays, 16-arrays-avanzados |
| POO (clases, objetos, constructores, encapsulación, herencia, polimorfismo, abstractas, interfaces) | ✅ | 17-23 |
| Agregación/Composición | ✅ | 23-agregacion-composicion |
| ArrayList, HashMap, LinkedList | ✅ | 24-arraylist, 25-hashmap, 26-linkedlist |
| String métodos avanzados | ✅ | 28-string-avanzado |
| Expresiones regulares | ✅ | 29-expresiones-regulares |
| Excepciones | ✅ | 29-32 |
| Depuración/Testing | ✅ | 33-depuracion-testing |
| File I/O | ✅ | 34-file-io, 35-file-writer |
| Serialización | ✅ | 36-serializacion |
| Date/Time API | ✅ | 37-date-time-api |
| Lambdas | ✅ | 38-lambdas |
| Streams | ✅ | 39-streams |
| Optional | ✅ | 40-optional |
| Records | ✅ | 41-records |
| Pattern Matching | ✅ | 42-pattern-matching |
| Proyectos | ✅ | 44-47 |
| Math class | ❌ | (mencionado en apuntes, sin lección) |
| Wrapper classes | ❌ | (mencionado en apuntes, sin lección) |
| HashSet/TreeSet | ✅ | 27-set-map-avanzados |
| Queue/Deque | ❌ | (mencionado en apuntes) |
| LinkedHashMap/TreeMap | ✅ | 27-set-map-avanzados |
| Sorting/Comparators | ❌ | (mencionado en apuntes) |
| NIO.2 (Path/Files) | ❌ | (mencionado en apuntes) |
| Generics | ✅ | 43-genericos |
| Threads/Concurrencia | ❌ | (mencionado en apuntes, en roadmap Fase 2) |
| Annotations/Reflection | ❌ | (en apuntes) |
| try-with-resources | ❌ | (mencionado en apuntes, no como lección separada) |

---

## 12. Decisiones de Arquitectura (ADRs)

Ver `docs/DECISIONS.md` para los 13 ADRs registrados:

- ADR-001: Astro como framework
- ADR-002: CSS custom con variables (sin Tailwind)
- ADR-003: Vercel estático
- ADR-004: Code Lab con simulación (sin backend Java real)
- ADR-005: Símbolo `</>` como marca visual
- ADR-006: Content Collections + Zod
- ADR-007: localStorage para progreso
- ADR-008: 3 niveles de ejercicios + 2 bloques de quiz
- ADR-009: Secciones enriquecidas en lecciones (historia, mundo real, comparativa, FAQ)
- ADR-010: Astro 7 Content Layer API
- ADR-011: `@lib/` en lugar de `@types/`
- ADR-012: Zod 4
- ADR-013: Scripts client-side con data attributes

---

## 13. Build

- `npm run dev` — servidor de desarrollo (http://localhost:4321)
- `npm run build` — build estático en `dist/` (~210 páginas en ~8s)
- `npm run preview` — previsualizar build
- `npm run check` — verificación de tipos (`astro check`; 0 errores, 0 warnings, 0 hints)

---

## 14. Próximos Pasos (desde ROADMAP.md)

### Fase 2 (completada): Contenido Completo ✅
- [x] 50 lecciones en 10 módulos (00-09)
- [x] 92 quizzes (2 por lección, salvo módulo 09)
- [x] 46 ejercicios (3 niveles por lección, salvo módulo 09)
- [x] JDK/JRE/JVM/Introducción (Módulo 00)
- [x] Matrices, HashSet/TreeSet/LinkedHashMap/TreeMap, Genéricos
- [x] Video, FAQ y fuentes verificados por lección

### Fase 3 (completada): Internacionalización y limpieza ✅
- [x] Traducción completa EN (colecciones `en-*`, rutas `/en/`)
- [x] Progreso unificado y tipado en `src/lib/progress.ts`
- [x] Singleton de Shiki en `src/lib/highlighter.ts`
- [x] Eliminación de código muerto (code-lab, features, utils, componentes sin uso)
- [x] `npm run check`: 0 errores, 0 warnings, 0 hints

### Fase 4 (pendiente): Mejoras
- [ ] Quizzes y ejercicios del módulo 09 (Proyectos)
- [ ] Lecciones faltantes: Math class, Wrapper classes, Queue/Deque, Sorting/Comparators, NIO.2, Threads, Annotations, Reflection, try-with-resources
- [ ] Autenticación y progreso en la nube
- [ ] Tests E2E
- [ ] PWA
- [ ] Analytics de progreso
- [ ] Sistema de logros/badges

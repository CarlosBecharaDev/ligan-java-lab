# STATE.md — Ligan Java Lab

Documentación viva del estado actual del proyecto. Generado el 2026-07-29.

---

## 1. Resumen del Proyecto

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | Ligan Java Lab |
| **URL** | https://ligan-java-lab.vercel.app |
| **Estado actual** | 10 módulos, 50 lecciones, 100 quizzes, 50 ejercicios |
| **Framework** | Astro 7.1.3 (static site generation) |
| **TypeScript** | 6.0.3 |
| **Node** | >= 22.12.0 |
| **Gestor** | npm |
| **Tema** | Retro pixel-art (Windows 95 style) con oscuro |
| **Idioma** | Español latino (con soporte de internacionalización ES/EN) |
| **Autor** | Carlos Bechara (@CarlosBecharaDev) |
| **Despliegue** | Vercel (estático, build en cada push a main) |

### Stack técnico

| Tecnología | Propósito |
|---|---|
| Astro 7.1.3 (+ MDX, sitemap) | SSG, enrutamiento, layouts |
| TypeScript 6.0.3 strict | Tipado en todo el proyecto |
| Content Layer API (glob + Zod) | Colecciones de contenido |
| CodeMirror 6 (@codemirror/lang-java) | Editor de código en Code Lab |
| Shiki (github-dark-default) | Resaltado de sintaxis en lecciones |
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
│   │   ├── code-lab/        (3) CodeEditor, CodeLab, ConsoleOutput
│   │   ├── desktop/         (5) Desktop, DesktopIcon, RetroChars, Taskbar, Window
│   │   ├── exercises/       (2) ExerciseCard, SolutionReveal
│   │   ├── lesson/          (9) CodeBlock, ComparisonTable, InteractiveExample,
│   │   │                       LessonContent, LessonHeader, LessonHistory,
│   │   │                       LessonNav, RealWorldExamples, VideoPlayer
│   │   ├── quiz/            (2) QuizCard, QuizResult
│   │   └── ui/              (5) Badge, Button, Card, Modal, ProgressBar
│   ├── content/
│   │   ├── lessons/         (46 archivos .mdx)
│   │   ├── quizzes/         (84 archivos .json)
│   │   ├── exercises/       (42 archivos .json)
│   │   └── modules/         (9 archivos .json)
│   ├── content.config.ts    (schema Zod para las 4 colecciones)
│   ├── features/
│   │   ├── desktop/         desktopState.ts, windowManager.ts
│   │   ├── downloads/       fileDownload.ts
│   │   ├── progress/        progressStore.ts
│   │   └── quiz/            quizEngine.ts
│   ├── layouts/
│   │   ├── AppLayout.astro
│   │   ├── BaseLayout.astro
│   │   ├── ContentLayout.astro
│   │   └── LessonLayout.astro
│   ├── lib/
│   │   ├── desktop.ts
│   │   ├── exercise.ts
│   │   ├── i18n.ts
│   │   ├── lesson.ts
│   │   ├── module.ts
│   │   └── quiz.ts
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
│   │   └── tema/[slug].astro
│   ├── styles/
│   │   ├── animations.css
│   │   ├── code.css
│   │   ├── desktop.css
│   │   ├── global.css
│   │   ├── lesson.css
│   │   └── tokens.css
│   └── utils/
│       ├── a11y.ts
│       ├── download.ts
│       ├── format.ts
│       └── storage.ts
├── docs/
│   ├── CHANGELOG.md
│   ├── CONTENT_REGISTRY.md
│   ├── DECISIONS.md
│   ├── ROADMAP.md
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

### Lesson (MDX frontmatter)
```typescript
{
  title: string,
  slug: string,
  module: string,              // ej. "01-fundamentos"
  level: 'Inicial' | 'Intermedio' | 'Avanzado',
  objectives: string[],
  prerequisites: string[],     // slugs de lecciones previas
  history?: {
    introducedIn: string,      // ej. "Java 1.0"
    context: string,
    evolution?: string
  },
  realWorldExamples: [{ domain, description, code, result }],
  hasInteractive: boolean,
  comparisons?: [{ title, items: [{ name, features }], recommendation }],
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

## 7. Enrutamiento (11 páginas)

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `index.astro` | Escritorio interactivo con ventana de bienvenida |
| `/tema/[slug]` | `tema/[slug].astro` | Lección individual (MDX renderizada) |
| `/quiz/[slug]` | `quiz/[slug].astro` | Quiz interactivo por lección |
| `/ruta` | `ruta.astro` | Mapa de aprendizaje con módulos y progreso |
| `/practica` | `practica.astro` | Code Lab con editor y ejercicios |
| `/progreso` | `progreso.astro` | Estadísticas y racha de estudio |
| `/historia` | `historia.astro` | Timeline de la evolución de Java |
| `/glosario` | `glosario.astro` | Glosario A-Z de términos Java |
| `/recursos` | `recursos.astro` | Enlaces a documentación y herramientas |
| `/sobre-el-proyecto` | `sobre-el-proyecto.astro` | Información del proyecto y autor |
| `/404` | `404.astro` | Página de error con ASCII art |

---

## 8. Componentes (31 total)

### desktop/ (5)
| Componente | Descripción |
|---|---|
| Desktop.astro | Contenedor del escritorio con fondo y grid de iconos |
| DesktopIcon.astro | Icono individual en el escritorio |
| RetroChars.astro | Efecto de caracteres retro animados |
| Taskbar.astro | Barra de tareas inferior con reloj y accesos |
| Window.astro | Ventana flotante arrastrable con título, controles y slot |

### lesson/ (9)
| Componente | Descripción |
|---|---|
| LessonHeader.astro | Cabecera con título, nivel, badge, objetivos |
| LessonContent.astro | Renderiza el contenido MDX de la lección |
| CodeBlock.astro | Bloque de código con resaltado Shiki y botón copiar |
| VideoPlayer.astro | Embed de video con metadatos (canal, duración) |
| LessonNav.astro | Navegación entre lecciones (anterior/siguiente) |
| LessonHistory.astro | Sección de historia del concepto |
| RealWorldExamples.astro | Ejemplos del mundo real con código y resultado |
| InteractiveExample.astro | Ejemplo interactivo con JavaScript |
| ComparisonTable.astro | Tabla comparativa con selector de características y recomendación |

### quiz/ (2)
| Componente | Descripción |
|---|---|
| QuizCard.astro | Tarjeta de pregunta con opciones y feedback inmediato |
| QuizResult.astro | Resultado del quiz con porcentaje, nivel y detalle |

### exercises/ (2)
| Componente | Descripción |
|---|---|
| ExerciseCard.astro | Tarjeta de ejercicio con descripción, pistas, template y solución |
| SolutionReveal.astro | Botón para revelar/ocultar solución con animación |

### code-lab/ (3)
| Componente | Descripción |
|---|---|
| CodeEditor.astro | Editor CodeMirror 6 con sintaxis Java |
| CodeLab.astro | Toolbar + editor + consola simulada + descarga |
| ConsoleOutput.astro | Salida de consola simulada con warning |

### ui/ (5)
| Componente | Descripción |
|---|---|
| Badge.astro | Badge con variantes: info, success, warning, danger |
| Button.astro | Botón con variantes: primary, secondary, ghost, danger |
| Card.astro | Tarjeta genérica con slot |
| Modal.astro | Modal con backdrop blur, foco atrapado, cierre con Escape |
| ProgressBar.astro | Barra de progreso con porcentaje |

---

## 9. Features (lógica de negocio)

| Archivo | Descripción |
|---|---|
| `features/desktop/desktopState.ts` | Estado inicial del escritorio (14 iconos principales) |
| `features/desktop/windowManager.ts` | Crear, cerrar, minimizar, maximizar, mover ventanas, traer al frente |
| `features/progress/progressStore.ts` | CRUD de progreso en localStorage (prefijo `ljl_`): lecciones, quizzes, borradores |
| `features/quiz/quizEngine.ts` | Evaluar respuestas, calcular porcentaje, obtener nivel (excelente/bueno/necesita-repasar) |
| `features/downloads/fileDownload.ts` | Descargar código como `.java`, copiar al portapapeles |

### Progress Store — claves localStorage
| Clave | Formato |
|---|---|
| Progreso general | `ljl_progreso` → `{ "slug": true }` |
| Quiz | `ljl_quiz_{id}` → número (puntaje) |
| Borrador | `ljl_draft_{slug}` → string (código) |

---

## 10. Layouts (4)

| Layout | Rol |
|---|---|
| BaseLayout.astro | HTML base, Google Fonts, meta tags, imports CSS |
| AppLayout.astro | Desktop + Taskbar + slot de contenido (usado en index) |
| ContentLayout.astro | Contenedor centrado con padding (usado en ruta, glosario, etc.) |
| LessonLayout.astro | Sidebar 280px (oculto por defecto) + contenido principal centrado (usado en tema/[slug]) |

---

## 11. Contenido vs. Universidad_Java_Apuntes.md

El archivo `Universidad_Java_Apuntes.md` (3135 líneas) contiene estos bloques temáticos:

| Tema en Apuntes | Cubierto en lecciones? | Lecciones existentes |
|---|---|---|
| Intro/Instalación/JDK-JRE-JVM | ❌ No hay lección dedicada | — |
| Variables y tipos | ✅ | 01-variables-y-tipos |
| Strings | ✅ | 03-strings, 27-string-avanzado |
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
| String métodos avanzados | ✅ | 27-string-avanzado |
| Expresiones regulares | ✅ | 28-expresiones-regulares |
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
| Proyectos | ✅ | 43-46 |
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
- `npm run build` — build estático en `dist/`
- `npm run preview` — previsualizar build
- `npm run astro check` — verificación de tipos

---

## 14. Próximos Pasos (desde ROADMAP.md)

### Fase 2 (en progreso): Contenido Completo
- [x] JDK/JRE/JVM/Introducción (Módulo 00)
- [x] Matrices (arreglos bidimensionales)
- [x] HashSet, TreeSet, LinkedHashMap, TreeMap
- [x] Genéricos
- [ ] Lecciones faltantes: Math class, Wrapper classes, Queue/Deque, Sorting/Comparators, NIO.2, Threads, Annotations, Reflection, try-with-resources
- [ ] Videos verificados por lección
- [ ] Ejercicios adicionales por módulo

### Fase 3 (pendiente): Mejoras
- [ ] Code Lab con ejecución real (Java en WASM o backend)
- [ ] Autenticación y progreso en la nube
- [ ] Modo oscuro/claro toggle
- [ ] Internacionalización (es/en)
- [ ] Tests E2E
- [ ] PWA
- [ ] Analytics de progreso
- [ ] Sistema de logros/badges

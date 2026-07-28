# JAVA DOMINADO — Contexto Maestro del Proyecto

> **Uso:** Entregar este archivo completo a cualquier IA que vaya a diseñar o programar el proyecto.
> Este documento es la **fuente de verdad**. Se conserva, amplía y corrige con cada avance.
> **Nunca se reemplaza por resúmenes.** Las decisiones históricas se marcan como reemplazadas, no se eliminan.
> Formato de actualizaciones: añadir entrada en `docs/CHANGELOG.md` y `docs/DECISIONS.md` junto con cada cambio de código.

---

## 1. Identidad y Reglas No Negociables

- **Producto:** `Ligan Java Lab`
- **Propósito:** Plataforma educativa web completa para llevar a una persona sin experiencia en Java desde los fundamentos hasta crear proyectos reales con buenas bases.
- **Audiencia:** Principiantes absolutos, estudiantes y personas con nociones básicas que necesitan ordenar y practicar.
- **Autor y propietario del repositorio:** **Carlos Bechara** (`CarlosBecharaDev`)
- **Símbolo de marca:** `</>` en SVG propio con tipografía `JetBrains Mono` y color `--sky` (#57B8FF)
- **Idioma:** Español latino. Toda la interfaz, lecciones y comentarios de código en español.
- El código, README, commits y metadatos **no deben incluir** firmas, créditos ni texto atribuido a IA.
- Nunca añadir `Co-authored-by`, `Generated-by` ni coautores ajenos a Carlos.
- No copiar cursos, artículos ni código de terceros sin permiso. Conservar enlace y atribución cuando se use material externo.
- El proyecto inicia como **frontend estático con datos locales**. No implementar backend, cuentas, pagos ni base de datos hasta que Carlos lo solicite explícitamente.
- **Toda decisión nueva debe actualizar este archivo y `docs/CHANGELOG.md` antes o junto con el código.**

---

## 2. Decisiones Confirmadas

| Decisión | Valor | Fecha |
|----------|-------|-------|
| Nombre del producto | `Ligan Java Lab` | 2026-07-26 |
| Autor / propietario del repositorio | Carlos Bechara (`CarlosBecharaDev`) | 2026-07-26 |
| Versión Java de referencia | Java 21 LTS | 2026-07-26 |
| Idioma de la plataforma | Español latino | 2026-07-26 |
| Símbolo de marca | `</>` SVG propio | 2026-07-26 |
| Stack frontend | Astro + TypeScript + HTML/CSS modular | 2026-07-26 |
| Ubicación del proyecto | `C:\Users\Usuario\Documents\ligan-java-lab` | 2026-07-26 |
| Navegación pedagógica | Ruta guiada (recomendada) + exploración libre (enciclopedia) | 2026-07-26 |
| Code Lab Fase 1 | Simulación con salidas predefinidas, claramente etiquetada | 2026-07-26 |
| Code Lab permanente | Sin ejecución real de Java. El Code Lab usa simulación etiquetada en todas las fases | 2026-07-26 |
| Despliegue | Vercel (integración directa con GitHub) | 2026-07-26 |
| Licencia | Pendiente de decisión de Carlos | Pendiente |

---

## 3. Experiencia Esperada

La plataforma debe sentirse como un **laboratorio elegante de desarrollo**, no como una plantilla educativa genérica. El estudiante lee una explicación corta, la entiende con una analogía cotidiana, ve código, practica y comprueba su razonamiento sin salir del tema.

### Principios de Experiencia

1. **Aprender haciendo:** cada lección tiene concepto, analogía, código, errores comunes, práctica y solución revelable.
2. **Progresión visible:** la ruta muestra dónde está el estudiante y qué sigue.
3. **Claridad antes que densidad:** una idea principal por bloque; ejemplos pequeños y comentados solo cuando el comentario aporte comprensión.
4. **Interacción con propósito:** quizzes, resaltado de sintaxis, copiar, solución oculta, descarga de código. Sin animaciones que dificulten leer.
5. **Accesible y responsive:** teclado, foco visible, contraste AA, sin scroll horizontal en móvil.

### Rangos Responsive Obligatorios

| Rango | Comportamiento |
|-------|---------------|
| 320–767 px (móvil) | Ventanas a pantalla completa o paneles apilados. Sin drag, zoom ni scroll horizontal |
| 768–1023 px (tablet) | Paneles desplegables, columnas reducidas |
| 1024+ px (escritorio) | Escritorio interactivo completo con ventanas flotantes |

---

## 4. Escritorio Interactivo — `JAVA_WORKSPACE`

### Metáfora de Navegación

- La página de inicio (`/`) es un escritorio llamado `JAVA_WORKSPACE`.
- Las carpetas representan módulos del curso.
- Al hacer clic/Enter en una carpeta se abre una ventana de lección.
- La app `Code Lab` abre un IDE educativo con simulación de ejecución.
- La app `Progreso` muestra temas completados desde localStorage.
- En móvil, las ventanas se convierten en navegación por capas/pantallas.
- Existe siempre una **ruta alternativa normal** (menú, mapa de aprendizaje) para accesibilidad y SEO.

### Módulos Visibles en el Escritorio

```
01_Fundamentos
02_Control_de_flujo
03_Métodos_y_Arrays
04_Programación_Orientada_a_Objetos
05_Colecciones_y_Strings
06_Errores_y_Debug
07_Archivos_y_APIs
08_Java_Moderno
09_Proyectos
Historia_de_Java
Recursos
Code_Lab
Progreso
```

Los módulos aún no desarrollados abren una ventana honesta de "Próximamente" con objetivos del módulo.

### Composición de la Pantalla Inicial

1. Barra superior: logo `</>` + nombre `Ligan Java Lab`, indicador de módulo, controles de accesibilidad.
2. Escritorio con cuadrícula de iconos.
3. Ventana inicial `Bienvenido.java` con explicación breve y CTA "Abrir ruta de aprendizaje".
4. Barra inferior: lanzador, ventanas abiertas, reloj y estado de progreso local.
5. Fondo: rejilla de código muy tenue + halos RGB azul/cian de baja opacidad. Sin imágenes de stock.

---

## 5. Estructura del Modelo de Contenido

### Estructura de Lección (secuencia completa)

Cada lección sigue esta secuencia. Las secciones marcadas con `*` son opcionales si el tema no aplica.

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Encabezado** | Título, módulo, nivel, duración estimada, objetivos verificables |
| 2 | **Antes de empezar** | Conocimiento previo necesario, herramientas |
| 3 | **¿Qué es y por qué existe?** `*` | Historia breve del concepto/característica dentro de Java. Ej: cuándo se introdujo, qué problema resolvió, cómo evolucionó |
| 4 | **Explicación conceptual** | Definición en español claro. Cada término nuevo se define la primera vez que aparece |
| 5 | **Analogía de la vida real** | Comparación cotidiana precisa. No forzada |
| 6 | **Ejemplo mínimo** | Código Java autocontenido, mínimo, con salida esperada y explicación línea a línea |
| 7 | **Ejemplos del mundo real** | 2–3 casos de uso concretos donde este concepto se usa en aplicaciones reales (bancarias, e-commerce, apps móviles, etc.) |
| 8 | **Ejemplo interactivo** `*` | Si el concepto lo permite: visualización animada en CSS/JS que muestra cómo funciona (ej: cómo se asigna memoria en una variable, cómo itera un bucle, cómo se llama un método). Sin librerías externas pesadas |
| 9 | **Comparativa** `*` | Si existe un elemento similar o alternativo en Java (ej: `ArrayList` vs `LinkedList`, `==` vs `.equals()`, `abstract class` vs `interface`): tabla comparativa con cuándo usar cada uno |
| 10 | **Errores frecuentes** | Síntoma, causa y corrección de los 3 errores más comunes con este concepto |
| 11 | **Vídeo recomendado** | URL/ID de YouTube validado, título, canal, duración y resumen alternativo escrito |
| 12 | **Quiz Básico** | 3 preguntas de comprensión directa con retroalimentación inmediata |
| 13 | **Quiz Avanzado** | 3 preguntas con código o casos borde con retroalimentación inmediata |
| 14 | **Ejercicios prácticos** | 3 ejercicios: 🟢 Fácil / 🟡 Normal / 🔴 Difícil, cada uno con plantilla, pistas, solución revelable, copiar y descargar `.java` |
| 15 | **Preguntas frecuentes** | 3–5 FAQ que responden dudas comunes de estudiantes |
| 16 | **Fuentes y fecha de revisión** | Documentación oficial Java 21, artículos verificados, fecha de última revisión |
| 17 | **Navegación** | Botones lección anterior / siguiente dentro del módulo |

### Guía para la Sección "¿Qué es y por qué existe?"

- Mencionar en qué versión de Java se introdujo el concepto.
- Explicar qué problema existía antes y cómo este elemento lo resolvió.
- Máximo 3–4 párrafos cortos. No es una clase de historia — es contexto que ayuda a entender el diseño.
- Solo incluir si hay historia relevante que aporte comprensión (no en temas obvios como declarar una variable).

### Guía para los "Ejemplos del Mundo Real"

Cada ejemplo debe mostrar:
1. **Dominio:** en qué tipo de aplicación se usa (banco, tienda online, red social, videojuego, etc.).
2. **Código:** fragmento Java real y funcional que demuestra el uso.
3. **Resultado:** qué se logra con ese código.

Ejemplos por tema:
- Variables → formulario de registro de usuario
- Bucles → procesar una lista de pedidos
- ArrayList → carrito de compras
- Herencia → jerarquía de empleados en un sistema de nómina
- Excepciones → validación de pago con tarjeta de crédito

### Guía para los Ejemplos Interactivos

Se implementan con HTML/CSS/JS puro dentro del componente de lección. No se usan iframes ni librerías externas.

Tipos de visualización posibles:
- **Diagrama de memoria:** caja que muestra cómo se almacena una variable (nombre → tipo → valor).
- **Animación de bucle:** pasos numerados que se iluminan mientras el contador avanza.
- **Árbol de herencia:** nodos y flechas CSS que muestran la jerarquía de clases.
- **Comparador de tipos:** tabla que cambia de color al seleccionar distintos tipos de datos.
- **Traza de ejecución:** código que resalta línea por línea al hacer clic en "Siguiente paso".

Solo añadir si aporta comprensión real. Si el concepto es claro con texto y código, no añadir.

### Guía para las Comparativas

Formato de tabla obligatorio:

| Característica | Opción A | Opción B |
|---------------|---------|----------|
| ... | ... | ... |

**Siempre terminar con una recomendación clara:**
> ✅ Usa `ArrayList` cuando necesitas acceso rápido por índice.  
> ✅ Usa `LinkedList` cuando insertas/eliminas elementos con frecuencia al inicio o mitad de la lista.

Temas donde aplica comparativa:
- `==` vs `.equals()` en String
- `int` vs `Integer` (primitivo vs wrapper)
- `ArrayList` vs `LinkedList` vs `array[]`
- `abstract class` vs `interface`
- `for` vs `while` vs `for-each`
- `HashMap` vs `TreeMap` vs `LinkedHashMap`
- `checked` vs `unchecked` exceptions
- `StringBuilder` vs `String` en concatenación


### Tipo TypeScript de Lección

```ts
type Lesson = {
  id: string;
  slug: string;
  module: string;
  title: string;
  level: 'Inicial' | 'Intermedio' | 'Avanzado';
  objectives: string[];
  prerequisites: string[];
  sections: ContentSection[];
  history?: LessonHistory;          // Opcional: historia del concepto en Java
  realWorldExamples: RealWorldExample[]; // Mín. 2 ejemplos del mundo real
  hasInteractive: boolean;          // true si tiene visualización interactiva
  comparisons?: Comparison[];       // Opcional: comparativas con alternativas
  videos: VideoResource[];
  exercises: Exercise[];            // Siempre 3: difficulty 'facil' | 'normal' | 'dificil'
  quizzes: Quiz[];                  // Siempre 2: level 'basico' | 'avanzado'
  faqs: FAQ[];
  sources: Source[];
  status: 'borrador' | 'revisado' | 'publicado';
  lastReviewed: string;             // ISO 8601
};

type LessonHistory = {
  introducedIn: string;             // Ej: 'Java 8', 'Java 1.0'
  context: string;                  // Qué problema resolvió
  evolution?: string;               // Cómo evolucionó (si aplica)
};

type RealWorldExample = {
  domain: string;                   // Ej: 'E-commerce', 'Banca', 'Red social'
  description: string;
  code: string;                     // Fragmento Java
  result: string;
};

type Comparison = {
  title: string;                    // Ej: 'ArrayList vs LinkedList'
  items: ComparisonItem[];
  recommendation: string;           // Cuándo usar cada uno
};

type ComparisonItem = {
  name: string;
  features: Record<string, string>; // Característica → valor
};

type FAQ = {
  question: string;
  answer: string;
};
```


### Tipos TypeScript de Ejercicio y Quiz

```ts
type Difficulty = 'facil' | 'normal' | 'dificil';
type QuizLevel = 'basico' | 'avanzado';

type Exercise = {
  id: string;
  lessonSlug: string;
  title: string;
  difficulty: Difficulty;         // 'facil' | 'normal' | 'dificil'
  description: string;
  template: string;               // Código Java de plantilla editable
  hints: string[];                // Vacío en 'dificil', máx 2 en 'facil'
  solution: string;               // Código Java de solución
  solutionExplanation: string;   // Explicación paso a paso
  expectedOutput: string;         // Salida esperada (para simulación)
};

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];              // Siempre 4 opciones
  correctIndex: number;           // Índice de la opción correcta
  explanations: string[];         // Explicación de cada opción
};

type Quiz = {
  id: string;
  lessonSlug: string;
  level: QuizLevel;               // 'basico' | 'avanzado'
  questions: QuizQuestion[];      // 3 preguntas por quiz
};
```

### Mapa Curricular Completo

| # | Módulo | Estado |
|---|--------|--------|
| 01 | Historia de Java, JDK/JRE/JVM y configuración de entorno | Pendiente |
| 02 | Sintaxis esencial: estructura, variables, tipos, operadores | En progreso |
| 03 | Flujo de control: condicionales, switch, bucles | Pendiente |
| 04 | Métodos, parámetros, retorno, alcance y sobrecarga | Pendiente |
| 05 | Arreglos, String y colecciones (List, Set, Map) | Pendiente |
| 06 | POO: clases, objetos, encapsulación, herencia, polimorfismo | Pendiente |
| 07 | Excepciones, depuración y manejo de errores | Pendiente |
| 08 | Archivos, fechas, utilidades y APIs estándar | Pendiente |
| 09 | Programación funcional: lambdas, Stream, Optional | Pendiente |
| 10 | Pruebas, código limpio y organización de proyectos | Pendiente |
| 11 | Usos de Java: backend, Android, sistemas empresariales | Pendiente |
| 12 | Proyectos guiados progresivos | Pendiente |

---

## 6. Sistema de Diseño

### Paleta de Tokens CSS

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#070B12` | Fondo principal |
| `--surface` | `#0E1623` | Paneles y tarjetas |
| `--surface-raised` | `#142033` | Hover y capas elevadas |
| `--text` | `#F4F7FB` | Texto principal |
| `--muted` | `#9EADBF` | Texto secundario |
| `--sky` | `#57B8FF` | Acción principal y enlaces |
| `--sky-strong` | `#278CE8` | Hover y foco |
| `--line` | `#25354A` | Bordes sutiles |
| `--success` | `#55D6A1` | Correcto / progreso |
| `--danger` | `#FF7070` | Error / incorrecto |
| `--radius-sm` | `8px` | Bordes pequeños |
| `--radius-md` | `12px` | Tarjetas |
| `--radius-lg` | `16px` | Ventanas |
| `--transition` | `150ms ease` | Transiciones base |

### Tipografía

- **Interfaz:** `Inter` o `Manrope` (Google Fonts)
- **Código:** `JetBrains Mono` o `IBM Plex Mono` (Google Fonts)
- **Contenedor de lectura:** máximo 760–820 px de ancho

### Animaciones

- Entradas: `opacity` + desplazamiento corto, máximo una vez por elemento.
- Duración: 150–250 ms usando `transform` y `opacity`.
- Siempre respetar `@media (prefers-reduced-motion: reduce)`.

---

## 7. Stack Técnico

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| Astro | 4.x+ | Framework principal, rutas y Content Collections |
| TypeScript | 5.x | Tipado en componentes y features |
| CSS (custom) | — | Sistema de diseño sin frameworks |
| Lucide | Última | Iconos SVG consistentes |
| Shiki | Última | Resaltado de sintaxis Java |
| CodeMirror 6 | 6.x | Editor Java en Code Lab (cargado bajo demanda) |
| Zod | 3.x | Validación de esquemas de contenido |
| localStorage | Web API | Progreso y borradores locales |

**No usar** Tailwind, frameworks UI (MUI, Chakra), ni dependencias pesadas innecesarias.

---

## 8. Arquitectura del Proyecto

```
ligan-java-lab/
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── CHANGELOG.md            ← Registro cronológico de cambios
│   ├── DECISIONS.md            ← Decisiones de arquitectura (ADR)
│   ├── CONTENT_REGISTRY.md     ← Catálogo de lecciones y fuentes
│   └── ROADMAP.md              ← Hoja de ruta por fases
├── public/
│   ├── fonts/
│   ├── icons/
│   └── og/
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   ├── desktop/            ← Desktop, DesktopIcon, Window, Taskbar
│   │   ├── lesson/             ← LessonHeader, CodeBlock, VideoPlayer
│   │   ├── code-lab/           ← CodeEditor, ConsoleOutput, CodeLab
│   │   ├── quiz/               ← QuizCard, QuizResult
│   │   ├── exercises/          ← ExerciseCard, SolutionReveal
│   │   └── ui/                 ← Button, Badge, Card, Modal, ProgressBar
│   ├── content/
│   │   ├── config.ts           ← Esquemas Zod (Content Collections)
│   │   ├── lessons/            ← Archivos .mdx por lección
│   │   ├── quizzes/            ← JSON de quizzes
│   │   ├── exercises/          ← JSON de ejercicios
│   │   ├── modules/            ← Metadatos de módulos
│   │   └── resources/          ← Recursos externos verificados
│   ├── features/
│   │   ├── desktop/            ← windowManager.ts, desktopState.ts
│   │   ├── progress/           ← progressStore.ts
│   │   ├── quiz/               ← quizEngine.ts
│   │   └── downloads/          ← fileDownload.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← Meta, fonts, tokens globales
│   │   ├── AppLayout.astro     ← Shell del escritorio
│   │   ├── LessonLayout.astro  ← Layout de lección con sidebar
│   │   └── ContentLayout.astro ← Páginas de contenido simple
│   ├── pages/
│   │   ├── index.astro         ← / — Escritorio
│   │   ├── ruta.astro          ← /ruta
│   │   ├── tema/[slug].astro   ← /tema/:slug
│   │   ├── practica.astro      ← /practica
│   │   ├── quiz/[slug].astro   ← /quiz/:slug
│   │   ├── progreso.astro      ← /progreso
│   │   ├── historia.astro      ← /historia
│   │   ├── glosario.astro      ← /glosario
│   │   ├── recursos.astro      ← /recursos
│   │   ├── sobre-el-proyecto.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── tokens.css          ← Variables CSS
│   │   ├── global.css          ← Reset y base
│   │   ├── desktop.css         ← Escritorio y ventanas
│   │   ├── lesson.css          ← Lecciones
│   │   ├── code.css            ← Bloques de código y editor
│   │   └── animations.css      ← Keyframes
│   ├── types/
│   │   ├── lesson.ts
│   │   ├── quiz.ts
│   │   ├── exercise.ts
│   │   ├── module.ts
│   │   └── desktop.ts
│   └── utils/
│       ├── download.ts         ← Generación blob .java
│       ├── format.ts           ← Fechas, slugs, duración
│       ├── storage.ts          ← Wrappers seguros de localStorage
│       └── a11y.ts             ← Helpers de accesibilidad
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

### Justificación de la Arquitectura

| Carpeta | Por qué existe así |
|---------|-------------------|
| `components/` agrupados por dominio | Cada subcarpeta es cohesiva: los componentes del escritorio no saben nada de las lecciones. Facilita encontrar y mantener componentes. |
| `features/` separada de `components/` | La lógica de negocio (gestión de ventanas, motor de quiz, progreso) no depende del framework. Puede moverse al backend sin reescribir. |
| `content/` con esquemas Zod | El contenido se valida en tiempo de build. Ninguna lección puede publicarse con campos faltantes. |
| `types/` centralizado | Un único contrato de datos compartido entre contenido, componentes y features. Evita duplicación y divergencia. |
| `styles/` por dominio | `tokens.css` es la única fuente de tokens. Los demás archivos solo los consumen. Cambiar un color = cambiar una línea. |
| `utils/` con funciones puras | Funciones sin efectos secundarios: testeables, portables y predecibles. |
| `docs/` en raíz | Los documentos de contexto están al mismo nivel que el código, no enterrados. La IA los encuentra siempre. |

---

## 9. Convenciones de Código

### Comentarios (en español, solo cuando aporten valor real)

```ts
// CORRECTO: explica el por qué, no el qué
// Usamos localStorage en vez de sessionStorage para que el progreso
// persista entre sesiones sin necesidad de cuenta
const progreso = localStorage.getItem('ljl_progreso');

// INCORRECTO: repite lo que ya dice el código
// Obtiene el progreso del localStorage
const progreso = localStorage.getItem('ljl_progreso');
```

- `// TODO:` — trabajo pendiente con descripción
- `// NOTA:` — decisión de diseño importante en el código
- `// FIXME:` — bug conocido con descripción del problema
- JSDoc solo para funciones públicas/exportadas con parámetros no obvios

### Nombrado

| Elemento | Convención | Ejemplo |
|----------|------------|---------|
| Archivos de componentes | PascalCase | `DesktopIcon.astro` |
| Archivos de módulos TS | camelCase | `windowManager.ts` |
| Variables CSS | kebab-case | `--sky-strong` |
| Tipos / Interfaces TS | PascalCase | `type Lesson`, `interface Window` |
| Funciones | camelCase | `abrirVentana()` |
| Constantes | UPPER_SNAKE_CASE | `MAX_VENTANAS_ABIERTAS` |
| Rutas de URL | kebab-case | `/tema/variables-y-tipos` |

### Commits (Conventional Commits en español)

```
feat: añadir sistema de ventanas del escritorio
fix: corregir scroll horizontal en móvil en lección
docs: actualizar CHANGELOG con cambios del MVP
chore: configurar Astro con TypeScript strict
style: aplicar tokens de color al componente Window
refactor: extraer lógica de progreso a progressStore
test: verificar persistencia de progreso en localStorage
```

---

## 10. Estrategia de Despliegue

El proyecto se despliega en **Vercel** conectado a la cuenta de GitHub `CarlosBecharaDev`.

### Flujo de Despliegue

```
git push → GitHub (CarlosBecharaDev)
               ↓
         Vercel detecta el push
               ↓
         Ejecuta: npm run build (Astro)
               ↓
         Publica archivos estáticos en CDN global
               ↓
         URL de producción actualizada en segundos
```

### Ramas y Previews

| Rama | URL | Uso |
|------|-----|-----|
| `main` | `ligan-java-lab.vercel.app` (o dominio propio) | Producción |
| Cualquier otra | URL única por preview | Revisión antes de publicar |

### Archivos de Configuración Vercel

- `vercel.json` en la raíz: configuración de build y rutas.
- El adaptador de Astro para Vercel NO es necesario en modo estático puro.
- Si en el futuro se necesitan funciones serverless, se añade `@astrojs/vercel` y se registra en `docs/DECISIONS.md`.

### Code Lab — Decisión Final

El Code Lab usa **simulación con salidas predefinidas** de forma permanente en esta versión del proyecto. No se implementará ejecución real de Java. El botón "Ejecutar" muestra siempre:

> `⚠️ Modo de práctica — los resultados son de ejemplo. La ejecución real de Java no está disponible en esta versión.`

Esta decisión simplifica la arquitectura, elimina costos de servidor y es completamente compatible con Vercel estático.

---

## 11. Proceso para Material Aportado por Carlos

Cuando Carlos entregue Markdown, exportaciones de Notion o ZIPs:

1. Inventariar sin destruir ni sobrescribir los originales.
2. Identificar autor, fuente, licencia y permisos. Sin permiso claro → referencia privada, no publicar.
3. Extraer ideas y reexplicarlas con lenguaje propio y ejemplos nuevos.
4. Verificar hechos técnicos contra documentación oficial de Java antes de publicar.
5. Crear/actualizar ficha en `docs/CONTENT_REGISTRY.md`.
6. No inventar que un ejemplo fue probado: marcar como "pendiente de verificación" cuando sea necesario.

---

## 12. GitHub y Autoría

- Antes del primer commit: verificar `git config user.name` y `git config user.email` corresponden a Carlos Bechara / `CarlosBecharaDev`.
- Carlos es la **única identidad autora y contributor** del repositorio.
- Revisar `git status` y `git diff` antes de cada push para asegurar que no hay secretos, claves ni archivos temporales.
- Nunca hacer push sin autorización explícita de Carlos.

---

## 13. Gestión Viva del Contexto

Antes de cualquier nueva tarea, la IA debe:

1. Leer este archivo y los archivos de `docs/`.
2. Resumir brevemente qué va a cambiar y qué no tocará.
3. Implementar el cambio.
4. Añadir entrada fechada en `docs/CHANGELOG.md`.
5. Registrar decisiones nuevas en `docs/DECISIONS.md` (formato ADR).
6. Actualizar `docs/CONTENT_REGISTRY.md` si se añadió o modificó contenido.
7. Nunca borrar rutas, contenido, decisiones ni ejercicios sin autorización explícita de Carlos.

### Formato ADR para docs/DECISIONS.md

```md
## ADR-00X — [Título]
Fecha: YYYY-MM-DD
Estado: aceptada | reemplazada por ADR-00Y
Contexto: [qué problema se debía resolver]
Decisión: [qué se decidió]
Consecuencias: [beneficios, límites y siguiente paso]
```

---

## 14. Criterios de Calidad y Aceptación

- `npm run build` sin errores ni warnings críticos.
- `npx astro check` sin errores de tipo.
- Navegación por teclado completa: Tab, Enter, Escape, Space.
- Foco visible y etiquetas ARIA en todos los controles interactivos.
- Contraste mínimo AA (4.5:1 para texto normal).
- Sin scroll horizontal en móvil (320 px).
- Los snippets Java son autocontenidos y su salida coincide con la documentada.
- Cada ejercicio tiene enunciado, pistas y solución oculta; los archivos descargados contienen el código exacto mostrado.
- La interfaz no depende de imágenes de stock: usa SVG, CSS y composición propia.
- No se introducen backend ni dependencias fuera del alcance del MVP.

---

## 15. Primer Hito de Construcción (MVP)

1. Configuración del proyecto Astro + TypeScript, tokens CSS y shell del escritorio.
2. Página de inicio con carpetas Java, barra de tareas, ventana de bienvenida y navegación alternativa.
3. Lección completa de muestra: **Variables y tipos de datos**.
4. Code Lab con editor CodeMirror, consola simulada etiquetada, quiz funcional, dos ejercicios con revelar/copia/descarga.
5. Páginas: `/ruta`, `/practica`, `/progreso`, `/historia`, `/recursos`, `404`.
6. Responsive, accesibilidad, build limpio y documentación inicial.

---

## 16. Preguntas Pendientes de Carlos

| # | Pregunta | Estado |
|---|---------|--------|
| 1 | ¿Dominio web definitivo? | Pendiente |
| 2 | ¿Licencia del código y del contenido? | Pendiente |
| 3 | ¿Code Lab Fase 2: sandbox propio o servicio externo (Judge0/Piston)? | Pendiente |
| 4 | ¿Correo verificado en GitHub para configurar Git? | Pendiente (no compartir aquí; configurar localmente) |
| 5 | ¿Preferencia de vídeos: solo hispanohablantes, mixto con subtítulos? | Pendiente |

---

*Última actualización: 2026-07-26 — Creación del contexto maestro mejorado con decisiones iniciales confirmadas.*

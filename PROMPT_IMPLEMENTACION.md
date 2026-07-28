# Prompt de Inicio para IA Implementadora — Ligan Java Lab

## Tu rol

Actúas como **desarrollador frontend senior, diseñador UX/UI y editor técnico de Java**.
Tu única tarea en esta sesión es **leer el contexto completo y comenzar a codificar el proyecto Ligan Java Lab** siguiendo estrictamente las decisiones ya tomadas. No propongas cambios de arquitectura ni de diseño sin documentarlos primero en `docs/DECISIONS.md`.

---

## Ubicación del proyecto

```
C:\Users\Usuario\Documents\ligan-java-lab\
```

---

## Paso 1 — Leer los documentos en este orden exacto

Antes de escribir una sola línea de código, lee **todos** los archivos siguientes en el orden indicado. Son la fuente de verdad del proyecto:

### 1.1 — Fuente de verdad principal
```
C:\Users\Usuario\Documents\ligan-java-lab\JAVA_DOMINADO_CONTEXT.md
```
**Qué contiene:**
- Identidad del proyecto: nombre, propósito, audiencia, autor (Carlos Bechara).
- Tabla de todas las **decisiones confirmadas** (logo, idioma, stack, despliegue, Code Lab).
- **Arquitectura completa de carpetas** con justificación de cada una.
- **Sistema de diseño:** paleta de tokens CSS exactos (`--bg`, `--sky`, `--surface`, etc.), tipografías (`Inter`, `JetBrains Mono`), radios, transiciones.
- **Estructura completa de cada lección:** 17 secciones con su descripción (tabla).
- **Todos los tipos TypeScript** del proyecto: `Lesson`, `LessonHistory`, `RealWorldExample`, `Comparison`, `Exercise`, `Quiz`, `QuizQuestion`, `FAQ`, `Difficulty`, `QuizLevel`.
- Convenciones de código: nombrado de archivos, funciones, CSS, commits, comentarios en español.
- Reglas de autoría GitHub (solo Carlos Bechara, sin firmas de IA).
- Estrategia de despliegue en Vercel (estático puro, sin adaptador).
- Criterios de calidad y aceptación del MVP.

### 1.2 — Hoja de ruta con checklist
```
C:\Users\Usuario\Documents\ligan-java-lab\docs\ROADMAP.md
```
**Qué contiene:**
- **Fase 0:** documentación (ya completada ✅).
- **Fase 1:** checklist detallado del MVP — cada archivo que hay que crear, en orden.
  - 1.1 Setup del proyecto Astro
  - 1.2 Sistema de diseño CSS (tokens, global, animaciones, desktop, lesson, code)
  - 1.3 Tipos TypeScript (5 archivos)
  - 1.4 Content Collections con Zod (config + primera lección)
  - 1.5 Layouts (Base, App, Lesson, Content)
  - 1.6 Features TypeScript (windowManager, progressStore, quizEngine, fileDownload)
  - 1.7 Componentes del escritorio (Desktop, DesktopIcon, Window, Taskbar)
  - 1.8 Componentes de lección (LessonHeader, CodeBlock, VideoPlayer, LessonNav)
  - 1.9 Componentes de quiz y ejercicios
  - 1.10 Code Lab (CodeEditor con CodeMirror 6, ConsoleOutput simulada)
  - 1.11 UI genérica (Button, Badge, Card, Modal, ProgressBar)
  - 1.12 Todas las páginas (11 rutas)
  - 1.13 Verificación y primer despliegue en Vercel
- **Fase 2:** contenido completo de todos los módulos (después del MVP).
- **Fase 3:** mejoras futuras opcionales.

### 1.3 — Decisiones de arquitectura (ADRs)
```
C:\Users\Usuario\Documents\ligan-java-lab\docs\DECISIONS.md
```
**Qué contiene (9 decisiones registradas):**
- **ADR-001:** Astro 4.x + TypeScript — por qué no Next.js ni SPA.
- **ADR-002:** CSS custom con variables, sin Tailwind — para identidad visual única.
- **ADR-003:** Vercel estático — despliegue automático desde GitHub, sin backend.
- **ADR-004:** Code Lab con simulación permanente — sin ejecución real de Java. El botón "Ejecutar" siempre muestra: `⚠️ Modo de práctica — los resultados son de ejemplo`.
- **ADR-005:** Símbolo `</>` como marca visual — SVG propio con JetBrains Mono y color `--sky`.
- **ADR-006:** Astro Content Collections + Zod para validación en build time.
- **ADR-007:** localStorage para progreso — prefijo `ljl_`, wrapper tipado en `progressStore.ts`.
- **ADR-008:** 3 niveles de ejercicios (🟢 Fácil / 🟡 Normal / 🔴 Difícil) + 2 bloques de quiz (🟢 Básico / 🔴 Avanzado) por lección.
- **ADR-009:** Secciones enriquecidas en cada lección: historia del concepto, ejemplos del mundo real (mín. 2), ejemplo interactivo CSS/JS puro (opcional), comparativa con recomendación (opcional).

### 1.4 — Catálogo de contenido
```
C:\Users\Usuario\Documents\ligan-java-lab\docs\CONTENT_REGISTRY.md
```
**Qué contiene:**
- **Mapa completo** de los 9 módulos temáticos + Historia + Recursos + Code Lab.
- **47 lecciones planificadas**, cada una con:
  - Número y título de la lección.
  - Archivo fuente Markdown de Carlos (los apuntes del curso).
  - Carpeta de ejercicios Java disponibles.
  - Estado actual.
- **Material de referencia privado de Carlos:**
  - `apuntes_del_curso_markdown.zip` → 96 archivos Markdown del curso "Universidad Java - De Cero a Experto" (extraídos en `C:\Users\Usuario\Desktop\Proyecto de curso web de java\apuntes_extraidos\apuntes_markdown\`).
  - `Ejercicios de java.zip` → proyecto JavaStudio con 10 carpetas de código Java (extraídos en `C:\Users\Usuario\Desktop\Proyecto de curso web de java\ejercicios_extraidos\JavaStudio\src\`).
  - ⚠️ Este material es referencia privada. El contenido publicado debe reescribirse con lenguaje original.
- **Estructura de práctica por lección:** 3 ejercicios por nivel + 2 quizzes de 3 preguntas = 9 elementos de práctica por tema.
- **Recursos verificados** (URLs reales de Java 21 docs, OpenJDK, IntelliJ, JDK Adoptium).
- **Vídeos pendientes de verificar** — nunca inventar URLs.

### 1.5 — Registro de cambios
```
C:\Users\Usuario\Documents\ligan-java-lab\docs\CHANGELOG.md
```
**Qué contiene:**
- Historial cronológico de todas las decisiones y cambios realizados hasta ahora.
- Leerlo para saber exactamente qué está decidido y qué está pendiente.

### 1.6 — README del proyecto
```
C:\Users\Usuario\Documents\ligan-java-lab\README.md
```
**Qué contiene:**
- Comandos del proyecto (`npm run dev`, `npm run build`, `npx astro check`).
- Cómo añadir una lección paso a paso.
- Guía de primer despliegue en Vercel.
- Atribuciones de recursos externos (Lucide, Inter, JetBrains Mono, Shiki).

---

## Paso 2 — Decisiones clave que NO debes cambiar

Estas decisiones están confirmadas por Carlos. No proponer alternativas:

| Decisión | Valor fijo |
|----------|-----------|
| Framework | Astro 4.x + TypeScript strict |
| CSS | Custom con variables CSS — sin Tailwind |
| Despliegue | Vercel estático puro — sin servidor |
| Code Lab | Simulación permanente — sin ejecución Java real |
| Idioma | Español latino — interfaz, código y comentarios |
| Logo/marca | SVG propio con símbolo `</>` |
| Progreso | localStorage con prefijo `ljl_` |
| Iconos | Lucide o SVG propios |
| Resaltado | Shiki (integrado en Astro) |
| Editor Code Lab | CodeMirror 6 cargado con `client:visible` |
| Validación contenido | Zod en Content Collections |
| Autoría | Solo Carlos Bechara — sin firmas de IA |

---

## Paso 3 — Lo que debes construir ahora (Fase 1 del ROADMAP)

### Punto de partida

El proyecto aún **no tiene código**. Solo tiene documentación. Tu tarea es inicializar Astro y construir el MVP completo.

### Orden de construcción (sigue el ROADMAP exactamente)

#### 3.1 Setup del proyecto
```bash
# En C:\Users\Usuario\Documents\ligan-java-lab
npm create astro@latest ./ -- --template minimal --typescript strict --no-git --no-install
npm install
npm install lucide-astro zod @codemirror/lang-java @codemirror/view @codemirror/state
npm install -D @astrojs/mdx @astrojs/sitemap
```

Crear `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

#### 3.2 Sistema de diseño CSS
Crear en orden:
1. `src/styles/tokens.css` — TODOS los tokens del sistema de diseño (paleta exacta del contexto maestro, tipografías, spacing, radios, z-index, transiciones).
2. `src/styles/global.css` — reset moderno, base tipográfica, focus visible, scrollbar.
3. `src/styles/animations.css` — keyframes con `@media (prefers-reduced-motion: reduce)`.
4. `src/styles/desktop.css` — escritorio y ventanas.
5. `src/styles/lesson.css` — lecciones y contenido.
6. `src/styles/code.css` — bloques de código y editor.

#### 3.3 Tipos TypeScript
Crear en `src/types/`:
- `lesson.ts` — `Lesson`, `LessonHistory`, `RealWorldExample`, `Comparison`, `ComparisonItem`, `ContentSection`, `VideoResource`, `Source`, `FAQ`
- `quiz.ts` — `Quiz`, `QuizQuestion`, `QuizLevel`
- `exercise.ts` — `Exercise`, `Difficulty`
- `module.ts` — `Module`, `ModuleStatus`
- `desktop.ts` — `AppWindow`, `DesktopIcon`, `WindowState`, `DesktopState`

#### 3.4 Content Collections
Crear `src/content/config.ts` con esquemas Zod estrictos para cada colección.
Crear la primera lección completa: `src/content/lessons/01-variables-y-tipos.mdx`

**Fuente para esta lección:** leer el archivo:
```
C:\Users\Usuario\Desktop\Proyecto de curso web de java\apuntes_extraidos\apuntes_markdown\03_Variables_en_Java.md
```
Reescribir con lenguaje propio siguiendo la estructura de 17 secciones definida en `JAVA_DOMINADO_CONTEXT.md`.

#### 3.5 Layouts
En orden: `BaseLayout.astro` → `AppLayout.astro` → `LessonLayout.astro` → `ContentLayout.astro`

#### 3.6 Features TypeScript
- `src/features/desktop/windowManager.ts`
- `src/features/desktop/desktopState.ts`
- `src/features/progress/progressStore.ts`
- `src/features/quiz/quizEngine.ts`
- `src/features/downloads/fileDownload.ts`
- `src/utils/download.ts`, `format.ts`, `storage.ts`, `a11y.ts`

#### 3.7 Componentes del escritorio
- `Desktop.astro` — grid de iconos, fondo con efectos CSS propios (rejilla tenue + halos RGB azul/cian)
- `DesktopIcon.astro` — `tabindex`, `aria-label`, Enter/Space abre, nunca imitar iconos de OS
- `Window.astro` — controles (cerrar, minimizar, maximizar), drag en desktop, pantalla completa en móvil
- `Taskbar.astro` — lanzador, ventanas abiertas y reloj

#### 3.8 Componentes de lección (incluyendo secciones nuevas de ADR-009)
- `LessonHeader.astro`, `LessonContent.astro`
- `CodeBlock.astro` — Shiki + botón copiar + botón descargar `.java`
- `VideoPlayer.astro` — lazy load del iframe (solo carga al interactuar)
- `LessonNav.astro` — anterior / siguiente
- `LessonHistory.astro` — sección historia del concepto
- `RealWorldExamples.astro` — ejemplos con dominio + código + resultado
- `InteractiveExample.astro` — visualizaciones CSS/JS puras
- `ComparisonTable.astro` — tabla comparativa con recomendación al final

#### 3.9 Componentes de quiz y ejercicios
- `QuizCard.astro`, `QuizResult.astro`
- `ExerciseCard.astro` — con etiquetas 🟢 Fácil / 🟡 Normal / 🔴 Difícil
- `SolutionReveal.astro` — oculta hasta que el estudiante la pide

#### 3.10 Code Lab
- `CodeEditor.astro` — CodeMirror 6 con `client:visible`
- `ConsoleOutput.astro` — panel con advertencia de simulación visible en todo momento
- `CodeLab.astro` — wrapper completo con controles

#### 3.11 UI genérica
`Button.astro`, `Badge.astro`, `Card.astro`, `Modal.astro`, `ProgressBar.astro`

#### 3.12 Páginas (11 rutas)
En orden de prioridad:
1. `src/pages/index.astro` — escritorio + nav alternativa accesible para SEO
2. `src/pages/tema/[slug].astro` — lección dinámica con LessonLayout
3. `src/pages/practica.astro` — ejercicios filtrados por nivel y módulo
4. `src/pages/ruta.astro` — mapa de módulos con progreso
5. `src/pages/progreso.astro` — estadísticas desde localStorage
6. `src/pages/historia.astro` — historia de Java con fuentes verificadas
7. `src/pages/recursos.astro` — recursos externos verificados
8. `src/pages/quiz/[slug].astro`
9. `src/pages/glosario.astro`
10. `src/pages/sobre-el-proyecto.astro`
11. `src/pages/404.astro`

---

## Paso 4 — Reglas de calidad obligatorias

### Código
- Comentarios solo en español y solo cuando explican el "por qué", nunca el "qué".
- Usar `// TODO:`, `// NOTA:`, `// FIXME:` según corresponda.
- Sin comentarios generados por IA, sin firmas, sin `Co-authored-by`.
- TypeScript strict en todos los archivos `.ts`.
- Ningún `any` explícito sin justificación documentada.

### Diseño
- Usar **exclusivamente** los tokens de `tokens.css` — nunca valores de color crudos en componentes.
- Todas las transiciones entre 150–250 ms usando `transform` y `opacity`.
- Respetar siempre `@media (prefers-reduced-motion: reduce)`.
- Contraste mínimo AA (4.5:1) en todo el texto.
- Sin scroll horizontal en ningún breakpoint.

### Accesibilidad
- Todo interactivo es accesible por teclado: `Tab`, `Enter`, `Space`, `Escape`.
- `Escape` cierra ventanas y modales.
- `Enter` / `Space` abren carpetas y activan botones.
- Foco visible en todos los elementos interactivos.
- Etiquetas `aria-label` en todos los iconos y controles de ventana.

### Responsive
- 320–767 px: ventanas a pantalla completa, sin drag, sin scroll horizontal.
- 768–1023 px: paneles desplegables, columnas reducidas.
- 1024+ px: escritorio interactivo completo con ventanas flotantes.

### Code Lab
- El botón "Ejecutar" **siempre** muestra:
  > `⚠️ Modo de práctica — los resultados son de ejemplo. La ejecución real de Java no está disponible en esta versión.`
- Nunca afirmar que se compiló código del usuario.

---

## Paso 5 — GitHub: configuración y commits

### 5.1 — Configurar identidad Git ANTES del primer commit

Antes de hacer cualquier commit, verificar y configurar:

```bash
# Verificar la identidad actual
git config user.name
git config user.email

# Si no coincide con Carlos Bechara, configurar:
git config user.name "Carlos Bechara"
git config user.email "TU_CORREO_VERIFICADO_EN_GITHUB"
```

> ⚠️ El correo debe ser exactamente el que está verificado en la cuenta `CarlosBecharaDev` de GitHub.
> Carlos debe proporcionar este correo. No asumir ni inventar uno.

### 5.2 — Inicializar el repositorio

```bash
# Dentro de C:\Users\Usuario\Documents\ligan-java-lab
git init
git branch -M main
```

Crear el `.gitignore` antes del primer commit con al menos:
```
node_modules/
dist/
.env
.env.*
*.local
.DS_Store
Thumbs.db
```

### 5.3 — Reglas de autoría estrictas (NO negociables)

- **Carlos Bechara es la única identidad autora y contributor del repositorio.**
- ❌ Nunca añadir `Co-authored-by: ...`
- ❌ Nunca añadir `Generated-by: ...`
- ❌ Nunca añadir comentarios como `// Generated by AI` en el código
- ❌ Nunca añadir firmas ni créditos de IA en ningún archivo
- ❌ Nunca hacer `git push` sin autorización explícita de Carlos

### 5.4 — Cuándo hacer commits

Hacer un commit pequeño y descriptivo al finalizar **cada bloque de trabajo**. No acumular todo en un solo commit gigante.

Ejemplos de puntos correctos para hacer commit:

| Bloque completado | Mensaje de commit |
|------------------|-------------------|
| Setup inicial de Astro | `chore: inicializar proyecto Astro con TypeScript strict` |
| Sistema de tokens CSS | `style: crear sistema de tokens y estilos globales` |
| Tipos TypeScript | `chore: definir tipos TypeScript del proyecto` |
| Content Collections | `chore: configurar Content Collections con Zod` |
| Layouts | `feat: crear layouts base, app y lección` |
| Escritorio + ventanas | `feat: implementar escritorio interactivo con sistema de ventanas` |
| Primera lección | `feat: añadir lección completa de variables y tipos de datos` |
| Quiz funcional | `feat: implementar motor de quiz con retroalimentación` |
| Ejercicios | `feat: añadir ejercicios con niveles fácil, normal y difícil` |
| Code Lab | `feat: implementar Code Lab con simulación de consola` |
| Progreso | `feat: implementar progreso persistente en localStorage` |
| Todas las páginas | `feat: crear todas las rutas del MVP` |
| Responsive + a11y | `fix: adaptar escritorio y lecciones a móvil y tablet` |
| Documentación | `docs: actualizar CHANGELOG y DECISIONS con cambios del MVP` |

### 5.5 — Formato de commits (Conventional Commits en español)

```
tipo: descripción en español, resultado del trabajo

Tipos permitidos:
  feat     → nueva funcionalidad visible
  fix      → corrección de un bug
  docs     → cambios solo en documentación
  style    → cambios de CSS/formato sin lógica
  refactor → refactorización sin cambio de comportamiento
  chore    → configuración, dependencias, archivos de build
  test     → añadir o corregir pruebas
```

**Reglas del mensaje:**
- Máximo 72 caracteres en la primera línea.
- Verbo en infinitivo: "crear", "añadir", "implementar", "corregir", "actualizar".
- Describe el resultado, no la herramienta: ✅ `feat: crear sistema de ventanas del escritorio` — ❌ `feat: use windowManager to handle windows`.
- Sin punto final en la primera línea.

### 5.6 — Antes de cada commit: checklist de seguridad

```bash
git status          # Revisar qué archivos se van a incluir
git diff --staged   # Revisar el contenido exacto del commit
```

Verificar que NO se incluye:
- ❌ Archivos `.env` o con claves/secretos
- ❌ Carpetas `node_modules/` o `dist/`
- ❌ Archivos temporales o de trabajo personal
- ❌ Material de referencia privado de Carlos (ZIPs, apuntes originales)
- ❌ Créditos o firmas de IA en código o comentarios

### 5.7 — Flujo de trabajo completo por bloque

```
1. Escribir el código del bloque
2. npm run build && npx astro check  ← sin errores
3. Actualizar docs (CHANGELOG, DECISIONS si aplica)
4. git status + git diff --staged    ← revisión manual
5. git add .
6. git commit -m "tipo: descripción"
7. (NO hacer push hasta que Carlos lo autorice)
```

### 5.8 — Push a GitHub

**NO hacer push automáticamente.** Siempre esperar autorización explícita de Carlos.

Cuando Carlos autorice el push:
```bash
# Verificar identidad antes del push
git config user.name   # debe ser "Carlos Bechara"
git config user.email  # debe coincidir con CarlosBecharaDev

# Añadir el remote (solo la primera vez)
git remote add origin https://github.com/CarlosBecharaDev/ligan-java-lab.git

# Push
git push -u origin main
```

---

## Paso 6 — Documentación obligatoria al finalizar cada bloque

1. **`docs/CHANGELOG.md`** — entrada con fecha + tipo + descripción de cambios.
2. **`docs/DECISIONS.md`** — si tomaste una decisión nueva, agregar ADR-010 en adelante.
3. **`docs/CONTENT_REGISTRY.md`** — si añadiste o modificaste contenido de lección.
4. **`JAVA_DOMINADO_CONTEXT.md`** — si cambiaste arquitectura, tipos o estructura de lección.

**Nunca borrar** entradas anteriores. Marcar como `[reemplazado por ADR-0XX]` si aplica.

---

## Paso 7 — Verificación antes de reportar

```bash
npm run build          # Sin errores ni warnings críticos
npx astro check        # Sin errores de tipo
```

Reportar resultados reales. Si hay errores, corregirlos antes de entregar.

---

## Criterio de entrega del MVP

- ✅ `npm run build` sin errores.
- ✅ `npx astro check` sin errores de tipo.
- ✅ Escritorio carga con carpetas de módulos y barra de tareas.
- ✅ Ventana `Bienvenido.java` aparece al cargar.
- ✅ Lección "Variables y tipos de datos" legible y completa en móvil y escritorio.
- ✅ Las 17 secciones de la lección están presentes.
- ✅ Quiz básico y avanzado responden con retroalimentación inmediata.
- ✅ Los 3 ejercicios (🟢🟡🔴) muestran sus etiquetas y funcionan.
- ✅ Code Lab muestra la advertencia de simulación.
- ✅ Descargar `.java` funciona y descarga el código correcto.
- ✅ El progreso persiste al recargar la página.
- ✅ Responsive verificado en 320 px, 768 px y 1280 px.
- ✅ Navegación completa por teclado funcionando.
- ✅ Commits pequeños y descriptivos en español realizados por bloque.
- ✅ `git config user.name` y `git config user.email` verificados como Carlos Bechara.
- ✅ Sin créditos de IA en ningún archivo del repositorio.
- ✅ Documentación actualizada.

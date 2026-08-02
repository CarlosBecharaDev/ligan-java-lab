# Ligan Java Lab

Plataforma educativa web para aprender Java 21 LTS desde cero, en español latinoamericano, con versión en inglés bajo `/en/`.

## Stack

- **Framework**: Astro 7.1.3 (static site generation)
- **Content**: Content Layer API (`defineCollection`, `glob` loader, `z` from `astro/zod`)
- **Content collections** (ES + EN espejo): lessons (MDX), quizzes (JSON), exercises (JSON arrays), modules (JSON)
- **Client-side**: Astro `<script>` tags (module-scoped), localStorage for progress tracking
- **Syntax highlighting**: Shiki (singleton en `src/lib/highlighter.ts`, tema `github-dark-default`, langs `java`, `bash`)
- **Icons**: Lucide
- **Styling**: CSS custom properties with design tokens

## Project Structure

```
src/
├── content/
│   ├── lessons/          # 50 MDX lesson files ES (módulos 00-09)
│   ├── quizzes/          # 92 JSON quiz files ES
│   ├── exercises/        # 46 JSON exercise files ES (arrays de 3 niveles)
│   ├── modules/          # 10 JSON module definition files ES
│   ├── en-lessons/       # 50 MDX ES espejo EN (rutas /en/)
│   ├── en-quizzes/       # 92 JSON quiz files EN
│   ├── en-exercises/     # 46 JSON exercise files EN
│   └── en-modules/       # 10 JSON module files EN
├── components/
│   ├── desktop/          # Desktop UI (Desktop, DesktopIcon, MainWindow, Taskbar, RetroChars, RetroPlayer, ThemeSelector)
│   ├── lesson/           # Lesson components (LessonHeader, LessonExplorer, CodeBlock, ComparisonTable, etc.)
│   ├── quiz/             # QuizCard
│   ├── exercises/        # ExerciseCard, SolutionReveal
│   └── ui/               # Card, LiganLogo
├── features/
│   └── desktop/          # desktopState.ts (config de iconos de módulos)
├── layouts/              # BaseLayout, AppLayout, ContentLayout, LessonLayout
├── pages/                # Páginas ES + espejo /en/ + spotify-callback
├── styles/               # Global CSS with design tokens
└── lib/                  # course.ts, lesson.ts, quiz.ts, exercise.ts, module.ts, desktop.ts, progress.ts, highlighter.ts, i18n.ts, glossary.ts, theme.ts, spotify.ts, lyrics.ts
```

## Content Model

- **Module**: `{ id, slug, number, title, description, icon, status, lessonCount, lessons: string[] }`
- **Lesson**: MDX con frontmatter: `{ title, slug, module, level, objectives, prerequisites, history?, realWorldExamples, hasInteractive, comparisons?, videos, faqs, sources, status, lastReviewed }`
- **Quiz**: `{ id, lessonSlug, level: 'basico'|'avanzado', questions: [{ id, question, options, correctIndex, explanations }] }`
- **Exercise** (JSON array): `[{ id, lessonSlug, title, difficulty: 'facil'|'normal'|'dificil', description, template, hints, solution, solutionExplanation, expectedOutput }]`

## Key Conventions

- **Lesson slugs**: kebab-case Spanish (e.g., `variables-y-tipos`, `clases-objetos`)
- **Quiz file naming**: `{number}-{slug}-{level}.json` (no "quiz-" prefix)
- **Exercise file naming**: `{number}-{slug}.json` (array con 3 niveles)
- **Module-lesson relationship**: Module's `lessons` array lists lesson slugs in order
- **Videos**: Each lesson has one video entry with channel and summary (channels: Píldoras Informáticas, HolaMundo, Código Facilito, MoureDev)
- **Status**: `"publicado"` = published, `"borrador"` = draft
- **i18n**: colecciones `*En` y páginas `/en/` son espejo 1:1 de ES; ids/slugs/levels idénticos, solo texto visible traducido. Mapeo de nivel: `Inicial`→`Beginner`, `Intermedio`→`Intermediate`, `Avanzado`→`Advanced`. Código Java intacto.

## Routing

- `/tema/[slug]` — Dynamic lesson pages (generated via getStaticPaths)
- `/quiz/[slug]` — Dynamic quiz pages (grouped by lessonSlug)
- `/practica` — Exercise listing (grouped by lessonSlug)
- `/ruta` — Learning path (module cards → first lesson)
- `/glosario` — Glossary (60+ terms A-Z)
- `/progreso` — Progress tracking (localStorage-based)
- `/recursos` — External resources page
- `/historia`, `/sobre-el-proyecto`, `/404`, `/spotify-callback`
- Todas las páginas tienen su espejo bajo `/en/`

## Progress Tracking

- localStorage key: `ligan-java-lab-progress`
- Lógica unificada y tipada en `src/lib/progress.ts` (`loadProgress`/`saveProgress`/`emptyProgress`/`ProgressData`)
- Tracks: completed lessons, quizzes, and exercises
- Displays per-module progress bars and overall percentage
- Streak calculation included

## Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type check + lint de Astro (0 errores/warnings/hints)
npm run check
```

## Build Info

- Current lesson count: 50 (ES) + 50 (EN)
- Current quiz count: 92 (ES) + 92 (EN)
- Current exercise count: 46 (ES) + 46 (EN)
- Current module count: 10 (ES) + 10 (EN)
- Módulo 09-proyectos aún sin quizzes/ejercicios
- Build target: fully static site (no SSR)
- `npm run check`: 0 errores, 0 warnings, 0 hints
- `npm run build`: ~210 páginas en ~8s

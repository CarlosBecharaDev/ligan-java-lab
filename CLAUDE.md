# Ligan Java Lab

Plataforma educativa web para aprender Java 21 LTS desde cero, en español latinoamericano.

## Stack

- **Framework**: Astro 7.1.3 (static site generation)
- **Content**: Content Layer API (`defineCollection`, `z` from `astro:content`, `glob` loader)
- **Content collections**: lessons (MDX), quizzes (JSON), exercises (JSON arrays), modules (JSON)
- **Client-side**: Astro `<script>` tags (module-scoped), localStorage for progress tracking
- **Syntax highlighting**: Shiki
- **Icons**: Lucide
- **Styling**: CSS custom properties with design tokens

## Project Structure

```
src/
├── content/
│   ├── lessons/          # 46 MDX lesson files (modules 01-09)
│   ├── quizzes/          # 84 JSON quiz files (5 questions each)
│   ├── exercises/        # 42 JSON exercise files (3 levels each)
│   └── modules/          # 9 JSON module definition files
├── components/
│   ├── desktop/          # Desktop UI (Desktop, DesktopIcon, Window, Taskbar)
│   ├── lesson/           # Lesson components (LessonHeader, CodeBlock, ComparisonTable)
│   ├── quiz/             # QuizCard
│   ├── exercises/        # ExerciseCard
│   └── ui/               # Generic UI components (Card)
├── features/
│   └── desktop/          # Desktop state (desktopState.ts) - module icons config
├── layouts/              # ContentLayout
├── pages/                # Astro pages (tema/[slug], quiz/[slug], ruta, practica, etc.)
├── styles/               # Global CSS with design tokens
└── lib/                  # Shared utilities
```

## Content Model

- **Module**: `{ id, slug, number, title, description, icon, status, lessonCount, lessons: string[] }`
- **Lesson**: MDX with frontmatter: `{ title, slug, module, level, objectives, prerequisites, status, videos, faqs, sources }`
- **Quiz**: `{ lessonSlug, title, difficulty, questions: [{ question, options, correctAnswer, explanation }] }`
- **Exercise**: `{ lessonSlug, title, difficulty, levels: [{ level, description, starterCode, solution }] }`

## Key Conventions

- **Lesson slugs**: kebab-case Spanish (e.g., `variables-y-tipos`, `clases-objetos`)
- **Quiz file naming**: `{number}-{slug}-{level}.json` (no "quiz-" prefix)
- **Exercise file naming**: `{number}-{slug}-{level}.json`
- **Module-lesson relationship**: Module's `lessons` array lists lesson slugs in order
- **Videos**: Each lesson has one video entry with channel and summary (channels: Píldoras Informáticas, HolaMundo, Código Facilito, MoureDev)
- **Status**: `"publicado"` = published, `"borrador"` = draft

## Routing

- `/tema/[slug]` — Dynamic lesson pages (generated via getStaticPaths)
- `/quiz/[slug]` — Dynamic quiz pages (grouped by lessonSlug)
- `/practica` — Exercise listing (grouped by lessonSlug)
- `/ruta` — Learning path (module cards → first lesson)
- `/glosario` — Glossary (60+ terms A-Z)
- `/progreso` — Progress tracking (localStorage-based)
- `/recursos` — External resources page

## Progress Tracking

- localStorage key: `ligan-java-lab-progress`
- Tracks: completed lessons, quizzes, and exercises
- Displays per-module progress bars and overall percentage
- Streak calculation included

## Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Build Info

- Current lesson count: 46
- Current quiz count: 84
- Current exercise count: 42
- Current module count: 9
- Build target: fully static site (no SSR)
- All pages generated via getStaticPaths() with dynamic content

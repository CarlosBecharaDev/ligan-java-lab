# Decisiones de Arquitectura (ADR)

Registro cronológico de decisiones técnicas tomadas en el proyecto Ligan Java Lab.

---

## ADR-001: Astro como framework
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Contexto:** Se necesitaba un framework web moderno, rápido, con soporte SSR/SSG y TypeScript nativo.  
**Decisión:** Usar Astro como framework principal.  
**Alternativas evaluadas:** Next.js (demasiado pesado para contenido estático), SPA pura (sin SSR).  
**Consecuencias:** Build estático, Zero JS by default, Islands architecture para interactividad.

---

## ADR-002: CSS custom con variables, sin Tailwind
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Contexto:** Se necesita una identidad visual única con tema oscuro personalizado.  
**Decisión:** Usar CSS custom properties (tokens.css), sin framework CSS.  
**Consecuencias:** Control total del diseño. Tokens centralizados en `src/styles/tokens.css`.

---

## ADR-003: Vercel estático
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Contexto:** Se necesita despliegue automático sin servidor backend.  
**Decisión:** Despliegue estático en Vercel.  
**Consecuencias:** Sin SSR, todo se genera en build time.

---

## ADR-004: Code Lab con simulación permanente
**Fecha:** Fase 0 | **Estado:** Reemplazada por ADR-017  
**Contexto:** Ejecutar Java real en el navegador requiere backend o WebAssembly pesado.  
**Decisión:** CodeMirror 6 como editor, ejecución simulada. Botón "Ejecutar" muestra output de ejemplo con warning: "⚠️ Modo de práctica — los resultados son de ejemplo."  
**Consecuencias:** En 2026-08-01 el Code Lab completo se eliminó por ser código muerto (ADR-017). La práctica se hace con ejercicios y soluciones revelables, sin editor en navegador.

---

## ADR-005: Símbolo `</>` como marca visual
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** Logo con SVG propio, JetBrains Mono, color `--sky (#57B8FF)`.

---

## ADR-006: Astro Content Collections + Zod
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** Astro Content Layer API con esquemas Zod. Colecciones: lessons, quizzes, exercises, modules.

---

## ADR-007: localStorage para progreso
**Fecha:** Fase 0 | **Estado:** Reemplazada por ADR-016  
**Decisión:** localStorage con prefijo `ljl_`, wrapper en `src/features/progress/progressStore.ts`.  
**Claves:** `ljl_progreso`, `ljl_quiz_*`, `ljl_editor_*`.  
**Consecuencias:** En 2026-08-01 se unificó en `src/lib/progress.ts` con una sola clave `ligan-java-lab-progress` (ADR-016).

---

## ADR-008: Niveles de ejercicios y quiz
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** 3 niveles de ejercicios (🟢 Fácil / 🟡 Normal / 🔴 Difícil) + 2 bloques de quiz (🟢 Básico / 🔴 Avanzado) por lección. 5 preguntas por quiz.

---

## ADR-009: Secciones enriquecidas en lecciones
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** Cada lección incluye: historia del concepto, ejemplos del mundo real (mín. 2), ejemplo interactivo (opcional), comparativa (opcional), FAQ, fuentes.

---

## ADR-010: Astro 7 Content Layer API
**Fecha:** 2026-07-26 | **Estado:** Aceptada  
**Contexto:** El template instaló Astro 7.1.3, no 4.x.  
**Decisión:** Usar Content Layer API de Astro 7.  
**Cambios:** `src/content/config.ts` → `src/content.config.ts`, `entry.render()` → `render(entry)` de `astro:content`, `getStaticPaths` usa `l.id`, `glob()` loader de `astro/loaders`, `z.array()` para JSON arrays.

---

## ADR-011: `@lib/` en lugar de `@types/`
**Fecha:** 2026-07-26 | **Estado:** Aceptada  
**Contexto:** TS 6.x lanza TS6137 con alias `@types/` (prefijo reservado para DefinitelyTyped).  
**Decisión:** Renombrar `src/types/` → `src/lib/`, alias `@lib/*`.

---

## ADR-012: Zod 4
**Fecha:** 2026-07-26 | **Estado:** Aceptada  
**Contexto:** Astro 7 incluye Zod 4.4.3. `z.record()` requiere 2 args.  
**Decisión:** Usar `z.record(z.string(), z.string())`.

---

## ADR-013: Scripts client-side con data attributes
**Fecha:** 2026-07-26 | **Estado:** Aceptada  
**Contexto:** `<script>` en .astro no procesa `{expresiones}`.  
**Decisión:** Pasar valores dinámicos con `data-*` attributes, leer con `getAttribute()`. Funciones utilitarias inlineadas.

---

## ADR-014: `z` desde `astro/zod`
**Fecha:** 2026-08-01 | **Estado:** Aceptada  
**Contexto:** `z` de `astro:content` está deprecado en Astro 7 y generaba ~60 warnings.  
**Decisión:** Importar `z` de `astro/zod` en `src/content.config.ts`.  
**Consecuencias:** 0 warnings en `astro check`; mismo API de Zod.

---

## ADR-015: Singleton de Shiki en `src/lib/highlighter.ts`
**Fecha:** 2026-08-01 | **Estado:** Aceptada  
**Contexto:** Cada `getHighlighter()` creado por `CodeBlock` generaba el warning "Shiki created 410 instances" y ralentizaba el build (~16s).  
**Decisión:** Un único `getHighlighter()` reutilizable en `src/lib/highlighter.ts` (tema `github-dark-default`, langs `java`, `bash`).  
**Consecuencias:** Build ~8s, 0 warnings. Los componentes importan `getHighlighter` desde `@lib/highlighter`.

---

## ADR-016: Progreso unificado y tipado en `src/lib/progress.ts`
**Fecha:** 2026-08-01 | **Estado:** Aceptada  
**Contexto:** La lógica de localStorage de progreso estaba duplicada en 6 scripts (ES y EN) con claves y shapes inconsistentes; reemplaza al antiguo `features/progress/progressStore.ts` (ADR-007).  
**Decisión:** Un solo módulo tipado `src/lib/progress.ts` con `loadProgress`, `saveProgress`, `emptyProgress` y el tipo `ProgressData`. Clave única `ligan-java-lab-progress`.  
**Consecuencias:** Las páginas `tema`, `quiz` y `progreso` (ES y EN) comparten el mismo contrato; emiten/escuchan `progress-update`. `features/progress/` eliminado.

---

## ADR-017: Eliminación de código muerto
**Fecha:** 2026-08-01 | **Estado:** Aceptada  
**Contexto:** Tras el MVP quedaron componentes, features y utils sin uso (Code Lab, sistema de ventanas, motor de quiz, descargas, `utils/`). ADR-004 quedó obsoleta.  
**Decisión:** Eliminar todo el código no referenciado y sus dependencias (`@codemirror/*`, `zod`).  
**Consecuencias:** `npm run check`: 0/0/0; build ~210 páginas; deps reducidas a `astro`, `@astrojs/mdx`, `@astrojs/sitemap`, `lucide-astro`.

---

## ADR-018: Internacionalización ES/EN con colecciones espejo
**Fecha:** 2026-08-01 | **Estado:** Aceptada  
**Contexto:** El contenido debe estar disponible en inglés sin duplicar código de componentes.  
**Decisión:** Colecciones espejo `en-lessons`/`en-quizzes`/`en-exercises`/`en-modules` (mismo schema, ids/slugs/levels idénticos, solo texto traducido) y páginas `/en/`. Nivel mapeado: `Inicial`→`Beginner`, `Intermedio`→`Intermediate`, `Avanzado`→`Advanced`.  
**Consecuencias:** 8 colecciones en `content.config.ts`; `BaseLayout` fuerza `data-i18n-force="en"` en rutas `/en/`; `lib/i18n.ts` centraliza traducciones y cambio de idioma (`ligan-lang`).

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
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Contexto:** Ejecutar Java real en el navegador requiere backend o WebAssembly pesado.  
**Decisión:** CodeMirror 6 como editor, ejecución simulada. Botón "Ejecutar" muestra output de ejemplo con warning: "⚠️ Modo de práctica — los resultados son de ejemplo."  
**Consecuencias:** Experiencia de práctica sin complejidad de backend.

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
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** localStorage con prefijo `ljl_`, wrapper en `src/features/progress/progressStore.ts`.  
**Claves:** `ljl_progreso`, `ljl_quiz_*`, `ljl_editor_*`.

---

## ADR-008: Niveles de ejercicios y quiz
**Fecha:** Fase 0 | **Estado:** Aceptada  
**Decisión:** 3 niveles de ejercicios (🟢 Fácil / 🟡 Normal / 🔴 Difícil) + 2 bloques de quiz (🟢 Básico / 🔴 Avanzado) por lección. 3 preguntas por quiz.

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

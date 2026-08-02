# ☕ Ligan Java Lab

> **Plataforma educativa web interactiva para aprender Java 21 LTS desde cero — en español latino.**

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000?logo=vercel)](https://ligan-java-lab.vercel.app)
[![Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-yellow)](#licencia)

**🌐 Live:** [https://ligan-java-lab.vercel.app](https://ligan-java-lab.vercel.app)

---

## 📖 ¿Qué es Ligan Java Lab?

Un **escritorio interactivo** llamado `JAVA_WORKSPACE` que simula un sistema operativo retro. Cada módulo del curso es una carpeta en el escritorio que abre ventanas con lecciones, quizzes, ejercicios y ejemplos del mundo real.

El estudiante aprende **leyendo, practicando y verificando su progreso** — todo dentro de la misma plataforma, sin instalar nada.

### ✨ Características

- 🖥️ **Escritorio interactivo** tipo Windows 95 con ventanas, taskbar e iconos
- 📚 **50 lecciones** en MDX con sintaxis resaltada (Shiki)
- 🧠 **92 quizzes** interactivos para evaluar conocimientos
- 💻 **46 ejercicios prácticos** con 3 niveles de dificultad
- 🎥 **Videos recomendados** de canales educativos en español
- 🌐 **Bilingüe ES/EN**: toda la plataforma y el contenido también en inglés bajo `/en/`
- 📊 **Progreso persistente** en localStorage con racha de estudio
- 📖 **Glosario** con más de 60 términos clave de Java
- 🗺️ **Ruta de aprendizaje** guiada progresivamente

---

## 🚀 Stack Tecnológico

| Tecnología | Propósito |
|-----------|-----------|
| **Astro 7** | Framework de generación estática |
| **TypeScript** | Tipado seguro en todo el proyecto |
| **Content Collections** | Gestión de contenido con esquemas Zod |
| **MDX** | Lecciones con componentes embebidos |
| **CSS Custom Properties** | Sistema de tokens de diseño retro |
| **Shiki** | Resaltado de sintaxis en lecciones |
| **Lucide** | Iconografía |
| **Vercel** | Hosting y despliegue continuo |

---

## 🏗️ Estructura del Proyecto

```
ligan-java-lab/
├── docs/                       # Documentación del proyecto
│   ├── CHANGELOG.md
│   ├── DECISIONS.md            # Decisiones de arquitectura (ADR)
│   ├── CONTENT_REGISTRY.md     # Catálogo de lecciones y fuentes
│   └── ROADMAP.md              # Hoja de ruta
├── public/                     # Archivos estáticos
├── src/
│   ├── components/
│   │   ├── desktop/            # Escritorio, ventanas, taskbar, reproductor
│   │   ├── lesson/             # Componentes de lección
│   │   ├── quiz/               # Componentes de quiz
│   │   ├── exercises/          # Componentes de ejercicios
│   │   └── ui/                 # Card, LiganLogo
│   ├── content/
│   │   ├── lessons/            # 50 lecciones en MDX (ES)
│   │   ├── quizzes/            # 92 quizzes en JSON (ES)
│   │   ├── exercises/          # 46 ejercicios en JSON (ES)
│   │   ├── modules/            # 10 módulos del curso (ES)
│   │   ├── en-lessons/         # Espejo en inglés
│   │   ├── en-quizzes/         # Espejo en inglés
│   │   ├── en-exercises/       # Espejo en inglés
│   │   └── en-modules/         # Espejo en inglés
│   ├── layouts/                # BaseLayout, AppLayout, ContentLayout, LessonLayout
│   ├── pages/                  # Rutas ES + espejo /en/ (tema, quiz, ruta, glosario...)
│   ├── styles/                 # tokens.css, global.css, desktop.css, code.css...
│   ├── features/               # Lógica del escritorio (desktopState.ts)
│   └── lib/                    # course, progress, highlighter, i18n, glossary, theme...
├── astro.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## ⚙️ Requisitos

- **Node.js** >= 22.12.0
- **npm** >= 9

---

## 🔧 Instalación y Uso

```bash
# Clonar
git clone https://github.com/CarlosBecharaDev/ligan-java-lab.git
cd ligan-java-lab

# Instalar dependencias
npm install

# Desarrollo
npm run dev           # http://localhost:4321

# Producción
npm run build         # Genera sitio estático en dist/
npm run preview       # Previsualizar build local

# Verificación
npm run check      # Verificar tipos (astro check, 0 errores/warnings/hints)
```

## 🎵 Spotify

El reproductor integrado usa PKCE y no requiere exponer un secreto. Consulta la guía de configuración y las URI de redirección en [docs/SPOTIFY.md](docs/SPOTIFY.md).

---

## 🌍 Despliegue en Vercel

El sitio está desplegado en **Vercel** con despliegue continuo desde `main`.

**🔗 https://ligan-java-lab.vercel.app**

| Rama | URL |
|------|-----|
| `main` | Producción: `ligan-java-lab.vercel.app` |
| Otras | Preview automáticas por PR |

Cada `git push` a `main` activa un despliegue automático.

---

## 📚 Contenido del Curso

| Módulo | Lecciones | Quizzes | Ejercicios | Estado |
|--------|-----------|---------|------------|--------|
| 00 — Introducción | 1 | 2 | 1 | ✅ |
| 01 — Fundamentos | 6 | 12 | 6 | ✅ |
| 02 — Control de flujo | 5 | 10 | 5 | ✅ |
| 03 — Métodos y Arrays | 6 | 12 | 6 | ✅ |
| 04 — POO | 7 | 14 | 7 | ✅ |
| 05 — Colecciones | 6 | 12 | 6 | ✅ |
| 06 — Errores y Debug | 5 | 10 | 5 | ✅ |
| 07 — Archivos y APIs | 4 | 8 | 4 | ✅ |
| 08 — Java Moderno | 6 | 12 | 6 | ✅ |
| 09 — Proyectos | 4 | 0 | 0 | ⚪ Pendiente |

**Total (por idioma):** 50 lecciones · 92 quizzes · 46 ejercicios · 10 módulos

> Todo el contenido está disponible también en **inglés** (colecciones `en-*` y rutas `/en/`).

---

## 📝 Cómo Añadir una Lección

1. Crear el archivo MDX en `src/content/lessons/[slug].mdx`
2. Crear el quiz en `src/content/quizzes/[slug].json` (2 por lección: `basico` + `avanzado`)
3. Crear los ejercicios en `src/content/exercises/[slug].json` (array con 3 niveles)
4. Registrar en `docs/CONTENT_REGISTRY.md`
5. Si se desea la versión en inglés, replicar en `src/content/en-lessons/`, `en-quizzes/`, `en-exercises/` y la ruta `/en/tema/[slug]`
6. Ejecutar `npm run check` y `npm run build` y verificar sin errores

---

## 📄 Licencia

Proyecto educativo de código abierto. Todos los derechos reservados © **Carlos Bechara**.

---

## 👤 Autor

**Carlos Bechara** — [@CarlosBecharaDev](https://github.com/CarlosBecharaDev)

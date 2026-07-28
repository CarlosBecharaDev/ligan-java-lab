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
- 📚 **46 lecciones** en MDX con sintaxis resaltada (Shiki)
- 🧠 **84 quizzes** interactivos para evaluar conocimientos
- 💻 **42 ejercicios prácticos** con 3 niveles de dificultad
- 🎥 **Videos recomendados** de canales educativos en español
- 🌐 **Internacionalización** (ES/EN) con cambio de idioma en vivo
- 📊 **Progreso persistente** en localStorage con racha de estudio
- 📝 **Code Lab** con editor de código simulado y descarga de archivos `.java`
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
| **CodeMirror 6** | Editor de código en el Code Lab |
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
│   │   ├── desktop/            # Ventanas, iconos, taskbar
│   │   ├── lesson/             # Componentes de lección
│   │   ├── code-lab/           # Editor + consola simulada
│   │   ├── quiz/               # Componentes de quiz
│   │   ├── exercises/          # Componentes de ejercicios
│   │   └── ui/                 # Button, Card, Modal, Badge
│   ├── content/
│   │   ├── lessons/            # 46 lecciones en MDX
│   │   ├── quizzes/            # 84 quizzes en JSON
│   │   ├── exercises/          # 42 ejercicios en JSON
│   │   └── modules/            # 9 módulos del curso
│   ├── layouts/                # BaseLayout, AppLayout, ContentLayout, LessonLayout
│   ├── pages/                  # Rutas: index, ruta, temas, quiz, glosario...
│   ├── styles/                 # tokens.css, global.css, desktop.css, code.css...
│   └── features/               # Lógica: ventanas, progreso, quizzes, descargas
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
npm run astro check   # Verificar tipos
```

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
| 01 — Fundamentos | 6 | 9 | 5 | ✅ |
| 02 — Control de flujo | 6 | 8 | 5 | ✅ |
| 03 — Métodos y Arrays | 4 | 7 | 4 | ✅ |
| 04 — POO | 7 | 12 | 6 | ✅ |
| 05 — Colecciones | 4 | 8 | 4 | ✅ |
| 06 — Errores y Debug | 5 | 10 | 5 | ✅ |
| 07 — Archivos y APIs | 4 | 8 | 4 | ✅ |
| 08 — Java Moderno | 6 | 11 | 5 | ✅ |
| 09 — Proyectos | 4 | 8 | 4 | ✅ |

**Total:** 46 lecciones · 84 quizzes · 42 ejercicios · 9 módulos

---

## 📝 Cómo Añadir una Lección

1. Crear el archivo MDX en `src/content/lessons/[slug].mdx`
2. Crear el quiz en `src/content/quizzes/[slug].json`
3. Crear los ejercicios en `src/content/exercises/[slug].json`
4. Registrar en `docs/CONTENT_REGISTRY.md`
5. Ejecutar `npm run build` y verificar sin errores

---

## 📄 Licencia

Proyecto educativo de código abierto. Todos los derechos reservados © **Carlos Bechara**.

---

## 👤 Autor

**Carlos Bechara** — [@CarlosBecharaDev](https://github.com/CarlosBecharaDev)

Desarrollador y educador apasionado por la enseñanza de Java y las tecnologías backend.

# Ligan Java Lab

> Plataforma educativa web para aprender Java 21 LTS desde cero — en español latino.

**Autor:** Carlos Bechara (`CarlosBecharaDev`)
**Stack:** Astro · TypeScript · CSS custom · CodeMirror 6 · Shiki · Zod
**Despliegue:** Vercel (estático)
**Licencia:** Pendiente de decisión de Carlos

---

## ¿Qué es Ligan Java Lab?

Un escritorio interactivo llamado `JAVA_WORKSPACE` donde cada módulo del curso es una carpeta que abre ventanas de lección. El estudiante aprende leyendo, practicando en el Code Lab y verificando su progreso, sin salir de la plataforma.

---

## Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CarlosBecharaDev/ligan-java-lab.git
cd ligan-java-lab

# Instalar dependencias
npm install
```

---

## Comandos Disponibles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Compila el sitio para producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run astro check` | Verifica tipos en componentes `.astro` |
| `npx tsc --noEmit` | Verifica tipos TypeScript |

---

## Estructura del Proyecto

```
ligan-java-lab/
├── docs/                       # Documentación viva del proyecto
│   ├── CHANGELOG.md            # Registro cronológico de cambios
│   ├── DECISIONS.md            # Decisiones de arquitectura (ADR)
│   ├── CONTENT_REGISTRY.md     # Catálogo de lecciones y fuentes
│   └── ROADMAP.md              # Hoja de ruta por fases
├── public/                     # Archivos públicos estáticos
├── src/
│   ├── components/             # Componentes Astro reutilizables
│   │   ├── desktop/            # Sistema de escritorio (ventanas, iconos, taskbar)
│   │   ├── lesson/             # Componentes de lección
│   │   ├── code-lab/           # Editor + consola simulada
│   │   ├── quiz/               # Componentes de quiz
│   │   ├── exercises/          # Componentes de ejercicios
│   │   └── ui/                 # UI genérica (Button, Card, Modal...)
│   ├── content/                # Contenido validado con Zod
│   │   ├── config.ts           # Esquemas de Content Collections
│   │   ├── lessons/            # Lecciones en MDX
│   │   ├── quizzes/            # Quizzes en JSON
│   │   ├── exercises/          # Ejercicios en JSON
│   │   ├── modules/            # Metadatos de módulos
│   │   └── resources/          # Recursos externos verificados
│   ├── features/               # Lógica de negocio pura (TS)
│   │   ├── desktop/            # Gestión de ventanas
│   │   ├── progress/           # Progreso en localStorage
│   │   ├── quiz/               # Motor de quiz
│   │   └── downloads/          # Generación de archivos .java
│   ├── layouts/                # Layouts de página
│   ├── pages/                  # Rutas Astro
│   ├── styles/                 # Sistema de tokens y estilos
│   ├── types/                  # Tipos TypeScript centralizados
│   └── utils/                  # Funciones puras de utilidad
├── JAVA_DOMINADO_CONTEXT.md    # Fuente de verdad del proyecto
├── astro.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## Despliegue en Vercel

El proyecto está configurado para despliegue automático en Vercel.

### Primer despliegue

1. Importar el repositorio en [vercel.com](https://vercel.com) con la cuenta de Carlos.
2. Vercel detecta Astro automáticamente.
3. Configuración de build:
   - **Framework:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Hacer clic en **Deploy**.

### Despliegues posteriores

Cada `git push` a `main` activa un despliegue automático.
Las ramas distintas de `main` generan URLs de previsualización únicas.

---

## Cómo Añadir una Lección

1. Crear el archivo MDX en `src/content/lessons/[slug].mdx` siguiendo la estructura del modelo de contenido (ver `JAVA_DOMINADO_CONTEXT.md`, sección 5).
2. Crear el quiz en `src/content/quizzes/[slug].json`.
3. Crear los ejercicios en `src/content/exercises/[slug].json`.
4. Registrar la lección en `docs/CONTENT_REGISTRY.md`.
5. Añadir entrada en `docs/CHANGELOG.md`.
6. Ejecutar `npm run build` y verificar sin errores.

---

## Atribuciones

- Iconos: [Lucide](https://lucide.dev/) (licencia ISC)
- Fuentes: [Inter](https://fonts.google.com/specimen/Inter) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (licencia OFL)
- Resaltado de sintaxis: [Shiki](https://shiki.matsu.io/)

---

## Autoría y Commits

El único autor y contributor visible del repositorio es **Carlos Bechara**.
Ver `JAVA_DOMINADO_CONTEXT.md` (sección 12) para las reglas de autoría y commits.

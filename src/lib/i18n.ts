/* ========================================================================
   i18n — Sistema de internacionalización (Español / English)
   Fuente única de verdad para todas las cadenas de UI traducibles.
   ======================================================================== */

export type Lang = 'es' | 'en';
export const DEFAULT_LANG: Lang = 'es';
export const SUPPORTED_LANGS: Lang[] = ['es', 'en'];

/** Detecta el idioma almacenado en localStorage o devuelve el default. */
export function getLang(): Lang {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('ligan-lang');
    if (stored === 'en' || stored === 'es') return stored;
  }
  return DEFAULT_LANG;
}

/** Guarda el idioma en localStorage. */
export function setLang(lang: Lang): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ligan-lang', lang);
  }
}

/* ---------- Diccionarios ---------- */
export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // --- Navegación y UI general ---
    'nav.home': 'Inicio',
    'nav.learning-path': 'Ruta de aprendizaje',
    'nav.code-lab': 'Code Lab',
    'nav.progress': 'Progreso',
    'nav.history': 'Historia de Java',
    'nav.resources': 'Recursos',
    'nav.about': 'Sobre el proyecto',
    'nav.glossary': 'Glosario',
    'nav.themes': 'Temas',
    'nav.apps': 'Apps',

    // --- Controles de ventana ---
    'win.minimize': 'Minimizar',
    'win.maximize': 'Maximizar',
    'win.close': 'Cerrar',

    // --- Desktop ---
    'desktop.aria': 'JAVA_WORKSPACE - Escritorio interactivo',
    'desktop.modules': 'Módulos del curso',
    'desktop.open-module': 'Abrir módulo',

    // --- Taskbar ---
    'taskbar.aria': 'Barra de tareas',
    'taskbar.logo-aria': 'Ligan Java Lab - Inicio',
    'taskbar.clock-aria': 'Reloj',

    // --- Página de inicio ---
    'home.title': 'JAVA_WORKSPACE',
    'home.description': 'Escritorio interactivo de aprendizaje Java',
    'home.window-title': 'Bienvenido.java',
    'home.heading': 'Ligan Java Lab',
    'home.subtitle': 'Tu laboratorio interactivo para aprender Java 21 LTS',
    'home.welcome': '¡Bienvenido a <strong>JAVA_WORKSPACE</strong>! Este escritorio interactivo es tu espacio de aprendizaje. Cada carpeta en la cuadrícula representa un módulo del curso.',
    'home.how-to': '📚 Cómo empezar',
    'home.step1': 'Haz clic en <strong>01_Fundamentos</strong> para abrir el primer módulo',
    'home.step2': 'Sigue la <a href="/ruta">ruta de aprendizaje</a> para un progreso guiado',
    'home.step3': 'Practica en el <a href="/practica">Code Lab</a> con ejercicios interactivos',
    'home.step4': 'Revisa tu <a href="/progreso">progreso</a> para ver qué has completado',
    'home.btn-path': 'Abrir ruta de aprendizaje',
    'home.btn-first': 'Primera lección',
    'home.btn-codelab': 'Ir al Code Lab',

    // --- 404 ---
    '404.title': 'Página no encontrada',
    '404.msg1': 'Esta página no existe en el laboratorio.',
    '404.msg2': 'Java lanza una excepción cuando algo no se encuentra. Aquí pasa igual.',
    '404.suggestion': 'Sugerencia: verifica la URL',
    '404.back': 'Volver al escritorio',

    // --- Ruta ---
    'path.title': 'Ruta de aprendizaje',
    'path.description': 'Mapa de módulos con progreso',
    'path.heading': '🗺️ Ruta de aprendizaje',
    'path.intro': 'Sigue esta ruta guiada para dominar Java desde cero. Cada módulo se construye sobre el anterior.',
    'path.available': 'Disponible',
    'path.in-progress': 'En progreso',
    'path.coming-soon': 'Próximamente',
    'path.general-progress': '📊 Tu progreso general',
    'path.keep-learning': 'La práctica hace al maestro. ¡Sigue aprendiendo!',
    'path.completed': 'Completado',

    // --- Práctica ---
    'practice.title': 'Code Lab',
    'practice.description': 'Editor de Java interactivo con simulación de consola',
    'practice.heading': 'Code Lab',
    'practice.intro': 'Practica con ejercicios de todas las lecciones. Escribe código Java, descárgalo y verifica tu comprensión.',
    'practice.exercises-of': 'Ejercicios de',
    'practice.easy': 'Fácil',
    'practice.normal': 'Normal',
    'practice.hard': 'Difícil',
    'practice.exercises': 'ejercicios',
    'practice.empty': 'Próximamente habrá ejercicios disponibles.',

    // --- Progreso ---
    'progress.title': 'Mi progreso',
    'progress.description': 'Estadísticas de aprendizaje desde tu navegador',
    'progress.heading': '📈 Mi progreso',
    'progress.intro': 'Tu progreso se guarda automáticamente en este navegador. Si cambias de dispositivo o limpias los datos, se reiniciará.',
    'progress.lessons-of': 'Lecciones completadas de',
    'progress.quizzes-of': 'Quizzes aprobados de',
    'progress.exercises-of': 'Ejercicios resueltos de',
    'progress.by-module': '📚 Progreso por módulo',
    'progress.total': '📊 Progreso total',
    'progress.streak': '⚡ Racha de estudio',
    'progress.streak-empty': 'Completa tu primera lección para empezar tu racha. ¡La consistencia es la clave del aprendizaje!',
    'progress.streak-going': '¡Sigue así! La consistencia es clave.',
    'progress.days': 'días',

    // --- Historia ---
    'history.title': 'Historia de Java',
    'history.description': 'Línea de tiempo de Java desde Oak (1991) hasta Java 21 LTS',
    'history.heading': '📜 Historia de Java',
    'history.intro': 'La evolución del lenguaje que cambió la programación empresarial.',
    'history.sources': '🔗 Fuentes verificadas',
    'history.oak.title': 'Oak y los orígenes (1991–1995)',
    'history.oak.desc': 'James Gosling, Mike Sheridan y Patrick Naughton de Sun Microsystems crearon "Oak" (nombre inicial de Java) como un lenguaje para dispositivos electrónicos inteligentes. En 1995, se renombró a Java y se lanzó oficialmente enfocado en la web emergente.',
    'history.jvm.title': 'Java 1.0 y la JVM (1996)',
    'history.jvm.desc': 'El lema "Write Once, Run Anywhere" se hizo realidad con la Máquina Virtual de Java. Esto permitió que el mismo código corriera en Windows, Mac y Linux sin cambios.',
    'history.j5.title': 'Java 5 (2004) — Genéricos y anotaciones',
    'history.j5.desc': 'Una de las actualizaciones más significativas. Introdujo genéricos, tipos enumerados, anotaciones y el bucle for-each.',
    'history.j8.title': 'Java 8 (2014) — El punto de inflexión',
    'history.j8.desc': 'Lambdas, Stream API, Optional y la nueva API de fechas. Transformó a Java en un lenguaje funcional-moderno sin perder su esencia orientada a objetos.',
    'history.j11.title': 'Java 11 (2018 LTS) y el nuevo ciclo de releases',
    'history.j11.desc': 'Oracle cambió a releases cada 6 meses con LTS cada 3 años. Java 11 fue el primer LTS después de Java 8. HTTP Client se volvió estándar.',
    'history.j21.title': 'Java 21 LTS (2023) — Estado actual',
    'history.j21.desc': 'Records, Pattern Matching, Sealed Classes, Text Blocks, Virtual Threads (Project Loom). Es la versión más moderna recomendada para nuevos proyectos.',

    // --- Recursos ---
    'resources.title': 'Recursos',
    'resources.description': 'Recursos externos verificados para aprender Java',
    'resources.heading': '🔗 Recursos',
    'resources.intro': 'Herramientas, documentación y sitios verificados para complementar tu aprendizaje.',
    'resources.docs': '📖 Documentación oficial',
    'resources.tools': '🛠️ Herramientas',
    'resources.learning': '📚 Aprendizaje',
    'resources.youtube': '🎥 Canales de YouTube recomendados',
    'resources.java-api-desc': 'Documentación oficial de la API de Java 21 LTS',
    'resources.openjdk-desc': 'Implementación de referencia de Java',
    'resources.jls-desc': 'Especificación completa del lenguaje Java',
    'resources.intellij-desc': 'IDE gratuito recomendado para Java',
    'resources.jdk-desc': 'Descarga del JDK 21 LTS (Temurin)',
    'resources.vscode-desc': 'Editor ligero con soporte para Java (Extension Pack)',
    'resources.tutorials-desc': 'Tutoriales oficiales de Oracle para aprender Java',
    'resources.devjava-desc': 'Portal oficial de Oracle para la comunidad Java',
    'resources.videos-soon': 'Más vídeos próximamente',
    'resources.verifying': 'Se están verificando canales de YouTube en español recomendados',
    'resources.pending': '⚪ Pendiente de verificación',
    'resources.pildoras-desc': 'Curso Java completo desde cero hasta avanzado. Más de 100 vídeos en español de España. Incluye POO, bases de datos y Swing.',
    'resources.watch-playlist': 'Ver playlist en YouTube ↗',
    'resources.holamundo-desc': 'Canal latinoamericano con tutoriales Java modernos. Explicaciones claras y ejemplos prácticos orientados a principiantes.',
    'resources.visit-channel': 'Visitar canal ↗',
    'resources.mouredev-desc': 'Desarrollador senior español con contenido Java/Spring moderno. Proyectos reales, buenas prácticas y código limpio.',
    'resources.codigofacilito-desc': 'Plataforma educativa en español con cursos Java, Spring Boot y testing. Incluye ejercicios prácticos y proyectos.',

    // --- Sobre el proyecto ---
    'about.title': 'Sobre el proyecto',
    'about.description': 'Conoce el propósito y el autor de Ligan Java Lab',
    'about.heading': 'Sobre el proyecto',
    'about.version': 'Ligan Java Lab v0.1.0',
    'about.what': '¿Qué es Ligan Java Lab?',
    'about.what-desc': 'Una plataforma educativa web para aprender Java 21 LTS desde cero, en español latino. Combina lecciones escritas, ejemplos del mundo real, quizzes interactivos y un Code Lab simulado para practicar sin necesidad de instalar nada.',
    'about.motivation': 'Motivación',
    'about.motivation-desc': 'Este proyecto nace de la necesidad de tener un recurso completo, gratuito y en español que lleve al estudiante desde los fundamentos hasta proyectos reales, con una progresión clara y mucha práctica.',
    'about.author': 'Autor',
    'about.author-name': 'Carlos Bechara',
    'about.author-role': '— Desarrollador y educador',
    'about.author-desc': 'Apasionado por la enseñanza de Java y las tecnologías backend. Cree en el aprendizaje práctico con ejemplos reales y una progresión clara.',
    'about.stack': 'Stack técnico',
    'about.license': 'Licencia',
    'about.license-desc': 'Proyecto educativo de código abierto. Todos los derechos reservados ©',
    'about.attributions': 'Atribuciones',

    // --- Glosario ---
    'glossary.title': 'Glosario',
    'glossary.description': 'Glosario completo de términos de Java A-Z',
    'glossary.heading': '📖 Glosario',
    'glossary.intro': 'Más de 60 términos clave de Java explicados de forma sencilla, ordenados alfabéticamente.',

    // --- Lecciones ---
    'lesson.quiz-heading': '🧠 Pon a prueba lo aprendido',
    'lesson.quiz-desc': 'Responde los quizzes para verificar tu comprensión.',
    'lesson.exercises-heading': '💻 Ejercicios prácticos',
    'lesson.exercises-desc': 'Pon en práctica lo aprendido resolviendo estos ejercicios.',
    'lesson.mark-complete': '✅ Marcar lección como completada',
    'lesson.completed': '✓ Completada',
    'lesson.prev': 'Anterior',
    'lesson.next': 'Siguiente',
    'lesson.nav-aria': 'Navegación entre lecciones',

    // --- Quiz ---
    'quiz.title-prefix': 'Quiz:',
    'quiz.description': 'Pon a prueba tus conocimientos',
    'quiz.heading-prefix': '🧠 Quiz:',
    'quiz.intro': 'Responde todas las preguntas para evaluar tu comprensión del tema.',
    'quiz.empty': '📝 Próximamente habrá quizzes para esta lección.',
    'quiz.mark-complete': '✅ Marcar quiz como completado',
    'quiz.completed': '✓ Completado',
    'quiz.back': '← Volver a la lección',

    // --- Code Lab ---
    'codelab.run': 'Ejecutar',
    'codelab.download': 'Descargar',
    'codelab.console': 'Consola de salida',
    'codelab.compiling': '> Compilando Main.java...',
    'codelab.running': '> Ejecutando...',
    'codelab.finished': 'Proceso terminado con código 0 (simulado)',
    'codelab.warning': '⚠️ Modo de práctica — los resultados son de ejemplo. La ejecución real de Java no está disponible en esta versión.',
    'codelab.placeholder': '// Haz clic en "Ejecutar" para ver la salida simulada',

    // --- Ejercicios ---
    'exercise.easy': '🟢 Fácil',
    'exercise.normal': '🟡 Normal',
    'exercise.hard': '🔴 Difícil',
    'exercise.copy': 'Copiar',
    'exercise.copied': '✅ Copiado',
    'exercise.show-hint': '💡 Mostrar pista',
    'exercise.hide-hints': '🙈 Ocultar pistas',
    'exercise.show-hints': '💡 Mostrar pistas',
    'exercise.show-solution': 'Mostrar solución',
    'exercise.hide-solution': 'Ocultar solución',
    'exercise.solution-code': 'Código de solución',
    'exercise.explanation': 'Explicación',
    'exercise.expected-output': 'Salida esperada',

    // --- Quiz Result ---
    'quiz-result.correct-of': 'de',
    'quiz-result.correct': 'correctas',
    'quiz-result.excellent': '🌟 ¡Excelente! Dominas el tema.',
    'quiz-result.good': '👍 Buen trabajo. Revisa los temas donde fallaste.',
    'quiz-result.review': '📚 Vuelve a leer la lección y vuelve a intentarlo.',

    // --- Componentes de lección ---
    'lesson-comp.history': 'Historia del concepto',
    'lesson-comp.introduced': 'Introducido en:',
    'lesson-comp.context': 'Contexto:',
    'lesson-comp.evolution': 'Evolución:',
    'lesson-comp.real-world': 'Ejemplos del mundo real',
    'lesson-comp.result': 'Resultado:',
    'lesson-comp.interactive': 'Visualización interactiva',
    'lesson-comp.stack': 'Stack (Pila)',
    'lesson-comp.heap': 'Heap (Montón)',

    // --- Meta ---
    'meta.site-name': 'Ligan Java Lab',
    'meta.default-desc': 'Aprende Java 21 LTS desde cero — en español latino.',
    'meta.og-desc': 'Plataforma educativa interactiva para aprender Java.',
  },

  en: {
    // --- Navigation & General UI ---
    'nav.home': 'Home',
    'nav.learning-path': 'Learning Path',
    'nav.code-lab': 'Code Lab',
    'nav.progress': 'Progress',
    'nav.history': 'Java History',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.glossary': 'Glossary',
    'nav.themes': 'Themes',
    'nav.apps': 'Apps',

    // --- Window Controls ---
    'win.minimize': 'Minimize',
    'win.maximize': 'Maximize',
    'win.close': 'Close',

    // --- Desktop ---
    'desktop.aria': 'JAVA_WORKSPACE - Interactive Desktop',
    'desktop.modules': 'Course Modules',
    'desktop.open-module': 'Open module',

    // --- Taskbar ---
    'taskbar.aria': 'Taskbar',
    'taskbar.logo-aria': 'Ligan Java Lab - Home',
    'taskbar.clock-aria': 'Clock',

    // --- Home Page ---
    'home.title': 'JAVA_WORKSPACE',
    'home.description': 'Interactive Java learning desktop',
    'home.window-title': 'Welcome.java',
    'home.heading': 'Ligan Java Lab',
    'home.subtitle': 'Your interactive lab to learn Java 21 LTS',
    'home.welcome': 'Welcome to <strong>JAVA_WORKSPACE</strong>! This interactive desktop is your learning space. Each folder in the grid represents a course module.',
    'home.how-to': '📚 Getting Started',
    'home.step1': 'Click on <strong>01_Fundamentals</strong> to open the first module',
    'home.step2': 'Follow the <a href="/ruta">learning path</a> for guided progress',
    'home.step3': 'Practice in the <a href="/practica">Code Lab</a> with interactive exercises',
    'home.step4': 'Check your <a href="/progreso">progress</a> to see what you\'ve completed',
    'home.btn-path': 'Open learning path',
    'home.btn-first': 'First lesson',
    'home.btn-codelab': 'Go to Code Lab',

    // --- 404 ---
    '404.title': 'Page Not Found',
    '404.msg1': 'This page doesn\'t exist in the lab.',
    '404.msg2': 'Java throws an exception when something isn\'t found. Same thing here.',
    '404.suggestion': 'Suggestion: check the URL',
    '404.back': 'Back to desktop',

    // --- Learning Path ---
    'path.title': 'Learning Path',
    'path.description': 'Module map with progress',
    'path.heading': '🗺️ Learning Path',
    'path.intro': 'Follow this guided path to master Java from scratch. Each module builds on the previous one.',
    'path.available': 'Available',
    'path.in-progress': 'In progress',
    'path.coming-soon': 'Coming soon',
    'path.general-progress': '📊 Your overall progress',
    'path.keep-learning': 'Practice makes perfect. Keep learning!',
    'path.completed': 'Completed',

    // --- Practice ---
    'practice.title': 'Code Lab',
    'practice.description': 'Interactive Java editor with console simulation',
    'practice.heading': 'Code Lab',
    'practice.intro': 'Practice with exercises from all lessons. Write Java code, download it and verify your understanding.',
    'practice.exercises-of': 'Exercises from',
    'practice.easy': 'Easy',
    'practice.normal': 'Normal',
    'practice.hard': 'Hard',
    'practice.exercises': 'exercises',
    'practice.empty': 'Exercises coming soon.',

    // --- Progress ---
    'progress.title': 'My Progress',
    'progress.description': 'Learning statistics from your browser',
    'progress.heading': '📈 My Progress',
    'progress.intro': 'Your progress is saved automatically in this browser. If you change devices or clear data, it will reset.',
    'progress.lessons-of': 'Lessons completed of',
    'progress.quizzes-of': 'Quizzes passed of',
    'progress.exercises-of': 'Exercises solved of',
    'progress.by-module': '📚 Progress by module',
    'progress.total': '📊 Total progress',
    'progress.streak': '⚡ Study streak',
    'progress.streak-empty': 'Complete your first lesson to start your streak. Consistency is the key to learning!',
    'progress.streak-going': 'Keep it up! Consistency is key.',
    'progress.days': 'days',

    // --- History ---
    'history.title': 'Java History',
    'history.description': 'Java timeline from Oak (1991) to Java 21 LTS',
    'history.heading': '📜 Java History',
    'history.intro': 'The evolution of the language that changed enterprise programming.',
    'history.sources': '🔗 Verified Sources',
    'history.oak.title': 'Oak and the Origins (1991–1995)',
    'history.oak.desc': 'James Gosling, Mike Sheridan and Patrick Naughton at Sun Microsystems created "Oak" (Java\'s original name) as a language for smart electronic devices. In 1995 it was renamed Java and officially launched focused on the emerging web.',
    'history.jvm.title': 'Java 1.0 and the JVM (1996)',
    'history.jvm.desc': 'The "Write Once, Run Anywhere" motto became reality with the Java Virtual Machine. This allowed the same code to run on Windows, Mac and Linux without changes.',
    'history.j5.title': 'Java 5 (2004) — Generics & Annotations',
    'history.j5.desc': 'One of the most significant updates. It introduced generics, enum types, annotations and the for-each loop.',
    'history.j8.title': 'Java 8 (2014) — The Turning Point',
    'history.j8.desc': 'Lambdas, Stream API, Optional and the new Date API. It transformed Java into a functional-modern language without losing its object-oriented essence.',
    'history.j11.title': 'Java 11 (2018 LTS) & the New Release Cycle',
    'history.j11.desc': 'Oracle switched to 6-month releases with LTS every 3 years. Java 11 was the first LTS after Java 8. HTTP Client became standard.',
    'history.j21.title': 'Java 21 LTS (2023) — Current State',
    'history.j21.desc': 'Records, Pattern Matching, Sealed Classes, Text Blocks, Virtual Threads (Project Loom). The most modern version recommended for new projects.',

    // --- Resources ---
    'resources.title': 'Resources',
    'resources.description': 'Verified external resources for learning Java',
    'resources.heading': '🔗 Resources',
    'resources.intro': 'Tools, documentation and verified sites to complement your learning.',
    'resources.docs': '📖 Official Documentation',
    'resources.tools': '🛠️ Tools',
    'resources.learning': '📚 Learning',
    'resources.youtube': '🎥 Recommended YouTube Channels',
    'resources.java-api-desc': 'Official Java 21 LTS API documentation',
    'resources.openjdk-desc': 'Java reference implementation',
    'resources.jls-desc': 'Complete Java Language Specification',
    'resources.intellij-desc': 'Recommended free IDE for Java',
    'resources.jdk-desc': 'JDK 21 LTS download (Temurin)',
    'resources.vscode-desc': 'Lightweight editor with Java support (Extension Pack)',
    'resources.tutorials-desc': 'Official Oracle tutorials for learning Java',
    'resources.devjava-desc': 'Official Oracle portal for the Java community',
    'resources.videos-soon': 'More videos coming soon',
    'resources.verifying': 'Recommended Spanish YouTube channels are being verified',
    'resources.pending': '⚪ Pending verification',
    'resources.pildoras-desc': 'Complete Java course from zero to advanced. Over 100 videos in Spanish from Spain. Includes OOP, databases and Swing.',
    'resources.watch-playlist': 'Watch playlist on YouTube ↗',
    'resources.holamundo-desc': 'Latin American channel with modern Java tutorials. Clear explanations and practical examples for beginners.',
    'resources.visit-channel': 'Visit channel ↗',
    'resources.mouredev-desc': 'Senior Spanish developer with modern Java/Spring content. Real projects, best practices and clean code.',
    'resources.codigofacilito-desc': 'Spanish educational platform with Java, Spring Boot and testing courses. Includes practical exercises and projects.',

    // --- About ---
    'about.title': 'About the Project',
    'about.description': 'Learn about the purpose and author of Ligan Java Lab',
    'about.heading': 'About the Project',
    'about.version': 'Ligan Java Lab v0.1.0',
    'about.what': 'What is Ligan Java Lab?',
    'about.what-desc': 'An educational web platform to learn Java 21 LTS from scratch, in Latin American Spanish. It combines written lessons, real-world examples, interactive quizzes and a simulated Code Lab to practice without installing anything.',
    'about.motivation': 'Motivation',
    'about.motivation-desc': 'This project was born from the need for a complete, free, Spanish-language resource that takes students from fundamentals to real projects, with clear progression and lots of practice.',
    'about.author': 'Author',
    'about.author-name': 'Carlos Bechara',
    'about.author-role': '— Developer & Educator',
    'about.author-desc': 'Passionate about teaching Java and backend technologies. Believes in practical learning with real examples and clear progression.',
    'about.stack': 'Tech Stack',
    'about.license': 'License',
    'about.license-desc': 'Open source educational project. All rights reserved ©',
    'about.attributions': 'Attributions',

    // --- Glossary ---
    'glossary.title': 'Glossary',
    'glossary.description': 'Complete Java glossary A-Z',
    'glossary.heading': '📖 Glossary',
    'glossary.intro': 'Over 60 key Java terms explained simply, sorted alphabetically.',

    // --- Lessons ---
    'lesson.quiz-heading': '🧠 Test your knowledge',
    'lesson.quiz-desc': 'Answer the quizzes to verify your understanding.',
    'lesson.exercises-heading': '💻 Practical Exercises',
    'lesson.exercises-desc': 'Put what you\'ve learned into practice by solving these exercises.',
    'lesson.mark-complete': '✅ Mark lesson as completed',
    'lesson.completed': '✓ Completed',
    'lesson.prev': 'Previous',
    'lesson.next': 'Next',
    'lesson.nav-aria': 'Navigate between lessons',

    // --- Quiz ---
    'quiz.title-prefix': 'Quiz:',
    'quiz.description': 'Test your knowledge',
    'quiz.heading-prefix': '🧠 Quiz:',
    'quiz.intro': 'Answer all questions to evaluate your understanding of the topic.',
    'quiz.empty': '📝 Quizzes for this lesson coming soon.',
    'quiz.mark-complete': '✅ Mark quiz as completed',
    'quiz.completed': '✓ Completed',
    'quiz.back': '← Back to lesson',

    // --- Code Lab ---
    'codelab.run': 'Run',
    'codelab.download': 'Download',
    'codelab.console': 'Console Output',
    'codelab.compiling': '> Compiling Main.java...',
    'codelab.running': '> Running...',
    'codelab.finished': 'Process finished with exit code 0 (simulated)',
    'codelab.warning': '⚠️ Practice mode — results are examples. Real Java execution is not available in this version.',
    'codelab.placeholder': '// Click "Run" to see simulated output',

    // --- Exercises ---
    'exercise.easy': '🟢 Easy',
    'exercise.normal': '🟡 Normal',
    'exercise.hard': '🔴 Hard',
    'exercise.copy': 'Copy',
    'exercise.copied': '✅ Copied',
    'exercise.show-hint': '💡 Show hint',
    'exercise.hide-hints': '🙈 Hide hints',
    'exercise.show-hints': '💡 Show hints',
    'exercise.show-solution': 'Show solution',
    'exercise.hide-solution': 'Hide solution',
    'exercise.solution-code': 'Solution code',
    'exercise.explanation': 'Explanation',
    'exercise.expected-output': 'Expected output',

    // --- Quiz Result ---
    'quiz-result.correct-of': 'of',
    'quiz-result.correct': 'correct',
    'quiz-result.excellent': '🌟 Excellent! You\'ve mastered this topic.',
    'quiz-result.good': '👍 Good job. Review the topics you missed.',
    'quiz-result.review': '📚 Re-read the lesson and try again.',

    // --- Lesson Components ---
    'lesson-comp.history': 'Concept History',
    'lesson-comp.introduced': 'Introduced in:',
    'lesson-comp.context': 'Context:',
    'lesson-comp.evolution': 'Evolution:',
    'lesson-comp.real-world': 'Real-World Examples',
    'lesson-comp.result': 'Result:',
    'lesson-comp.interactive': 'Interactive Visualization',
    'lesson-comp.stack': 'Stack',
    'lesson-comp.heap': 'Heap',

    // --- Meta ---
    'meta.site-name': 'Ligan Java Lab',
    'meta.default-desc': 'Learn Java 21 LTS from scratch — in Latin American Spanish.',
    'meta.og-desc': 'Interactive educational platform for learning Java.',
  },
};

/** Obtiene una traducción por clave. */
export function t(key: string, lang: Lang = DEFAULT_LANG): string {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? key;
}

/**
 * Script de cliente que se inyecta en BaseLayout.
 * Aplica traducciones a elementos con data-i18n="key".
 * Escucha el evento 'lang-change' para cambiar idioma dinámicamente.
 */
export const I18N_CLIENT_SCRIPT = `
(function() {
  const TRANSLATIONS = ${JSON.stringify(translations)};
  const STORAGE_KEY = 'ligan-lang';
  const DEFAULT_LANG = 'es';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    document.documentElement.setAttribute('data-lang', lang);
    // Update lang toggle buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else if (el.hasAttribute('aria-label')) {
          el.setAttribute('aria-label', dict[key]);
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
    // Update data-i18n-aria separately
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });
  }

  // Init
  const currentLang = getLang();
  document.documentElement.setAttribute('data-lang', currentLang);
  
  // Apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations(currentLang);
      document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === currentLang);
      });
    });
  } else {
    applyTranslations(currentLang);
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === currentLang);
    });
  }

  // Expose globally
  window.__i18n = { setLang, getLang, t: (key) => (TRANSLATIONS[getLang()] || TRANSLATIONS[DEFAULT_LANG])[key] || key };
})();
`;

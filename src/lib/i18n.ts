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
    'nav.modules': 'Módulos',
    'nav.code-lab': 'Code Lab',
    'nav.progress': 'Progreso',
    'nav.history': 'Historia de Java',
    'nav.resources': 'Recursos',
    'nav.about': 'Sobre el proyecto',
    'nav.glossary': 'Glosario',
    'nav.themes': 'Temas',
    'nav.apps': 'Apps',
    'nav.mobile-aria': 'Navegación móvil',
    'nav.lab': 'Lab',

    // --- Temas ---
    'theme.button': 'Tema',
    'theme.nebula': '☀ Nebula Desktop',
    'theme.terminal': '● Midnight Terminal',

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
    'logo.icon-aria': 'Taza de café con símbolos de código',

    // --- Página de inicio (escritorio) ---
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
    'home.days': 'DÍAS',
    'home.keep-learning': 'Sigue aprendiendo.',
    'home.percent-complete': 'completado',
    'home.continue': 'CONTINUAR →',
    'home.challenge': 'Reto del día · Declara una variable · <strong>+50 XP</strong>',
    'home.start': 'Iniciar →',
    'home.card-module': 'Módulo 02 · Fundamentos',
    'home.card-title': 'Variables y tipos',
    'home.card-desc': 'Declaración, inicialización y tipos primitivos en Java.',
    'home.card-duration': '⏱ 15 min',

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
    'path.view-content': 'Ver contenido',

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
    'progress.lessons-completed': 'Lecciones completadas de',
    'progress.quizzes-passed': 'Quizzes aprobados de',
    'progress.exercises-solved': 'Ejercicios resueltos de',
    'progress.module-progress': '📚 Progreso por módulo',
    'progress.total-progress': '📊 Progreso total',
    'progress.study-streak': '⚡ Racha de estudio',
    'progress.start-streak': 'Completa tu primera lección para empezar tu racha. ¡La consistencia es la clave del aprendizaje!',
    'progress.days': 'días',
    'progress.streak-keep-it-up': '¡Sigue así! La consistencia es clave.',
    'progress.lessons-of': 'Lecciones completadas de',
    'progress.quizzes-of': 'Quizzes aprobados de',
    'progress.exercises-of': 'Ejercicios resueltos de',
    'progress.by-module': '📚 Progreso por módulo',
    'progress.total': '📊 Progreso total',
    'progress.streak': '⚡ Racha de estudio',
    'progress.streak-empty': 'Completa tu primera lección para empezar tu racha. ¡La consistencia es la clave del aprendizaje!',
    'progress.streak-going': '¡Sigue así! La consistencia es clave.',

    // --- Historia ---
    'history.title': 'Historia de Java',
    'history.description': 'Línea de tiempo de Java desde Oak (1991) hasta Java 21 LTS',
    'history.desc': 'La evolución del lenguaje que cambió la programación empresarial.',
    'history.heading': '📜 Historia de Java',
    'history.intro': 'La evolución del lenguaje que cambió la programación empresarial.',
    'history.sources': '🔗 Fuentes verificadas',
    'history.oak.title': 'Oak y los orígenes (1991–1995)',
    'history.oak.desc': 'James Gosling, Mike Sheridan y Patrick Naughton de Sun Microsystems crearon "Oak" (nombre inicial de Java) como un lenguaje para dispositivos electrónicos inteligentes. En 1995, se renombró a Java y se lanzó oficialmente enfocado en la web emergente.',
    'history.java1.title': 'Java 1.0 y la JVM (1996)',
    'history.java1.desc': 'El lema "Write Once, Run Anywhere" se hizo realidad con la Máquina Virtual de Java. Esto permitió que el mismo código corriera en Windows, Mac y Linux sin cambios.',
    'history.java5.title': 'Java 5 (2004) — Genéricos y anotaciones',
    'history.java5.desc': 'Una de las actualizaciones más significativas. Introdujo genéricos, tipos enumerados, anotaciones y el bucle for-each.',
    'history.java8.title': 'Java 8 (2014) — El punto de inflexión',
    'history.java8.desc': 'Lambdas, Stream API, Optional y la nueva API de fechas. Transformó a Java en un lenguaje funcional-moderno sin perder su esencia orientada a objetos.',
    'history.java11.title': 'Java 11 (2018 LTS) y el nuevo ciclo de releases',
    'history.java11.desc': 'Oracle cambió a releases cada 6 meses con LTS cada 3 años. Java 11 fue el primer LTS después de Java 8. HTTP Client se volvió estándar.',
    'history.j21.title': 'Java 21 LTS (2023) — Estado actual',
    'history.j21.desc': 'Records, Pattern Matching, Sealed Classes, Text Blocks, Virtual Threads (Project Loom). Es la versión más moderna recomendada para nuevos proyectos.',
    'history.jvm.title': 'Java 1.0 y la JVM (1996)',
    'history.jvm.desc': 'El lema "Write Once, Run Anywhere" se hizo realidad con la Máquina Virtual de Java. Esto permitió que el mismo código corriera en Windows, Mac y Linux sin cambios.',
    'history.j5.title': 'Java 5 (2004) — Genéricos y anotaciones',
    'history.j5.desc': 'Una de las actualizaciones más significativas. Introdujo genéricos, tipos enumerados, anotaciones y el bucle for-each.',
    'history.j8.title': 'Java 8 (2014) — El punto de inflexión',
    'history.j8.desc': 'Lambdas, Stream API, Optional y la nueva API de fechas. Transformó a Java en un lenguaje funcional-moderno sin perder su esencia orientada a objetos.',
    'history.j11.title': 'Java 11 (2018 LTS) y el nuevo ciclo de releases',
    'history.j11.desc': 'Oracle cambió a releases cada 6 meses con LTS cada 3 años. Java 11 fue el primer LTS después de Java 8. HTTP Client se volvió estándar.',

    // --- Recursos ---
    'resources.title': 'Recursos',
    'resources.description': 'Recursos externos verificados para aprender Java',
    'resources.desc': 'Herramientas, documentación y sitios verificados para complementar tu aprendizaje.',
    'resources.heading': '🔗 Recursos',
    'resources.intro': 'Herramientas, documentación y sitios verificados para complementar tu aprendizaje.',
    'resources.docs': '📖 Documentación oficial',
    'resources.tools': '🛠️ Herramientas',
    'resources.learning': '📚 Aprendizaje',
    'resources.youtube': '🎥 Canales de YouTube recomendados',
    'resources.docs-j21': 'Java 21 API Docs',
    'resources.docs-j21-desc': 'Documentación oficial de la API de Java 21 LTS',
    'resources.docs-openjdk': 'OpenJDK',
    'resources.docs-openjdk-desc': 'Implementación de referencia de Java',
    'resources.docs-jls': 'Java Language Spec',
    'resources.docs-jls-desc': 'Especificación completa del lenguaje Java',
    'resources.tools-idea': 'IntelliJ IDEA Community',
    'resources.tools-idea-desc': 'IDE gratuito recomendado para Java',
    'resources.tools-jdk': 'JDK 21 — Adoptium',
    'resources.tools-jdk-desc': 'Descarga del JDK 21 LTS (Temurin)',
    'resources.tools-vscode': 'Visual Studio Code',
    'resources.tools-vscode-desc': 'Editor ligero con soporte para Java (Extension Pack)',
    'resources.learning-oracle': 'Oracle Java Tutorials',
    'resources.learning-oracle-desc': 'Tutoriales oficiales de Oracle para aprender Java',
    'resources.learning-devjava': 'Dev.java',
    'resources.learning-devjava-desc': 'Portal oficial de Oracle para la comunidad Java',
    'resources.learning-more': 'Más vídeos próximamente',
    'resources.learning-more-desc': 'Se están verificando canales de YouTube en español recomendados',
    'resources.pending': '⚪ Pendiente de verificación',
    'resources.pildoras': 'Píldoras Informáticas',
    'resources.pildoras-desc': 'Curso Java completo desde cero hasta avanzado. Más de 100 vídeos en español de España. Incluye POO, bases de datos y Swing.',
    'resources.watch-playlist': 'Ver playlist en YouTube ↗',
    'resources.holamundo': 'HolaMundo — Santiago',
    'resources.holamundo-desc': 'Canal latinoamericano con tutoriales Java modernos. Explicaciones claras y ejemplos prácticos orientados a principiantes.',
    'resources.visit-channel': 'Visitar canal ↗',
    'resources.mouredev': 'MoureDev — Brais Moure',
    'resources.mouredev-desc': 'Desarrollador senior español con contenido Java/Spring moderno. Proyectos reales, buenas prácticas y código limpio.',
    'resources.codigofacilito': 'Código Facilito',
    'resources.codigofacilito-desc': 'Plataforma educativa en español con cursos Java, Spring Boot y testing. Incluye ejercicios prácticos y proyectos.',
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

    // --- Sobre el proyecto ---
    'about.title': 'Sobre el proyecto',
    'about.description': 'Conoce el propósito y el autor de Ligan Java Lab',
    'about.subtitle': 'Ligan Java Lab v0.1.0',
    'about.whatis': '¿Qué es Ligan Java Lab?',
    'about.whatis-desc': 'Una plataforma educativa web para aprender Java 21 LTS desde cero, en español latino. Combina lecciones escritas, ejemplos del mundo real, quizzes interactivos y un Code Lab simulado para practicar sin necesidad de instalar nada.',
    'about.motivation': 'Motivación',
    'about.motivation-desc': 'Este proyecto nace de la necesidad de tener un recurso completo, gratuito y en español que lleve al estudiante desde los fundamentos hasta proyectos reales, con una progresión clara y mucha práctica.',
    'about.author': 'Autor',
    'about.author-name': 'Carlos Bechara',
    'about.author-desc1': '— Desarrollador y educador',
    'about.author-desc2': 'Apasionado por la enseñanza de Java y las tecnologías backend. Cree en el aprendizaje práctico con ejemplos reales y una progresión clara.',
    'about.stack': 'Stack técnico',
    'about.license': 'Licencia',
    'about.license-desc': 'Proyecto educativo de código abierto. Todos los derechos reservados ©',
    'about.attributions': 'Atribuciones',
    'about.version': 'Ligan Java Lab v0.1.0',
    'about.what': '¿Qué es Ligan Java Lab?',
    'about.what-desc': 'Una plataforma educativa web para aprender Java 21 LTS desde cero, en español latino. Combina lecciones escritas, ejemplos del mundo real, quizzes interactivos y un Code Lab simulado para practicar sin necesidad de instalar nada.',
    'about.author-role': '— Desarrollador y educador',
    'about.author-desc': 'Apasionado por la enseñanza de Java y las tecnologías backend. Cree en el aprendizaje práctico con ejemplos reales y una progresión clara.',

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
    'lesson.level': 'Nivel:',
    'lesson.objectives': 'objetivos',

    // --- Quiz ---
    'quiz.title-prefix': 'Quiz:',
    'quiz.description': 'Pon a prueba tus conocimientos',
    'quiz.heading-prefix': '🧠 Quiz:',
    'quiz.intro': 'Responde todas las preguntas para evaluar tu comprensión del tema.',
    'quiz.empty': '📝 Próximamente habrá quizzes para esta lección.',
    'quiz.mark-complete': '✅ Marcar quiz como completado',
    'quiz.completed': '✓ Completado',
    'quiz.back': '← Volver a la lección',
    'quiz.basic': '🟢 Comprensión básica',
    'quiz.advanced': '🔴 Razonamiento avanzado',
    'quiz.questions': 'preguntas',
    'quiz.score': 'Puntaje:',
    'quiz.no-explanation': 'Sin explicación disponible.',

    // --- Code Lab ---
    'codelab.run': 'Ejecutar',
    'codelab.run-aria': 'Ejecutar código',
    'codelab.download': 'Descargar',
    'codelab.download-aria': 'Descargar Main.java',
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
    'exercise.copy-aria': 'Copiar plantilla',
    'exercise.copied': '✅ Copiado',
    'exercise.download': 'Descargar',
    'exercise.download-aria': 'Descargar .java',
    'exercise.show-hint': '💡 Mostrar pista',
    'exercise.hide-hints': '🙈 Ocultar pistas',
    'exercise.show-hints': '💡 Mostrar pistas',
    'exercise.show-solution': 'Mostrar solución',
    'exercise.hide-solution': 'Ocultar solución',
    'exercise.solution-code': 'Código de solución',
    'exercise.explanation': 'Explicación',
    'exercise.expected-output': 'Salida esperada',

    // --- Quiz Result ---
    'quiz-result.of': 'de',
    'quiz-result.correct': 'correctas',
    'quiz-result.excellent': '🌟 ¡Excelente! Dominas el tema.',
    'quiz-result.good': '👍 Buen trabajo. Revisa los temas donde fallaste.',
    'quiz-result.review': '📚 Vuelve a leer la lección y vuelve a intentarlo.',
    'quiz-result.correct-of': 'de',
    'quiz-result.correct-plural': 'correctas',

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
    'lesson-comp.exercise-aria': 'Ejercicio:',
    'video.recommended': 'Video recomendado',
    'video.title': 'Video de lección',
    'comparison.feature': 'Característica',
    'comparison.recommendation': 'Recomendación:',
    'interactive.aria': 'Ejemplo interactivo',
    'interactive.caption': 'Las variables primitivas (edad, activo) guardan su valor directamente en el Stack. Las variables de referencia (nombre) guardan una dirección que apunta al objeto en el Heap.',
    'code.aria': 'Bloque de código',
    'code.copy-aria': 'Copiar código',

    // --- Explorador de lección ---
    'explorer.aria': 'Explorador del curso',
    'explorer.title': 'EXPLORADOR',
    'explorer.open': 'Abrir contenido de la lección',
    'explorer.content': 'Contenido',
    'explorer.completed': 'Completado',

    // --- RetroPlayer (Spotify) ---
    'player.aria': 'Reproductor de Spotify',
    'player.title': 'Reproductor de Spotify',
    'player.lyrics': 'Letra',
    'player.show-lyrics': 'Mostrar letra',
    'player.hide-lyrics': 'Ocultar letra',
'player.minimize': 'Minimizar reproductor',
'player.close': 'Cerrar reproductor',
'player.show': 'Mostrar reproductor',
    'player.connect-msg': 'Conecta tu cuenta de Spotify para reproducir música.',
    'player.connect': 'Conectar con Spotify',
    'player.disconnect-aria': 'Desconectar cuenta de Spotify',
    'player.disconnect': 'Desconectar',
    'player.no-playback': 'Sin reproducción',
    'player.no-playback-active': 'Sin reproducción activa.',
    'player.loading-lyrics': 'Cargando letra...',
    'player.lyrics-not-found': 'No se encontró letra para esta canción.',
    'player.lyrics-unavailable': 'Sin letra disponible.',
    'player.progress': 'Progreso de la canción',
    'player.prev': 'Canción anterior',
    'player.play': 'Reproducir',
    'player.pause': 'Pausar',
    'player.next': 'Siguiente canción',
    'player.volume': 'Volumen',
    'player.mute': 'Silenciar',
    'player.unmute': 'Activar sonido',
    'player.search-label': 'Buscar canciones',
    'player.search-placeholder': 'Buscar canción o artista...',
    'player.search-aria': 'Buscar canciones por artista o título',
    'player.search-results': 'Resultados de búsqueda',
    'player.fab-aria': 'Mostrar reproductor de Spotify',
    'player.device': 'Dispositivo: ',
    'player.no-device': 'No hay ningún dispositivo activo.',
    'player.album-art': 'Portada de ',
    'player.user': 'Usuario',
    'player.free-status': 'Con cuenta Free solo puedes ver lo que suenas, no controlar la reproducción.',
    'player.err.no-device': 'No hay ningún dispositivo activo. Abre Spotify en un dispositivo.',
    'player.err.no-playback': 'No hay ninguna reproducción en curso.',
    'player.err.premium': 'Esta función requiere una cuenta Spotify Premium.',
    'player.err.scope': 'Faltan permisos autorizados para esta acción.',
    'player.err.expired': 'Tu sesión expiró. Conéctate de nuevo.',
    'player.err.network': 'Problema de red al hablar con Spotify.',
    'player.err.generic': 'Spotify respondió con un error.',
    'player.err.unexpected': 'Ocurrió un error inesperado.',
    'player.err.connect': 'No se pudo iniciar la conexión con Spotify.',

    // --- Spotify callback ---
    'callback.connecting': 'Conectando con Spotify...',
    'callback.back': 'Volver',
    'callback.connected': 'Cuenta conectada. Redirigiendo...',
    'callback.error': 'No se pudo completar la conexión con Spotify.',

    // --- Meta ---
    'meta.site-name': 'Ligan Java Lab',
    'meta.default-desc': 'Aprende Java 21 LTS desde cero — en español latino.',
    'meta.og-desc': 'Plataforma educativa interactiva para aprender Java.',

    // --- RetroChars (muñecos animados) ---
    'char.msg1': '¡Sigue así!',
    'char.msg2': 'Tú puedes',
    'char.msg3': 'Java te espera',
    'char.msg4': 'Nunca pares',
    'char.msg5': 'Cada línea cuenta',
    'char.msg6': 'El éxito es constancia',
    'char.msg7': 'Código tras código',
    'char.msg8': 'Eres un crack',
    'char.msg9': 'Masteriza Java',
    'char.msg10': 'Sigue programando',
    'char.msg11': 'Más fuerte que nunca',
    'char.msg12': 'Tú eres el mejor',
    'char.msg13': 'No te rindas',
    'char.msg14': 'A darle con todo',
    'char.msg15': 'Programa tus sueños',
    'char.msg16': 'Java: write once, run anywhere',
    'char.msg17': 'JDK 21 LTS es la versión más reciente',
    'char.msg18': 'Java tiene 9 tipos primitivos',
    'char.msg19': 'int es el entero de 32 bits',
    'char.msg20': 'double es el decimal de 64 bits',
    'char.msg21': 'boolean solo es true o false',
    'char.msg22': 'String es inmutable en Java',
    'char.msg23': 'Java usa compilación JIT',
    'char.msg24': 'JVM: Java Virtual Machine',
    'char.msg25': 'El recolector de basura libera memoria',
    'char.msg26': 'ArrayList<T> es genérico desde Java 5',
    'char.msg27': 'HashMap<K,V> guarda pares clave-valor',
    'char.msg28': 'Java 8 trajo lambdas y streams',
    'char.msg29': 'El método main es la entrada',
    'char.msg30': 'public static void main(String[] args)',
    'char.msg31': 'System.out.println para imprimir',
    'char.msg32': 'Scanner lee la entrada del usuario',
    'char.msg33': 'extends es para herencia',
    'char.msg34': 'implements es para interfaces',
    'char.msg35': 'Polimorfismo: un objeto, muchas formas',
    'char.msg36': 'Encapsulación con private y getters',
    'char.msg37': 'Overloading: mismo nombre, distinto parámetro',
    'char.msg38': 'Enum son constantes con tipo seguro',
    'char.msg39': 'switch acepta String desde Java 7',
    'char.msg40': 'break corta un bucle o switch',
    'char.msg41': 'continue salta a la siguiente iteración',
    'char.msg42': 'Los arrays tienen tamaño fijo en Java',
    'char.msg43': 'for-each itera colecciones fácilmente',
    'char.msg44': 'while se ejecuta mientras la condición sea true',
    'char.msg45': 'do-while ejecuta al menos una vez',
    'char.msg46': 'Los métodos static pertenecen a la clase',
    'char.msg47': 'this referencia al objeto actual',
    'char.msg48': 'super llama al constructor padre',
    'char.msg49': 'final evita herencia o reasignación',
    'char.msg50': '¡Nunca dejes de aprender!',
    'char.msg51': 'Cada bug resuelto te hace mejor',
  },

  en: {
    // --- Navigation & General UI ---
    'nav.home': 'Home',
    'nav.learning-path': 'Learning Path',
    'nav.modules': 'Modules',
    'nav.code-lab': 'Code Lab',
    'nav.progress': 'Progress',
    'nav.history': 'Java History',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.glossary': 'Glossary',
    'nav.themes': 'Themes',
    'nav.apps': 'Apps',
    'nav.mobile-aria': 'Mobile navigation',
    'nav.lab': 'Lab',

    // --- Themes ---
    'theme.button': 'Theme',
    'theme.nebula': '☀ Nebula Desktop',
    'theme.terminal': '● Midnight Terminal',

    // --- Window Controls ---
    'win.minimize': 'Minimize',
    'win.maximize': 'Maximize',
    'win.close': 'Close',

    // --- Desktop ---
    'desktop.aria': 'JAVA_WORKSPACE - Interactive Desktop',
    'desktop.modules': 'Course Modules',
    'desktop.open-module': 'Open module',

    // --- Desktop icons ---
    'icon.00_Introduccion': '00_Introduction',
    'icon.01_Fundamentos': '01_Fundamentals',
    'icon.02_Control_de_flujo': '02_Control_Flow',
    'icon.03_Metodos_y_Arrays': '03_Methods_and_Arrays',
    'icon.04_POO': '04_OOP',
    'icon.05_Colecciones': '05_Collections',
    'icon.06_Errores_y_Debug': '06_Errors_and_Debug',
    'icon.07_Archivos_y_APIs': '07_Files_and_APIs',
    'icon.08_Java_Moderno': '08_Modern_Java',
    'icon.09_Proyectos': '09_Projects',
    'icon.Historia_de_Java': 'History_of_Java',
    'icon.Recursos': 'Resources',
    'icon.Code_Lab': 'Code_Lab',
    'icon.Progreso': 'Progress',

    // --- Taskbar ---
    'taskbar.aria': 'Taskbar',
    'taskbar.logo-aria': 'Ligan Java Lab - Home',
    'taskbar.clock-aria': 'Clock',
    'logo.icon-aria': 'Coffee cup with code symbols',

    // --- Home Page (desktop) ---
    'home.title': 'JAVA_WORKSPACE',
    'home.description': 'Interactive Java learning desktop',
    'home.window-title': 'Welcome.java',
    'home.heading': 'Ligan Java Lab',
    'home.subtitle': 'Your interactive lab to learn Java 21 LTS',
    'home.welcome': 'Welcome to <strong>JAVA_WORKSPACE</strong>! This interactive desktop is your learning space. Each folder in the grid represents a course module.',
    'home.how-to': '📚 Getting Started',
    'home.step1': 'Click on <strong>01_Fundamentals</strong> to open the first module',
    'home.step2': 'Follow the <a href="/en/ruta">learning path</a> for guided progress',
    'home.step3': 'Practice in the <a href="/en/practica">Code Lab</a> with interactive exercises',
    'home.step4': 'Check your <a href="/en/progreso">progress</a> to see what you\'ve completed',
    'home.btn-path': 'Open learning path',
    'home.btn-first': 'First lesson',
    'home.btn-codelab': 'Go to Code Lab',
    'home.days': 'DAYS',
    'home.keep-learning': 'Keep learning.',
    'home.percent-complete': 'complete',
    'home.continue': 'CONTINUE →',
    'home.challenge': 'Daily challenge · Declare a variable · <strong>+50 XP</strong>',
    'home.start': 'Start →',
    'home.card-module': 'Module 02 · Fundamentals',
    'home.card-title': 'Variables and Types',
    'home.card-desc': 'Declaration, initialization and primitive types in Java.',
    'home.card-duration': '⏱ 15 min',

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
    'path.view-content': 'View contents',

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
    'progress.lessons-completed': 'Lessons completed of',
    'progress.quizzes-passed': 'Quizzes passed of',
    'progress.exercises-solved': 'Exercises solved of',
    'progress.module-progress': '📚 Progress by module',
    'progress.total-progress': '📊 Total progress',
    'progress.study-streak': '⚡ Study streak',
    'progress.start-streak': 'Complete your first lesson to start your streak. Consistency is the key to learning!',
    'progress.days': 'days',
    'progress.streak-keep-it-up': 'Keep it up! Consistency is key.',
    'progress.lessons-of': 'Lessons completed of',
    'progress.quizzes-of': 'Quizzes passed of',
    'progress.exercises-of': 'Exercises solved of',
    'progress.by-module': '📚 Progress by module',
    'progress.total': '📊 Total progress',
    'progress.streak': '⚡ Study streak',
    'progress.streak-empty': 'Complete your first lesson to start your streak. Consistency is the key to learning!',
    'progress.streak-going': 'Keep it up! Consistency is key.',

    // --- History ---
    'history.title': 'Java History',
    'history.description': 'Java timeline from Oak (1991) to Java 21 LTS',
    'history.desc': 'The evolution of the language that changed enterprise programming.',
    'history.heading': '📜 Java History',
    'history.intro': 'The evolution of the language that changed enterprise programming.',
    'history.sources': '🔗 Verified Sources',
    'history.oak.title': 'Oak and the Origins (1991–1995)',
    'history.oak.desc': 'James Gosling, Mike Sheridan and Patrick Naughton at Sun Microsystems created "Oak" (Java\'s original name) as a language for smart electronic devices. In 1995 it was renamed Java and officially launched focused on the emerging web.',
    'history.java1.title': 'Java 1.0 and the JVM (1996)',
    'history.java1.desc': 'The "Write Once, Run Anywhere" motto became reality with the Java Virtual Machine. This allowed the same code to run on Windows, Mac and Linux without changes.',
    'history.java5.title': 'Java 5 (2004) — Generics & Annotations',
    'history.java5.desc': 'One of the most significant updates. It introduced generics, enum types, annotations and the for-each loop.',
    'history.java8.title': 'Java 8 (2014) — The Turning Point',
    'history.java8.desc': 'Lambdas, Stream API, Optional and the new Date API. It transformed Java into a functional-modern language without losing its object-oriented essence.',
    'history.java11.title': 'Java 11 (2018 LTS) & the New Release Cycle',
    'history.java11.desc': 'Oracle switched to 6-month releases with LTS every 3 years. Java 11 was the first LTS after Java 8. HTTP Client became standard.',
    'history.j21.title': 'Java 21 LTS (2023) — Current State',
    'history.j21.desc': 'Records, Pattern Matching, Sealed Classes, Text Blocks, Virtual Threads (Project Loom). The most modern version recommended for new projects.',
    'history.jvm.title': 'Java 1.0 and the JVM (1996)',
    'history.jvm.desc': 'The "Write Once, Run Anywhere" motto became reality with the Java Virtual Machine. This allowed the same code to run on Windows, Mac and Linux without changes.',
    'history.j5.title': 'Java 5 (2004) — Generics & Annotations',
    'history.j5.desc': 'One of the most significant updates. It introduced generics, enum types, annotations and the for-each loop.',
    'history.j8.title': 'Java 8 (2014) — The Turning Point',
    'history.j8.desc': 'Lambdas, Stream API, Optional and the new Date API. It transformed Java into a functional-modern language without losing its object-oriented essence.',
    'history.j11.title': 'Java 11 (2018 LTS) & the New Release Cycle',
    'history.j11.desc': 'Oracle switched to 6-month releases with LTS every 3 years. Java 11 was the first LTS after Java 8. HTTP Client became standard.',

    // --- Resources ---
    'resources.title': 'Resources',
    'resources.description': 'Verified external resources for learning Java',
    'resources.desc': 'Tools, documentation and verified sites to complement your learning.',
    'resources.heading': '🔗 Resources',
    'resources.intro': 'Tools, documentation and verified sites to complement your learning.',
    'resources.docs': '📖 Official Documentation',
    'resources.tools': '🛠️ Tools',
    'resources.learning': '📚 Learning',
    'resources.youtube': '🎥 Recommended YouTube Channels',
    'resources.docs-j21': 'Java 21 API Docs',
    'resources.docs-j21-desc': 'Official Java 21 LTS API documentation',
    'resources.docs-openjdk': 'OpenJDK',
    'resources.docs-openjdk-desc': 'Java reference implementation',
    'resources.docs-jls': 'Java Language Spec',
    'resources.docs-jls-desc': 'Complete Java Language Specification',
    'resources.tools-idea': 'IntelliJ IDEA Community',
    'resources.tools-idea-desc': 'Recommended free IDE for Java',
    'resources.tools-jdk': 'JDK 21 — Adoptium',
    'resources.tools-jdk-desc': 'JDK 21 LTS download (Temurin)',
    'resources.tools-vscode': 'Visual Studio Code',
    'resources.tools-vscode-desc': 'Lightweight editor with Java support (Extension Pack)',
    'resources.learning-oracle': 'Oracle Java Tutorials',
    'resources.learning-oracle-desc': 'Official Oracle tutorials for learning Java',
    'resources.learning-devjava': 'Dev.java',
    'resources.learning-devjava-desc': 'Official Oracle portal for the Java community',
    'resources.learning-more': 'More videos coming soon',
    'resources.learning-more-desc': 'Recommended Spanish YouTube channels are being verified',
    'resources.pending': '⚪ Pending verification',
    'resources.pildoras': 'Píldoras Informáticas',
    'resources.pildoras-desc': 'Complete Java course from zero to advanced. Over 100 videos in Spanish from Spain. Includes OOP, databases and Swing.',
    'resources.watch-playlist': 'Watch playlist on YouTube ↗',
    'resources.holamundo': 'HolaMundo — Santiago',
    'resources.holamundo-desc': 'Latin American channel with modern Java tutorials. Clear explanations and practical examples for beginners.',
    'resources.visit-channel': 'Visit channel ↗',
    'resources.mouredev': 'MoureDev — Brais Moure',
    'resources.mouredev-desc': 'Senior Spanish developer with modern Java/Spring content. Real projects, best practices and clean code.',
    'resources.codigofacilito': 'Código Facilito',
    'resources.codigofacilito-desc': 'Spanish educational platform with Java, Spring Boot and testing courses. Includes practical exercises and projects.',
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

    // --- About ---
    'about.title': 'About the Project',
    'about.description': 'Learn about the purpose and author of Ligan Java Lab',
    'about.subtitle': 'Ligan Java Lab v0.1.0',
    'about.whatis': 'What is Ligan Java Lab?',
    'about.whatis-desc': 'An educational web platform to learn Java 21 LTS from scratch, in Latin American Spanish. It combines written lessons, real-world examples, interactive quizzes and a simulated Code Lab to practice without installing anything.',
    'about.motivation': 'Motivation',
    'about.motivation-desc': 'This project was born from the need for a complete, free, Spanish-language resource that takes students from fundamentals to real projects, with clear progression and lots of practice.',
    'about.author': 'Author',
    'about.author-name': 'Carlos Bechara',
    'about.author-desc1': '— Developer & Educator',
    'about.author-desc2': 'Passionate about teaching Java and backend technologies. Believes in practical learning with real examples and clear progression.',
    'about.stack': 'Tech Stack',
    'about.license': 'License',
    'about.license-desc': 'Open source educational project. All rights reserved ©',
    'about.attributions': 'Attributions',
    'about.version': 'Ligan Java Lab v0.1.0',
    'about.what': 'What is Ligan Java Lab?',
    'about.what-desc': 'An educational web platform to learn Java 21 LTS from scratch, in Latin American Spanish. It combines written lessons, real-world examples, interactive quizzes and a simulated Code Lab to practice without installing anything.',
    'about.author-role': '— Developer & Educator',
    'about.author-desc': 'Passionate about teaching Java and backend technologies. Believes in practical learning with real examples and clear progression.',

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
    'lesson.level': 'Level:',
    'lesson.objectives': 'objectives',

    // --- Quiz ---
    'quiz.title-prefix': 'Quiz:',
    'quiz.description': 'Test your knowledge',
    'quiz.heading-prefix': '🧠 Quiz:',
    'quiz.intro': 'Answer all questions to evaluate your understanding of the topic.',
    'quiz.empty': '📝 Quizzes for this lesson coming soon.',
    'quiz.mark-complete': '✅ Mark quiz as completed',
    'quiz.completed': '✓ Completed',
    'quiz.back': '← Back to lesson',
    'quiz.basic': '🟢 Basic comprehension',
    'quiz.advanced': '🔴 Advanced reasoning',
    'quiz.questions': 'questions',
    'quiz.score': 'Score:',
    'quiz.no-explanation': 'No explanation available.',

    // --- Code Lab ---
    'codelab.run': 'Run',
    'codelab.run-aria': 'Run code',
    'codelab.download': 'Download',
    'codelab.download-aria': 'Download Main.java',
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
    'exercise.copy-aria': 'Copy template',
    'exercise.copied': '✅ Copied',
    'exercise.download': 'Download',
    'exercise.download-aria': 'Download .java',
    'exercise.show-hint': '💡 Show hint',
    'exercise.hide-hints': '🙈 Hide hints',
    'exercise.show-hints': '💡 Show hints',
    'exercise.show-solution': 'Show solution',
    'exercise.hide-solution': 'Hide solution',
    'exercise.solution-code': 'Solution code',
    'exercise.explanation': 'Explanation',
    'exercise.expected-output': 'Expected output',

    // --- Quiz Result ---
    'quiz-result.of': 'of',
    'quiz-result.correct': 'correct',
    'quiz-result.excellent': '🌟 Excellent! You\'ve mastered this topic.',
    'quiz-result.good': '👍 Good job. Review the topics you missed.',
    'quiz-result.review': '📚 Re-read the lesson and try again.',
    'quiz-result.correct-of': 'of',
    'quiz-result.correct-plural': 'correct',

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
    'lesson-comp.exercise-aria': 'Exercise:',
    'video.recommended': 'Recommended video',
    'video.title': 'Lesson video',
    'comparison.feature': 'Feature',
    'comparison.recommendation': 'Recommendation:',
    'interactive.aria': 'Interactive example',
    'interactive.caption': 'Primitive variables (age, active) store their value directly on the Stack. Reference variables (name) store an address that points to the object on the Heap.',
    'code.aria': 'Code block',
    'code.copy-aria': 'Copy code',

    // --- Lesson Explorer ---
    'explorer.aria': 'Course explorer',
    'explorer.title': 'EXPLORER',
    'explorer.open': 'Open lesson content',
    'explorer.content': 'Contents',
    'explorer.completed': 'Completed',

    // --- RetroPlayer (Spotify) ---
    'player.aria': 'Spotify Player',
    'player.title': 'Spotify Player',
    'player.lyrics': 'Lyrics',
    'player.show-lyrics': 'Show lyrics',
    'player.hide-lyrics': 'Hide lyrics',
'player.minimize': 'Minimize player',
'player.close': 'Close player',
'player.show': 'Show player',
    'player.connect-msg': 'Connect your Spotify account to play music.',
    'player.connect': 'Connect with Spotify',
    'player.disconnect-aria': 'Disconnect Spotify account',
    'player.disconnect': 'Disconnect',
    'player.no-playback': 'Nothing playing',
    'player.no-playback-active': 'No active playback.',
    'player.loading-lyrics': 'Loading lyrics...',
    'player.lyrics-not-found': 'No lyrics found for this song.',
    'player.lyrics-unavailable': 'No lyrics available.',
    'player.progress': 'Song progress',
    'player.prev': 'Previous track',
    'player.play': 'Play',
    'player.pause': 'Pause',
    'player.next': 'Next track',
    'player.volume': 'Volume',
    'player.mute': 'Mute',
    'player.unmute': 'Unmute',
    'player.search-label': 'Search songs',
    'player.search-placeholder': 'Search song or artist...',
    'player.search-aria': 'Search songs by artist or title',
    'player.search-results': 'Search results',
    'player.fab-aria': 'Show Spotify player',
    'player.device': 'Device: ',
    'player.no-device': 'No active device.',
    'player.album-art': 'Cover of ',
    'player.user': 'User',
    'player.free-status': 'With a Free account you can only see what you play, not control playback.',
    'player.err.no-device': 'No active device. Open Spotify on a device.',
    'player.err.no-playback': 'There is no playback in progress.',
    'player.err.premium': 'This feature requires a Spotify Premium account.',
    'player.err.scope': 'Missing permissions for this action.',
    'player.err.expired': 'Your session expired. Connect again.',
    'player.err.network': 'Network problem talking to Spotify.',
    'player.err.generic': 'Spotify responded with an error.',
    'player.err.unexpected': 'An unexpected error occurred.',
    'player.err.connect': 'Could not start the connection with Spotify.',

    // --- Spotify callback ---
    'callback.connecting': 'Connecting to Spotify...',
    'callback.back': 'Back',
    'callback.connected': 'Account connected. Redirecting...',
    'callback.error': 'Could not complete the connection with Spotify.',

    // --- Meta ---
    'meta.site-name': 'Ligan Java Lab',
    'meta.default-desc': 'Learn Java 21 LTS from scratch — in Latin American Spanish.',
    'meta.og-desc': 'Interactive educational platform for learning Java.',

    // --- RetroChars (animated characters) ---
    'char.msg1': 'Keep going!',
    'char.msg2': 'You can do it',
    'char.msg3': 'Java is waiting for you',
    'char.msg4': 'Never stop',
    'char.msg5': 'Every line counts',
    'char.msg6': 'Success is consistency',
    'char.msg7': 'Code after code',
    'char.msg8': 'You rock',
    'char.msg9': 'Master Java',
    'char.msg10': 'Keep coding',
    'char.msg11': 'Stronger than ever',
    'char.msg12': 'You are the best',
    'char.msg13': 'Do not give up',
    'char.msg14': 'Go all in',
    'char.msg15': 'Code your dreams',
    'char.msg16': 'Java: write once, run anywhere',
    'char.msg17': 'JDK 21 LTS is the latest version',
    'char.msg18': 'Java has 8 primitive types',
    'char.msg19': 'int is the 32-bit integer',
    'char.msg20': 'double is the 64-bit decimal',
    'char.msg21': 'boolean is only true or false',
    'char.msg22': 'String is immutable in Java',
    'char.msg23': 'Java uses JIT compilation',
    'char.msg24': 'JVM: Java Virtual Machine',
    'char.msg25': 'The garbage collector frees memory',
    'char.msg26': 'ArrayList<T> has been generic since Java 5',
    'char.msg27': 'HashMap<K,V> stores key-value pairs',
    'char.msg28': 'Java 8 brought lambdas and streams',
    'char.msg29': 'The main method is the entry point',
    'char.msg30': 'public static void main(String[] args)',
    'char.msg31': 'System.out.println to print',
    'char.msg32': 'Scanner reads user input',
    'char.msg33': 'extends is for inheritance',
    'char.msg34': 'implements is for interfaces',
    'char.msg35': 'Polymorphism: one object, many forms',
    'char.msg36': 'Encapsulation with private and getters',
    'char.msg37': 'Overloading: same name, different parameter',
    'char.msg38': 'Enum are type-safe constants',
    'char.msg39': 'switch accepts String since Java 7',
    'char.msg40': 'break stops a loop or switch',
    'char.msg41': 'continue jumps to the next iteration',
    'char.msg42': 'Arrays have fixed size in Java',
    'char.msg43': 'for-each iterates collections easily',
    'char.msg44': 'while runs while the condition is true',
    'char.msg45': 'do-while runs at least once',
    'char.msg46': 'static methods belong to the class',
    'char.msg47': 'this references the current object',
    'char.msg48': 'super calls the parent constructor',
    'char.msg49': 'final prevents inheritance or reassignment',
    'char.msg50': 'Never stop learning!',
    'char.msg51': 'Every bug you fix makes you better',
  },
};

/** Obtiene una traducción por clave. */
export function t(key: string, lang: Lang = DEFAULT_LANG): string {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? key;
}

/**
 * Script de cliente que se inyecta en BaseLayout/AppLayout.
 * Aplica traducciones a elementos con data-i18n="key".
 * Expone window.__i18n = { setLang, getLang, t } para componentes dinámicos.
 * Dispara el evento 'lang-change' tras cada cambio para que los componentes
 * (reproductor, relojes, título de pestaña, etc.) se re-rendericen.
 */
export const I18N_CLIENT_SCRIPT = `
(function() {
  const TRANSLATIONS = ${JSON.stringify(translations)};
  const DEFAULT_LANG = 'es';

  // Rutas que tienen versión /en/. Las demás no navegan al cambiar idioma.
  const LOCALE_PATHS = ['/tema', '/quiz', '/practica', '/ruta', '/glosario', '/progreso', '/historia', '/recursos', '/sobre-el-proyecto'];

  function forcedLang() {
    const f = document.documentElement.getAttribute('data-i18n-force');
    return f === 'en' || f === 'es' ? f : null;
  }

  function getLang() {
    // El idioma depende solo de la página: data-i18n-force marca /en/ (inglés);
    // las demás siempre español. No se usa localStorage, así el español nunca
    // se "contagia" de una visita anterior a /en/.
    return forcedLang() || DEFAULT_LANG;
  }

  function hasLocaleVersion(path) {
    if (path === '/' || path === '/en' || path === '/en/') return true;
    return LOCALE_PATHS.some(p => path === p || path.startsWith(p + '/'));
  }

  function navigateForLang(lang) {
    const path = window.location.pathname;
    const isEn = path.startsWith('/en');
    let target = null;
    if (lang === 'en' && !isEn) {
      if (hasLocaleVersion(path)) target = '/en' + path;
    } else if (lang === 'es' && isEn) {
      // NOTA: evita regex (\/en se rompe al procesar este template literal)
      target = path.startsWith('/en') ? path.slice(3) : '/';
      if (target === '') target = '/';
    }
    if (target !== null && target !== path) {
      window.location.assign(target);
      return true;
    }
    return false;
  }

  function setLang(lang) {
    if (forcedLang()) {
      // En páginas /en/ el idioma está fijado: el toggle navega entre locales.
      navigateForLang(lang);
      return;
    }
    // Páginas españolas: se navega al espejo /en/ si existe; si no, sin cambios.
    navigateForLang(lang);
  }

  function syncTitleBar(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    // Sincroniza la barra de título de la ventana con el h1 principal.
    // Solo las páginas que marcan su h1 con data-i18n-title activan esto
    // (así el escritorio, cuyo h1 es un mensaje, no afecta al <title>).
    const h1 = document.querySelector('h1[data-i18n-title]');
    if (h1) {
      const txt = h1.textContent ? h1.textContent.trim() : '';
      if (txt) {
        document.title = txt + ' — Ligan Java Lab';
        document.querySelectorAll('.content-window__title').forEach(el => {
          el.textContent = txt;
        });
      }
    }
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
    // Update data-i18n-aria separately
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });
    syncTitleBar(lang);
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
  window.__i18n = {
    setLang,
    getLang,
    t: (key) => (TRANSLATIONS[getLang()] || TRANSLATIONS[DEFAULT_LANG])[key] || key,
  };
})();
`;

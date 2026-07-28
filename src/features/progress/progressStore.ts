// NOTA: localStorage con prefijo ljl_ para evitar colisiones con otras apps en el mismo dominio.
// Cuando se requiera backend, solo cambia la implementación de estas funciones.

const STORAGE_PREFIX = 'ljl_';
export function obtenerProgreso(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}progreso`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function guardarProgreso(lessonSlug: string): void {
  try {
    const progreso = obtenerProgreso();
    progreso[lessonSlug] = true;
    localStorage.setItem(`${STORAGE_PREFIX}progreso`, JSON.stringify(progreso));
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

export function obtenerResultadoQuiz(quizId: string): number | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}quiz_${quizId}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function guardarResultadoQuiz(quizId: string, puntaje: number): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}quiz_${quizId}`, JSON.stringify(puntaje));
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

export function obtenerBorrador(lessonSlug: string): string | null {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}draft_${lessonSlug}`);
  } catch {
    return null;
  }
}

export function guardarBorrador(lessonSlug: string, codigo: string): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}draft_${lessonSlug}`, codigo);
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

export function limpiarProgreso(): void {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(STORAGE_PREFIX))
      .forEach((key) => localStorage.removeItem(key));
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

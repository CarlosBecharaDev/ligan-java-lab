const PREFIX = 'ljl_';

export function obtenerSeguro<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`${PREFIX}${key}`);
    return raw !== null ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function guardarSeguro<T>(key: string, valor: T): boolean {
  try {
    localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}

export function eliminarSeguro(key: string): void {
  try {
    localStorage.removeItem(`${PREFIX}${key}`);
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

export function limpiarTodo(): void {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // No hacer nada si localStorage no está disponible
  }
}

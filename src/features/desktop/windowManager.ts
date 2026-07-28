import type { WindowState } from '@lib/desktop';

const WINDOW_PREFIX = 'ljl_window_';

let nextId = 0;

export function crearVentana(
  title: string,
  icon: string,
  options?: Partial<Omit<WindowState, 'id' | 'title' | 'icon'>>
): WindowState {
  nextId++;
  return {
    id: `${WINDOW_PREFIX}${nextId}`,
    title,
    icon,
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    x: Math.max(0, (window.innerWidth - 720) / 2),
    y: Math.max(0, (window.innerHeight - 520) / 2),
    width: 720,
    height: 520,
    zIndex: nextId,
    ...options,
  };
}

export function cerrarVentana(
  ventanas: WindowState[],
  id: string
): WindowState[] {
  return ventanas.filter((v) => v.id !== id);
}

export function minimizarVentana(
  ventanas: WindowState[],
  id: string
): WindowState[] {
  return ventanas.map((v) =>
    v.id === id ? { ...v, isMinimized: !v.isMinimized } : v
  );
}

export function maximizarVentana(
  ventanas: WindowState[],
  id: string
): WindowState[] {
  return ventanas.map((v) =>
    v.id === id ? { ...v, isMaximized: !v.isMaximized } : v
  );
}

export function traerAlFrente(
  ventanas: WindowState[],
  id: string,
  maxZ: number
): { ventanas: WindowState[]; nuevoMaxZ: number } {
  const nuevoZ = maxZ + 1;
  return {
    ventanas: ventanas.map((v) =>
      v.id === id ? { ...v, zIndex: nuevoZ, isMinimized: false } : v
    ),
    nuevoMaxZ: nuevoZ,
  };
}

export function moverVentana(
  ventanas: WindowState[],
  id: string,
  x: number,
  y: number
): WindowState[] {
  return ventanas.map((v) => (v.id === id ? { ...v, x, y } : v));
}

import type { DesktopState, DesktopIcon } from '@lib/desktop';

export function estadoInicial(): DesktopState {
  return {
    windows: [],
    maxZIndex: 0,
  };
}

export const ICONOS_PRINCIPALES: DesktopIcon[] = [
  { id: 'mod-00', label: '00_Introduccion', icon: 'BookOpen', route: '/tema/introduccion-java' },
  { id: 'mod-01', label: '01_Fundamentos', icon: 'Terminal', route: '/tema/variables-y-tipos' },
  { id: 'mod-02', label: '02_Control_de_flujo', icon: 'GitBranch', route: '/tema/if-else' },
  { id: 'mod-03', label: '03_Metodos_y_Arrays', icon: 'Layers', route: '/tema/metodos' },
  { id: 'mod-04', label: '04_POO', icon: 'Box', route: '/tema/clases-objetos' },
  { id: 'mod-05', label: '05_Colecciones', icon: 'Database', route: '/tema/arraylist' },
  { id: 'mod-06', label: '06_Errores_y_Debug', icon: 'Bug', route: '/tema/excepciones-tipos' },
  { id: 'mod-07', label: '07_Archivos_y_APIs', icon: 'FileText', route: '/tema/file-io' },
  { id: 'mod-08', label: '08_Java_Moderno', icon: 'Zap', route: '/tema/lambdas' },
  { id: 'mod-09', label: '09_Proyectos', icon: 'Code2', route: '/tema/calculadora-cli' },
  { id: 'historia', label: 'Historia_de_Java', icon: 'BookOpen', route: '/historia' },
  { id: 'recursos', label: 'Recursos', icon: 'Link', route: '/recursos' },
  { id: 'codelab', label: 'Code_Lab', icon: 'Code', route: '/practica' },
  { id: 'progreso', label: 'Progreso', icon: 'BarChart3', route: '/progreso' },
];

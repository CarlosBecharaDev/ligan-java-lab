export type ModuleStatus = 'disponible' | 'proximamente' | 'en-progreso';

export type Module = {
  id: string;
  slug: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  status: ModuleStatus;
  lessonCount: number;
  lessons: string[];
};

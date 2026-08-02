export interface ProgressData {
  lessons: string[];
  quizzes: string[];
  exercises: string[];
  streak: number;
  lastDate: string | null;
}

const KEY = 'ligan-java-lab-progress';

export function emptyProgress(): ProgressData {
  return { lessons: [], quizzes: [], exercises: [], streak: 0, lastDate: null };
}

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressData>;
    return { ...emptyProgress(), ...parsed };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(data: ProgressData): void {
  localStorage.setItem(KEY, JSON.stringify(data));
}

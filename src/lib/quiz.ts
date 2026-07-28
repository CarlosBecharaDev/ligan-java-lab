export type QuizLevel = 'basico' | 'avanzado';

export type Quiz = {
  id: string;
  lessonSlug: string;
  level: QuizLevel;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanations: string[];
};

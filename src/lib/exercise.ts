export type Difficulty = 'facil' | 'normal' | 'dificil';

export type Exercise = {
  id: string;
  lessonSlug: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  template: string;
  hints: string[];
  solution: string;
  solutionExplanation: string;
  expectedOutput: string;
};

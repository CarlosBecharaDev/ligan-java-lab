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
  /**
   * true cuando el enunciado pide datos propios del estudiante (su nombre,
   * su edad, valores "a tu elección"...), así que no existe una única
   * salida correcta. Para estos, expectedOutput es solo un ejemplo
   * ilustrativo: el Code Lab no debe comparar la salida real contra él.
   */
  openEnded?: boolean;
};

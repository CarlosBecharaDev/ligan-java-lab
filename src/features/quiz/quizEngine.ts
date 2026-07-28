import type { QuizQuestion } from '@lib/quiz';

export type RespuestaUsuario = Record<string, number>;

export function evaluarQuiz(
  preguntas: QuizQuestion[],
  respuestas: RespuestaUsuario
): { correctas: number; total: number; detalles: DetalleRespuesta[] } {
  const detalles = preguntas.map((p) => {
    const seleccionada = respuestas[p.id];
    const esCorrecta = seleccionada === p.correctIndex;
    return {
      preguntaId: p.id,
      seleccionada,
      correcta: p.correctIndex,
      esCorrecta,
      explicacion: p.explanations[seleccionada] ?? p.explanations[p.correctIndex],
    };
  });

  const correctas = detalles.filter((d) => d.esCorrecta).length;
  return { correctas, total: preguntas.length, detalles };
}

export type DetalleRespuesta = {
  preguntaId: string;
  seleccionada: number | undefined;
  correcta: number;
  esCorrecta: boolean;
  explicacion: string;
};

export function calcularPorcentaje(correctas: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correctas / total) * 100);
}

export function obtenerNivel(puntaje: number): string {
  if (puntaje >= 80) return 'excelente';
  if (puntaje >= 60) return 'bueno';
  return 'necesita-repasar';
}

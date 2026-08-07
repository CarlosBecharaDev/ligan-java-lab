// src/lib/codeRunner.ts
// Cliente para el endpoint /api/execute (compila/ejecuta Java vía Piston).
export interface RunResult {
  ok: boolean;
  stage?: 'compile' | 'run';
  success?: boolean;
  stdout?: string;
  stderr?: string;
  output?: string;
  error?: string;
}

export async function runJavaCode(code: string, stdin?: string): Promise<RunResult> {
  try {
    const res = await fetch('/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, stdin: stdin ?? '' }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data?.error ?? 'Error al ejecutar el código.' };
    }
    return data as RunResult;
  } catch {
    return { ok: false, error: 'No se pudo contactar al servicio de ejecución.' };
  }
}

/** Compara la salida real con la esperada, ignorando espacios finales por línea. */
export function outputMatches(actual: string, expected: string): boolean {
  const normalize = (s: string) =>
    s
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n')
      .trim();
  return normalize(actual) === normalize(expected);
}

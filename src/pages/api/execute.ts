// src/pages/api/execute.ts
// Único endpoint dinámico del sitio (el resto es estático). Recibe código
// Java desde el editor del Code Lab, lo compila/ejecuta a través de la
// instancia pública de Judge0 (https://ce.judge0.com, sin API key) y
// devuelve la salida real. No hay almacenamiento ni ejecución local: todo
// el código corre en el sandbox de Judge0, aislado de este servidor.
//
// Nota: se probó primero con la API pública de Piston (emkc.org), pero
// desde el 15/2/2026 quedó restringida a una lista blanca y ya no acepta
// peticiones anónimas (ver docs/CODE_LAB.md).
import type { APIRoute } from 'astro';

export const prerender = false;

// base64_encoded=true es obligatorio: en modo texto plano, Judge0 falla en
// cuanto el código o la salida traen tildes/ñ u otros caracteres fuera de
// ASCII (muy común en el contenido en español de este curso).
const JUDGE0_URL = 'https://ce.judge0.com/submissions?base64_encoded=true&wait=true';
// Java (JDK 17.0.6) en la instancia pública de Judge0 CE.
const JAVA_LANGUAGE_ID = 91;
const MAX_CODE_LENGTH = 20_000;
const MAX_STDIN_LENGTH = 5_000;
const FETCH_TIMEOUT_MS = 20_000;

interface ExecuteRequestBody {
  code?: unknown;
  stdin?: unknown;
}

interface Judge0Response {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  status: { id: number; description: string };
}

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function toBase64(text: string): string {
  return Buffer.from(text, 'utf-8').toString('base64');
}

function fromBase64(text: string | null): string {
  if (!text) return '';
  return Buffer.from(text, 'base64').toString('utf-8');
}

/**
 * Devuelve una copia de `code` con el mismo largo, pero con el contenido de
 * comentarios y literales de String/char reemplazado por espacios. Sirve
 * para buscar patrones (declaraciones de tipo, `public static void main`,
 * conteo de llaves) sin que un comentario o un String con "class" o "{"
 * dentro produzca falsos positivos. Los índices siguen siendo válidos sobre
 * el `code` original porque el largo no cambia.
 */
function maskLiteralsAndComments(code: string): string {
  let out = '';
  let i = 0;
  const n = code.length;
  while (i < n) {
    const c = code[i];
    const next = code[i + 1];
    if (c === '/' && next === '/') {
      while (i < n && code[i] !== '\n') { out += code[i] === '\t' ? '\t' : ' '; i++; }
    } else if (c === '/' && next === '*') {
      out += '  ';
      i += 2;
      while (i < n && !(code[i] === '*' && code[i + 1] === '/')) {
        out += code[i] === '\n' ? '\n' : ' ';
        i++;
      }
      if (i < n) { out += '  '; i += 2; }
    } else if (c === '"') {
      out += ' ';
      i++;
      while (i < n && code[i] !== '"') {
        if (code[i] === '\\') { out += '  '; i += 2; continue; }
        out += code[i] === '\n' ? '\n' : ' ';
        i++;
      }
      if (i < n) { out += ' '; i++; }
    } else if (c === "'") {
      out += ' ';
      i++;
      while (i < n && code[i] !== "'") {
        if (code[i] === '\\') { out += '  '; i += 2; continue; }
        out += ' ';
        i++;
      }
      if (i < n) { out += ' '; i++; }
    } else {
      out += c;
      i++;
    }
  }
  return out;
}

/**
 * Judge0 exige que el único tipo público del archivo (si lo hay) se llame
 * "Main". Los ejercicios declaran tipos con nombres descriptivos
 * (AreaRectangulo, CuentaBancaria, TicketPrioridad como enum...), a veces
 * varios en el mismo archivo (una clase "ayudante" + la clase con main()),
 * algunos con su propio constructor e instancias `new NombreClase(...)`, y
 * a veces con tipos anidados (un enum declarado DENTRO de la clase con
 * main(), como `class Peaje { enum TipoVehiculo {...} main() {...} }`).
 *
 * En vez de renombrar tipos (arriesgado: rompería constructores y `new`),
 * se ubica cuál declaración de tipo TOP-LEVEL (profundidad de llaves 0;
 * los tipos anidados se ignoran) es la que realmente contiene
 * `public static void main`, se le quita "public" a cualquier OTRO tipo
 * top-level que lo tuviera, y si esa declaración dueña del main no se
 * llama "Main" se agrega una clase Main aparte que delega en su main()
 * real — el resto del código queda intacto.
 */
function prepareSource(code: string): string {
  const masked = maskLiteralsAndComments(code);
  // Entre "public" y la palabra clave del tipo puede haber otros modificadores
  // (`public abstract class Forma`, `public final class X`, `public sealed
  // interface Y`...); se toleran para no perder el "public" de esas
  // declaraciones.
  const typeDeclRe =
    /\b(public\s+)?(?:(?:abstract|final|sealed|non-sealed|static|strictfp)\s+)*(class|interface|enum|record)\s+([A-Za-z_$][A-Za-z0-9_$]*)/g;
  const decls: { index: number; hasPublic: boolean; name: string }[] = [];
  let depth = 0;
  let scanPos = 0;
  let m: RegExpExecArray | null;
  while ((m = typeDeclRe.exec(masked))) {
    for (let i = scanPos; i < m.index; i++) {
      if (masked[i] === '{') depth++;
      else if (masked[i] === '}') depth--;
    }
    scanPos = m.index;
    if (depth === 0) {
      decls.push({ index: m.index, hasPublic: Boolean(m[1]), name: m[3] });
    }
  }
  if (decls.length === 0) return code;

  const mainMatch = /public\s+static\s+void\s+main\s*\(/.exec(masked);
  let owner = decls[0];
  if (mainMatch) {
    for (const d of decls) {
      if (d.index < mainMatch.index) owner = d;
      else break;
    }
  }

  const wrapNeeded = owner.name !== 'Main';
  const toStrip = decls
    .filter((d) => d.hasPublic && (wrapNeeded || d !== owner))
    .sort((a, b) => b.index - a.index);

  let result = code;
  for (const d of toStrip) {
    result = result.slice(0, d.index) + result.slice(d.index).replace(/^public\s+/, '');
  }

  if (!wrapNeeded) return result;

  const wrapper = `\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        ${owner.name}.main(args);\n    }\n}\n`;
  return result + wrapper;
}

export const POST: APIRoute = async ({ request }) => {
  let body: ExecuteRequestBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: 'JSON inválido en el cuerpo de la petición.' }, 400);
  }

  const code = body.code;
  const stdin = body.stdin;

  if (typeof code !== 'string' || !code.trim()) {
    return jsonResponse({ ok: false, error: 'Falta el código a ejecutar.' }, 400);
  }
  if (code.length > MAX_CODE_LENGTH) {
    return jsonResponse({ ok: false, error: `El código supera el máximo de ${MAX_CODE_LENGTH} caracteres.` }, 400);
  }
  if (stdin !== undefined && typeof stdin !== 'string') {
    return jsonResponse({ ok: false, error: 'El stdin debe ser texto.' }, 400);
  }
  if (typeof stdin === 'string' && stdin.length > MAX_STDIN_LENGTH) {
    return jsonResponse({ ok: false, error: `La entrada estándar supera el máximo de ${MAX_STDIN_LENGTH} caracteres.` }, 400);
  }

  const source = prepareSource(code);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  let judgeRes: Response;
  try {
    judgeRes = await fetch(JUDGE0_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        language_id: JAVA_LANGUAGE_ID,
        source_code: toBase64(source),
        stdin: toBase64(stdin ?? ''),
      }),
    });
  } catch (err: any) {
    const timedOut = err?.name === 'AbortError';
    return jsonResponse(
      {
        ok: false,
        error: timedOut
          ? 'El servicio de ejecución tardó demasiado en responder. Intenta de nuevo.'
          : 'No se pudo contactar al servicio de ejecución de código.',
      },
      timedOut ? 504 : 502
    );
  } finally {
    clearTimeout(timeout);
  }

  if (judgeRes.status === 429) {
    return jsonResponse(
      { ok: false, error: 'Demasiadas ejecuciones en poco tiempo. Espera unos segundos e intenta de nuevo.' },
      429
    );
  }

  if (!judgeRes.ok) {
    return jsonResponse({ ok: false, error: 'El servicio de ejecución de código devolvió un error.' }, 502);
  }

  let data: Judge0Response;
  try {
    data = await judgeRes.json();
  } catch {
    return jsonResponse({ ok: false, error: 'Respuesta inválida del servicio de ejecución.' }, 502);
  }

  // 1=In Queue, 2=Processing: no debería pasar con wait=true, pero por si acaso.
  if (data.status.id === 1 || data.status.id === 2) {
    return jsonResponse({ ok: false, error: 'El servicio de ejecución no terminó a tiempo. Intenta de nuevo.' }, 504);
  }

  if (data.status.id === 6) {
    return jsonResponse({
      ok: true,
      stage: 'compile',
      success: false,
      output: fromBase64(data.compile_output) || 'Error de compilación desconocido.',
    });
  }

  const success = data.status.id === 3; // 3 = Accepted (terminó sin errores)
  const stdout = fromBase64(data.stdout);
  let stderr = fromBase64(data.stderr);
  if (!success && !stderr.trim()) {
    stderr = fromBase64(data.message) || data.status.description;
  }

  return jsonResponse({
    ok: true,
    stage: 'run',
    success,
    stdout,
    stderr,
    output: stderr ? `${stdout}\n${stderr}`.trim() : stdout,
  });
};

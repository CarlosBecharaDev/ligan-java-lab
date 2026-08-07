# Code Lab: editor y ejecución real de Java

Cada ejercicio (`ExerciseCard.astro`) tiene un editor de código en vivo
(CodeMirror 6) y un botón **Ejecutar** que compila y corre el código Java
de verdad, mostrando la salida real y comparándola con `expectedOutput`.

## 1. Arquitectura

- El sitio sigue siendo estático (`output: 'static'` en `astro.config.mjs`).
  Se agregó el adaptador `@astrojs/vercel` únicamente para poder tener
  **una** ruta dinámica: `src/pages/api/execute.ts` (marcada con
  `export const prerender = false`). El resto del sitio se sigue
  generando 100% estático en el build, igual que antes.
- El endpoint recibe `{ code, stdin }`, lo manda a un servicio externo que
  compila y ejecuta Java en un sandbox, y devuelve `{ stdout, stderr,
  success, ... }`. Este servidor **nunca** ejecuta código de usuario
  localmente — todo corre aislado en el servicio externo.
- En el cliente, `src/lib/codeEditor.ts` monta el editor y
  `src/lib/codeRunner.ts` llama a `/api/execute` y compara la salida.

## 2. Por qué Judge0 y no Piston

Se probó primero con la API pública de Piston (`emkc.org`), la opción más
simple y sin necesidad de adaptar el código (permite elegir el nombre del
archivo libremente). **Dejó de servir**: desde el 15/2/2026 quedó
restringida a una lista blanca y devuelve:

```json
{"message":"Public Piston API is now whitelist only as of 2/15/2026. ..."}
```

Se cambió a la **instancia pública de Judge0 CE** (`https://ce.judge0.com`),
que a la fecha de esta implementación no requiere API key ni registro. Si
en el futuro esta instancia también deja de estar disponible gratis, hay
que:

1. Revisar si sigue respondiendo `GET https://ce.judge0.com/about`.
2. Si no, evaluar otra instancia pública de Judge0, autohospedar Judge0
   (es open source, corre en Docker), o usar un servicio con API key
   (Judge0 vía RapidAPI, JDoodle) guardando la key como variable de
   entorno **del servidor** en Vercel (nunca en `PUBLIC_*`, a diferencia
   de Spotify — aquí sí hay secreto porque el endpoint corre en el
   servidor, no en el navegador del visitante).

## 3. Detalles no obvios de la integración con Judge0

- **UTF-8 obligatorio en base64**: en modo texto plano
  (`base64_encoded=false`), Judge0 falla en cuanto el código o la entrada
  estándar traen tildes/ñ/emoji — muy común en el contenido en español de
  este curso. Por eso `execute.ts` siempre manda `source_code` y `stdin`
  en base64 (`base64_encoded=true`) y decodifica `stdout`/`stderr`/
  `compile_output` de la respuesta.
- **El archivo siempre se llama `Main.java`**: a diferencia de Piston,
  Judge0 no permite elegir el nombre del archivo. Si el único tipo
  público del código no se llama `Main`, `javac` falla con *"class X is
  public, should be declared in a file named X.java"*.
- **Los ejercicios usan nombres descriptivos** (`AreaRectangulo`,
  `CuentaBancaria`, `TicketPrioridad` como enum...), algunos con su propio
  constructor e instancias `new NombreClase(...)`, y algunos ejercicios
  "difíciles" declaran más de un tipo top-level (una clase auxiliar +
  la clase con `main`). Renombrar el tipo a `Main` a lo bruto rompería
  constructores y `new NombreClase(...)`.

  La función `prepareSource()` en `execute.ts` en su lugar:
  1. Enmascara comentarios y literales de String/char (mismo largo, para
     no invalidar índices) antes de analizar nada — si no, un comentario
     o un String que contenga la palabra `class` o una llave `{`/`}`
     ensucia el análisis.
  2. Encuentra todas las declaraciones de tipo **top-level** (profundidad
     de llaves 0 sobre el texto enmascarado — así un `enum` anidado
     *dentro* de la clase con `main()`, como
     `class Peaje { enum TipoVehiculo {...} main() {...} }`, no se
     confunde con un tipo top-level) y cuál de ellas contiene el
     `public static void main` real (la "dueña"). El regex de la
     declaración tolera otros modificadores entre `public` y la palabra
     clave del tipo (`public abstract class`, `public sealed interface`,
     etc.).
  3. Le quita `public` a cualquier **otro** tipo top-level que lo tuviera
     (Judge0 solo tolera un tipo público por archivo).
  4. Si la dueña del `main` no se llama `Main`, agrega una clase
     `public class Main` aparte que delega: `NombreDueña.main(args);`.
     El resto del código queda intacto (constructores, `new`, etc.).

## 4. Límites conocidos (no son bugs)

- **Ejercicios con `Scanner`**: el editor tiene un campo opcional
  "Entrada estándar (Scanner)" para escribir manualmente cada línea que el
  programa vaya a leer. Si el ejercicio requiere `Scanner` y se ejecuta
  sin llenar ese campo, el programa termina con
  `NoSuchElementException` — es el comportamiento normal de un programa
  Java real sin `stdin`, no un fallo del Code Lab.
- **Comparación exacta contra `expectedOutput`**: el veredicto ✅/⚠️ compara
  texto exacto (ignorando espacios finales de línea). Para ejercicios que
  dependen de texto que el propio usuario escribió por `Scanner`, el
  veredicto puede no coincidir aunque el programa esté bien — es inherente
  a comparar contra una salida fija, no un bug del comparador.
- **Instancia pública compartida**: `ce.judge0.com` es un servicio
  gratuito compartido; puede haber rate limiting o lentitud en horas pico.
  El endpoint da un mensaje claro ("demasiadas ejecuciones...") en vez de
  fallar en silencio.
- **`ChronoUnit.DAYS.between(hoy, ...)`, `LocalDate.now()`, edad calculada
  desde "hoy", etc.**: el `expectedOutput` de estos ejercicios se calculó
  para una fecha puntual; como "hoy" cambia todos los días, la salida real
  se corre del `expectedOutput` con el tiempo. No es un bug — no tiene
  sentido "corregir" el valor esperado porque volvería a quedar
  desactualizado.
- **Orden de `HashMap`/`HashSet`**: varios ejercicios de colecciones
  (`hashmap`, `set-map-avanzados`) iteran un `HashMap`/`HashSet` y
  muestran el resultado — ese orden no está garantizado por el lenguaje
  y depende de la implementación/versión de la JVM (Judge0 usa JDK
  17.0.6). El `expectedOutput` de esos ejercicios puede no coincidir
  exactamente aunque el código esté perfecto.
- **Ejercicios de `file-io`**: leen archivos (`datos.txt`, `texto.txt`...)
  que no existen en el sandbox de Judge0 — no hay forma de "subir" un
  archivo de prueba con la integración actual. El `Ejecutar` siempre va a
  fallar con "No such file or directory" para estos; el
  `expectedOutput` de `ex-file-io-facil` incluso es un placeholder
  descriptivo (`[Contenido del archivo datos.txt línea por línea]`), no
  un valor real a comparar.
- **`os.name`/`java.version`/usuario del sistema**: el ejercicio
  `ex-introduccion-dificil` imprime propiedades del sistema
  (`System.getProperty(...)`) — su `expectedOutput` refleja la máquina de
  quien escribió el ejercicio (Windows), pero el sandbox de Judge0 corre
  Linux con JDK 17. No hay un valor "correcto" universal aquí.
- **Pattern matching en `switch` (Java 21)**: `42-pattern-matching`
  (`normal` y `dificil`) usan `switch` con patterns de tipo
  (`case String s -> ...`), finalizado en **Java 21** (JEP 441). Judge0 CE
  público solo ofrece JDK 17.0.6, donde este feature ni siquiera está
  disponible como preview compilable sin flags — el código es Java 21
  correcto, pero el Ejecutar de este Code Lab no lo puede correr contra
  esa versión de JDK. Si en algún momento Judge0 agrega un runtime Java 21,
  este límite desaparece solo.

## 5. Auditoría de contenido

Construir esta función permitió, por primera vez, compilar y correr de
verdad las ~276 soluciones de ejercicios (ES + EN) contra un compilador
real. Se encontraron y corrigieron alrededor de 30 bugs de contenido
reales, entre ellos:

- `expectedOutput` con el orden de líneas equivocado (ej. un mensaje de
  validación de constructor que en verdad imprime antes que las líneas
  de `mostrar()`, no después).
- Dos ejercicios con más de una clase pública en el mismo archivo (Java
  no lo permite) — `18-constructores` (dificil) y, indirectamente, el
  soporte de `enum`/tipos anidados que forzó mejorar `prepareSource()`.
- Un `expectedOutput` con `\n` literal (doble escape) en vez de saltos de
  línea reales (`05-casting` dificil).
- Bugs reales de lógica: `Extensión válida` comparaba la URL completa en
  vez del dominio extraído (`03-strings` dificil); una matriz de ejemplo
  sin ningún par que sumara el objetivo declarado en su propio comentario
  (`11-break-continue-return` dificil); "Dr. Dr. Perez" por concatenar el
  título dos veces (`23-agregacion-composicion` dificil); `ChronoUnit.DIAS`
  (no existe: es `ChronoUnit.DAYS`, siempre en inglés) (`37-date-time-api`
  normal); una interfaz sellada sin la palabra clave `sealed`
  (`42-pattern-matching` dificil); `close()` declarado `throws Exception`
  sin que el `try`/`catch` lo esperara (`30-try-catch-finally` dificil).
- Valores mal calculados a mano: conteo de palabras, cantidad de
  iteraciones de un algoritmo numérico, redondeo de un `%.1f`.

Ver el historial de commits para el detalle exacto de qué se corrigió. Si
se agregan ejercicios nuevos, vale la pena correrlos contra `/api/execute`
antes de publicarlos — así se habrían detectado todos estos antes.

export function generarNombreJava(className: string): string {
  const limpio = className.replace(/[^a-zA-Z0-9_]/g, '');
  return limpio.endsWith('.java') ? limpio : `${limpio}.java`;
}

export function descargarComoJava(contenido: string, nombreClase: string): void {
  const blob = new Blob([contenido], { type: 'text/x-java-source' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = generarNombreJava(nombreClase);
  a.click();
  URL.revokeObjectURL(url);
}

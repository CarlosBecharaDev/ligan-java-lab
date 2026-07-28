export function descargarComoJava(
  codigo: string,
  nombreClase: string
): void {
  const nombre = nombreClase.endsWith('.java') ? nombreClase : `${nombreClase}.java`;
  descargarArchivo(codigo, nombre, 'text/x-java-source');
}

export function descargarArchivo(
  contenido: string,
  nombreArchivo: string,
  tipoMime?: string
): void {
  const blob = new Blob([contenido], {
    type: tipoMime ?? 'text/plain',
  });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombreArchivo;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(url);
}

export function copiarAlPortapapeles(texto: string): Promise<boolean> {
  if (!navigator.clipboard) {
    return Promise.resolve(false);
  }
  return navigator.clipboard
    .writeText(texto)
    .then(() => true)
    .catch(() => false);
}

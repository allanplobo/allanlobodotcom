/**
 * Calcula o tempo estimado de leitura de um texto.
 * Usa a média de 200 palavras por minuto (padrão para leitura técnica).
 */
export function getReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de leitura`;
}

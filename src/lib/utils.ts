import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind CSS de forma segura: une múltiples valores
 * (strings, condicionales, arreglos) con `clsx` y resuelve conflictos de
 * clases repetidas o contradictorias con `twMerge`.
 *
 * @param inputs - Clases o expresiones condicionales de clases a combinar.
 * @returns Cadena final de clases sin duplicados ni conflictos.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

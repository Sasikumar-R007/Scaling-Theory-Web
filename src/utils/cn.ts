type ClassValue = string | number | boolean | undefined | null | ClassValue[]

/**
 * Merges class names, filtering out falsy values.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 1)
    .filter((value): value is string | number => Boolean(value))
    .join(' ')
}

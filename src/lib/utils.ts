/**
 * Small className helper. Keeps conditional Tailwind classes readable without
 * adding a dependency solely for string joining.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

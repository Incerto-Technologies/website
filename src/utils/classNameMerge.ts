import { twMerge } from "tailwind-merge";

/**
 * Merge multiple class names into one.
 * @param classNames Class names to merge.
 * @returns Merged class name.
 */

export const classNameMerge = (...classNames: string[]): string => {
  return twMerge(...classNames);
};

// utils/clsx.ts

import { twMerge } from "tailwind-merge";
import classNames from "classnames";

/**
 * Utility function to merge Tailwind classes and handle conditional class names.
 * @param inputs - Array of classes, conditions, or external classes passed from parent components.
 */
export function clsx(...inputs: (string | boolean | undefined)[]) {
  return twMerge(classNames(...inputs));
}

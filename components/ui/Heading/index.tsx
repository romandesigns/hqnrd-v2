import { HeadingProps } from "@/types";
import { clsx } from "@/utils/clsx";
/**
 *
 *@title Heading UI Component
 *@description Heading component
 * @export
 * @param {HeadingProps} { title, subtitle, classNames }
 * @return {*}
 */
export function Heading({ title, subtitle, classNames }: HeadingProps) {
  return (
    <h2
      className={clsx(`flex flex-col items-center justify-center`, classNames)}
    >
      {title && (
        <span className="rounded-full bg-highlight p-4 py-2 text-xs font-semibold text-highlight-foreground">
          {title}
        </span>
      )}
      {subtitle && (
        <span className="xs:text-xs mt-4 text-center text-sm font-medium max-sm:text-[0.8rem] max-sm:font-normal">
          {subtitle}
        </span>
      )}
    </h2>
  );
}

import { WrapperProps } from "@/types";
import { clsx } from "@/utils/clsx";
/**
 * @title Wrapper component
 * @description Wrapper component
 * @export
 * @param {WrapperProps} { children, className }
 * @return {*}  {JSX.Element}
 */
export function Wrapper({ children, className }: WrapperProps): JSX.Element {
  return (
    <div
      className={clsx(`mx-auto w-full max-w-[--max_width] lg:px-4`, className)}
    >
      {children}
    </div>
  );
}

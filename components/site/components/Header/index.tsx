import { WrapperProps } from "@/types";
import { clsx } from "@/utils/clsx";
/**
 * @title Header component
 * @description Header component
 * @export
 * @param {HeaderProps} { children, className }
 * @return {*}  {JSX.Element}
 */
export function Header({ children, className }: WrapperProps): JSX.Element {
  return (
    <header
      className={clsx(
        `grid grid-cols-1 grid-rows-[auto_auto] items-center rounded-md px-2 py-20 lg:grid-cols-2 lg:grid-rows-1`,
        className,
      )}
    >
      {children}
    </header>
  );
}

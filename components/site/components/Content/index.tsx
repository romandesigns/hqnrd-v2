import { ContentPropTypes } from "@/types";
import { clsx } from "@/utils/clsx";
/**
 *
 * @title Section
 * @description Reusable section component
 * @export
 * @param {ContentPropTypes} {
 *   children,
 *   contentClassName,
 * }
 * @return {*}  {JSX.Element}
 */
export function Content({
  children,
  contentClassName,
}: ContentPropTypes): JSX.Element {
  return (
    <article className={clsx(`py-10 max-md:py-8`, contentClassName)}>
      {children}
    </article>
  );
}

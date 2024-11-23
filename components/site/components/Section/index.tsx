import { SectionPropTypes } from "@/types";
import { clsx } from "@/utils/clsx";
import { Wrapper } from "../Wrapper";
/**
 *
 * @title Section
 * @description Reusable section component
 * @export
 * @param {SectionPropTypes} {
 *   children,
 *   sectionClassName,
 *   wrapperClassName,
 * }
 * @return {*}  {JSX.Element}
 */
export function Section({
  children,
  sectionClassName,
  wrapperClassName,
}: SectionPropTypes): JSX.Element {
  return (
    <section className={clsx(`py-16`, sectionClassName)}>
      <Wrapper
        className={clsx(
          `p-2 py-10 max-md:py-8 lg:p-8 lg:py-14`,
          wrapperClassName,
        )}
      >
        {children}
      </Wrapper>
    </section>
  );
}

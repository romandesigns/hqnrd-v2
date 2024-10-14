import { SectionPropTpes } from "@/types";
import { clsx } from "@/utils/clsx";
import { Wrapper } from "../Wrapper";
/**
 *
 * @title Section
 * @description Reusable section component
 * @export
 * @param {SectionPropTpes} {
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
}: SectionPropTpes): JSX.Element {
  return (
    <section className={clsx(sectionClassName)}>
      <Wrapper className={clsx(`p-2 py-10 lg:p-8 lg:py-20`, wrapperClassName)}>
        {children}
      </Wrapper>
    </section>
  );
}

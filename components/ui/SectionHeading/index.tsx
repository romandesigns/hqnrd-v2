import { SectionHeadingProps } from "@/types";
import { clsx } from "@/utils/clsx";
import { Divider, Heading } from "..";

export function SectionHeading({
  title,
  subtitle,
  headingContainerClassName,
  headingClassName,
  headingDividerClassName,
}: SectionHeadingProps) {
  return (
    <div className={clsx(`mx-auto max-w-3xl`, headingContainerClassName)}>
      <Divider orientation="horizontal" classNames={headingDividerClassName}>
        <Heading
          title={title}
          subtitle={subtitle}
          classNames={headingClassName}
        />
      </Divider>
    </div>
  );
}

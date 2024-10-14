import { clsx } from "@/utils/clsx";
import { Divider, Heading } from "..";

export function SectionHeading({
  title,
  subtitle,
  headingContainerClassName,
  headingClassName,
  headingDividerClassName,
}: {
  title: string;
  subtitle: string;
  headingContainerClassName?: string;
  headingClassName?: string;
  headingDividerClassName?: string;
}) {
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

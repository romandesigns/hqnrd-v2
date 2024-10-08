import { clsx } from "@/utils/clsx";
import React from "react";

export function Heading({
  title,
  subTitle,
  classNames,
}: {
  title: string;
  subTitle: string;
  classNames?: string;
}) {
  return (
    <h2
      className={clsx(
        `mt-0 flex flex-col items-center justify-center lg:py-10`,
        classNames,
      )}
    >
      {title && (
        <span className="rounded-full bg-primary p-4 py-2 text-xs font-medium text-primary-foreground">
          {title}
        </span>
      )}
      {subTitle && <span className="mt-4 text-sm font-medium">{subTitle}</span>}
    </h2>
  );
}

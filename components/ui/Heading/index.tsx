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
      className={clsx(`flex flex-col items-center justify-center`, classNames)}
    >
      {title && (
        <span className="rounded-full bg-primary p-4 py-2 text-xs font-medium text-primary-foreground">
          {title}
        </span>
      )}
      {subTitle && (
        <span className="xs:text-xs mt-4 text-center text-sm font-medium">
          {subTitle}
        </span>
      )}
    </h2>
  );
}

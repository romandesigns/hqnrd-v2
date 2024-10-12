import { clsx } from "@/utils/clsx";
import React from "react";

export function CardHeader({
  p = 2,
  y = 1,
  width = "auto",
  highlight = "# 101",
  title = "Room Category",
}: {
  p?: number;
  y?: number;
  padding?: number;
  width?: string;
  highlight?: string;
  title?: string;
}) {
  return (
    <div className="relative flex after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-primary">
      <div className="w-[10%] rounded-tl-md bg-primary" />
      <div
        className={clsx(
          `w-${width} relative -top-4 rounded-bl-md rounded-br-md bg-transparent p-${p / 2} shadow-[0px_18px_0px_1.5px_]`,
        )}
      >
        <div
          className={clsx(
            `block h-auto rounded-md bg-primary py-${p - 1} px-${p * 2}`,
          )}
        >
          {highlight && (
            <p className="block text-xs font-medium text-muted-foreground">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="text-sm font-semibold uppercase text-primary-foreground">
              {title}
            </h2>
          )}
        </div>
      </div>
      <div className="flex-1 rounded-tr-md bg-primary" />
    </div>
  );
}

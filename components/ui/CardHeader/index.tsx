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
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-1/4 w-full p-2">
        <div className="relative flex after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-primary">
          <div className="w-[10%] rounded-tl-md bg-primary" />
          <div
            className={clsx(
              `w-${width} rounded-bl-md rounded-br-md bg-transparent p-${p / 2} shadow-[.8px_2.5px_0px_1.5px_]`,
            )}
          >
            <span
              className={clsx(`relative -inset-y-${y} rounded-md p-${p - 1}`)}
            >
              <div
                className={`inline-block rounded-md bg-primary p-${p} px-${p + 2}`}
              >
                {highlight && (
                  <p className="block text-xs font-medium text-muted-foreground">
                    {highlight}
                  </p>
                )}
                {title && (
                  <h2 className="text-sm font-bold uppercase text-primary-foreground">
                    {title}
                  </h2>
                )}
              </div>
            </span>
          </div>
          <div className="flex-1 rounded-tr-md bg-primary" />
        </div>
      </div>
    </div>
  );
}

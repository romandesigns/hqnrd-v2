import React from "react";
import { twMerge } from "tailwind-merge";

export function CardHeader({
  padding = 4,
  width = "auto",
  component,
}: {
  padding?: number;
  width: string;
  component: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-1/4 w-full p-2">
        <div className="relative flex after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-neutral-500">
          <div className="w-[10%] rounded-tl-md bg-neutral-500" />
          <div
            className={twMerge(
              `w-${width} rounded-bl-md rounded-br-md bg-transparent p-${padding / 2} shadow-[.8px_2.5px_0px_1.5px_#737373]`,
            )}
          >
            <span
              className={`relative -inset-y-${padding} rounded-md bg-neutral-500 p-2 py-${padding}`}
            >
              {component}
            </span>
          </div>
          <div className="flex-1 rounded-tr-md bg-neutral-500" />
        </div>
      </div>
    </div>
  );
}

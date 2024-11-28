import { clsx } from "@/utils/clsx";
import React from "react";
import { ShareBtn } from "..";
import { SiteMetaData } from "@/types";

export function CardHeader({
  p = 2,
  width = "auto",
  highlight = "# 101",
  title = "Room Category",
  siteMetaData: { metadata },
}: {
  p?: number;
  padding?: number;
  width?: string;
  highlight?: string;
  title?: string;
  siteMetaData: SiteMetaData;
}) {
  return (
    <div className="relative flex after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-card">
      <div className="w-[10%] rounded-tl-md bg-card" />
      <div
        className={clsx(
          `w-${width} relative -top-4 rounded-bl-md rounded-br-md bg-transparent p-${p / 2} shadow-[0px_18px_0px_1.5px_hsl(var(--card))]`,
        )}
      >
        <div
          className={clsx(
            `floating-shadow block h-auto rounded-md bg-[hsl(var(--accent-secondary))] text-white py-${p - 1} px-${p * 2}`,
          )}
        >
          {highlight && (
            <p className="text-muted-foreground block text-[0.65rem] font-normal">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="text-background-foreground text-sm font-bold uppercase">
              {title}
            </h2>
          )}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end rounded-tr-md bg-card">
        <ShareBtn metadata={metadata} />
      </div>
    </div>
  );
}

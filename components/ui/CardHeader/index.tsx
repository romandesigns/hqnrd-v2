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
    <div className="relative flex after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-muted/30">
      <div className="w-[10%] rounded-tl-md bg-muted/30" />
      <div
        className={clsx(
          `w-${width} relative -top-4 rounded-bl-md rounded-br-md bg-transparent p-${p / 2} shadow-[0px_18px_0px_1.5px_#151717]`,
        )}
      >
        <div
          className={clsx(
            `block h-auto rounded-md bg-muted/30 py-${p - 1} px-${p * 2}`,
          )}
        >
          {highlight && (
            <p className="text-muted-foreground block text-xs font-medium">
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
      <div className="flex flex-1 items-center justify-end rounded-tr-md bg-muted/30">
        <ShareBtn metadata={metadata} />
      </div>
    </div>
  );
}

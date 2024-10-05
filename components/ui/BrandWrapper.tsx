import React from "react";
import { Brand } from ".";
import { twMerge } from "tailwind-merge";

export function BrandWrapper({
  children,
  HTMLTag,
  className,
}: {
  children: React.ReactNode;
  HTMLTag?: "div" | "nav";
  className?: string;
  wrapperClassName?: string;
}) {
  return HTMLTag === "div" ? (
    <div className={twMerge(`${className} w-full`)}>
      <Brand />
      {children}
    </div>
  ) : (
    HTMLTag === "nav" && (
      <nav className={twMerge(`${className} w-full`)}>
        <Brand />
        {children}
      </nav>
    )
  );
}

import React from "react";
import { twMerge } from "tailwind-merge";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge(`${className} mx-auto w-full max-w-[--max_width]`)}>
      {children}
    </div>
  );
}

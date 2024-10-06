import { clsx } from "@/utils/clsx";
import React from "react";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(`mx-auto w-full max-w-[--max_width]`, className)}>
      {children}
    </div>
  );
}

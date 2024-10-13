import { WrapperProps } from "@/types";
import { clsx } from "@/utils/clsx";
import React from "react";

export function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={clsx(`mx-auto w-full max-w-[--max_width] lg:px-4`, className)}
    >
      {children}
    </div>
  );
}

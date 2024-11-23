import { clsx } from "@/utils/clsx";
import React from "react";

interface DividerWithContentProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  classNames?: string;
}

export const Divider: React.FC<DividerWithContentProps> = ({
  children,
  orientation = "horizontal",
  classNames,
}) => {
  if (orientation === "vertical") {
    return (
      <div className={clsx(`flex items-center`, classNames)}>
        <div className="mx-4 h-full w-px bg-accent" />
        {children}
        <div className="mx-4 h-full w-px bg-accent" />
      </div>
    );
  }

  return (
    <div className={clsx(`relative my-4 flex items-center`, classNames)}>
      <div className="flex-grow border-t border-accent"></div>
      <span className="mx-4">{children}</span>
      <div className="flex-grow border-t border-accent"></div>
    </div>
  );
};

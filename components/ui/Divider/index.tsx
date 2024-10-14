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
        <div className="mx-4 h-full w-px bg-gray-200" />
        {children}
        <div className="mx-4 h-full w-px bg-gray-200" />
      </div>
    );
  }

  return (
    <div className={clsx(`relative my-4 flex items-center`, classNames)}>
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="mx-4">{children}</span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

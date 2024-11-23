import React from "react";
import { cn } from "@/lib/utils"; // If you're using a utility function for conditional classNames
import { twMerge } from "tailwind-merge";

interface BackgroundEffectProps {
  size?: string;
  lightColor?: string;
  lightOpacity?: number;
  lightBlur?: string;
  darkColor?: string;
  darkOpacity?: number;
  darkBlur?: string;
  lightPosition?: string;
  darkPosition?: string;
}

export const BackgroundEffect: React.FC<BackgroundEffectProps> = ({
  size = "h-[50vh] w-[50vw]",
  lightColor = "#bfbd3340",
  lightOpacity = 0.2,
  lightBlur = "80px",
  darkColor = "#bfb63350",
  darkOpacity = 0.15,
  darkBlur = "300px",
  lightPosition = "-translate-x-[30%] translate-y-[20%]",
  darkPosition = "-translate-x-[30%] translate-y-[20%]",
}) => {
  return (
    <>
      <div
        className={twMerge(
          cn(
            "absolute bottom-auto left-0 top-0 -z-10 rounded-full",
            lightPosition,
            size,
            `bg-[${lightColor}] opacity-[${lightOpacity}] blur-[${lightBlur}]`,
          ),
        )}
      />
      <div
        className={twMerge(
          cn(
            "absolute bottom-auto right-0 top-0 -z-10 h-[60vh] w-[50vw] rounded-full",
            darkPosition,
            size,
            `dark:bg-[${darkColor}] dark:opacity-[${darkOpacity}] dark:blur-[${darkBlur}]`,
          ),
        )}
      />
    </>
  );
};

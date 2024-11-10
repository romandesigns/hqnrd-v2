import React from "react";
import { featuresList } from "./featureItems";
import { twMerge } from "tailwind-merge";

export function Features() {
  return (
    <div className="py-4">
      <h3 className="text-lg font-bold">Features</h3>
      <ul className="my-3 flex grid-cols-4 grid-rows-2 flex-wrap items-center justify-start gap-2 sm:grid">
        {featuresList.map((feature) => (
          <li
            key={feature.id}
            className={twMerge(
              `flex flex-1 items-center gap-1 rounded-md border bg-muted/10 p-1`,
            )}
          >
            <span
              className={twMerge(
                `flex ${feature.color} h-8 w-8 items-center justify-center rounded-md`,
              )}
            >
              <feature.Icon />
            </span>
            <span className="ml-1 text-xs">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

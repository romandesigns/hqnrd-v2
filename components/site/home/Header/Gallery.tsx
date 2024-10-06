import React from "react";

export function Gallery() {
  return (
    <div className="relative p-6">
      <figure className="aspect-square rounded-md bg-neutral-700" />
      <figure className="absolute -left-8 top-10 aspect-square w-1/3 rounded-md bg-neutral-400 max-lg:left-0 max-lg:w-1/4" />
      <figure className="absolute -bottom-2 -left-2 -z-[1] aspect-square w-1/3 rounded-md bg-neutral-400 max-lg:bottom-2 max-lg:left-2" />
      <figure className="absolute -bottom-2 -right-2 aspect-square w-1/3 rounded-md bg-neutral-400 max-lg:bottom-2 max-lg:right-2" />
    </div>
  );
}
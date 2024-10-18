import React from "react";

export function Gallery() {
  return (
    <section className="relative flex aspect-square items-center justify-center rounded-md">
      <figure className="aspect-square w-4/6 rounded-md bg-neutral-700" />
      <figure className="absolute inset-10 -z-[1] aspect-square w-2/6 rounded-md bg-red-700" />
      <figure className="absolute bottom-16 right-16 z-[1] aspect-square w-2/6 rounded-md bg-red-700" />
      <figure className="absolute bottom-16 left-16 -z-[1] aspect-square w-40 rounded-md border-[1.4rem] border-purple-800 bg-transparent" />
      <figure className="absolute right-16 top-16 -z-[1] aspect-square w-40 rounded-md border-[1.4rem] border-orange-800 bg-transparent" />
    </section>
  );
}

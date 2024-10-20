import React from "react";

export function Gallery() {
  return (
    <section className="relative flex aspect-square items-center justify-center rounded-md max-sm:mt-28">
      <figure className="aspect-square rounded-md bg-neutral-700 lg:w-4/6" />
      <figure className="absolute inset-10 -z-[1] aspect-square rounded-md bg-blue-700/50 max-lg:scale-105 lg:w-2/6" />
      <figure className="absolute bottom-16 right-16 z-[2] aspect-square rounded-md bg-yellow-700 max-lg:z-[1] lg:bottom-16 lg:right-16 lg:w-2/6" />
      <figure className="absolute bottom-1 left-1 aspect-square w-1/4 rounded-md border-[1.2rem] border-purple-800 bg-transparent lg:bottom-16 lg:left-16 lg:-z-[1] lg:w-40" />
      <figure className="absolute -right-0 -top-0 -z-[2] aspect-square w-2/6 rounded-md border-[1.2rem] border-orange-800 bg-transparent lg:right-16 lg:top-16 lg:w-40" />
    </section>
  );
}

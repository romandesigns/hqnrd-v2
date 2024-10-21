import Image from "next/image";
import React from "react";
import { data } from "@/public/assets/data";
import { Carousel } from "@/components/ui";

export function Gallery() {
  return (
    <section className="relative flex aspect-square items-center justify-center rounded-md max-sm:mt-24">
      <div className="glass-effect aspect-square w-4/6 overflow-hidden">
        <figure className="relative aspect-square overflow-hidden">
          <Carousel
            arr={data.home.header.room}
            delay={3000}
            spaceBetween={10}
            speed={2000}
            direction="horizontal"
            component="img"
          />
        </figure>
      </div>
      <div className="glass-effect absolute left-2 top-4 -z-[1] aspect-square w-2/6 overflow-hidden lg:inset-10">
        <figure className="relative aspect-square overflow-hidden">
          <Carousel
            arr={data.home.header.room}
            delay={3000}
            spaceBetween={10}
            speed={2000}
            direction="horizontal"
            component="img"
          />
        </figure>
      </div>
      <div className="glass-effect absolute bottom-10 right-10 z-[1] aspect-square w-2/6 overflow-hidden lg:bottom-16 lg:right-16">
        <figure className="relative aspect-square overflow-hidden">
          <Carousel
            arr={data.home.header.room}
            delay={3000}
            spaceBetween={10}
            speed={2000}
            direction="horizontal"
            component="img"
          />
        </figure>
      </div>
    </section>
  );
}

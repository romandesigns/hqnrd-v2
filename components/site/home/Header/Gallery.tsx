"use client";
import { Carousel, ContactWidget } from "@/components/ui";
import { data } from "@/public/assets/data";
console.log();
export function Gallery({ lang }: { lang: string }) {
  return (
    <div>
      <div className="relative p-8">
        {/* Main Image */}
        <div className="glass-effect relative aspect-square overflow-hidden">
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

        {/* Top Left Image */}
        <div className="glass-effect absolute -left-8 top-12 aspect-square w-1/3 overflow-hidden max-lg:left-0 max-lg:w-1/4">
          <figure className="relative aspect-square overflow-hidden">
            <Carousel
              arr={data.home.header.terrace}
              delay={3000}
              spaceBetween={10}
              speed={2000}
              direction="vertical"
            />
          </figure>
        </div>

        {/* Bottom Left Image */}
        <div className="glass-effect absolute -bottom-2 -left-2 -z-[1] aspect-square w-1/3 overflow-hidden max-lg:bottom-2 max-lg:left-2">
          <figure className="before:backdrop relative aspect-square overflow-hidden before:absolute before:-inset-0 before:z-[2] before:block before:rounded-md before:bg-black/50 before:backdrop-blur-sm">
            <Carousel
              arr={data.home.header.room}
              delay={3000}
              spaceBetween={10}
              speed={2000}
              direction="horizontal"
            />
          </figure>
        </div>
        {/* Bottom Right Image */}
        <div className="glass-effect absolute -bottom-28 -right-2 aspect-square w-3/6 overflow-hidden max-lg:bottom-2 max-lg:right-2 max-lg:w-2/6">
          <figure className="relative aspect-square overflow-hidden">
            <Carousel
              arr={data.home.header.around}
              delay={4000}
              spaceBetween={10}
              speed={2000}
              direction="horizontal"
            />
          </figure>
        </div>
      </div>

      <div className="py-4 lg:hidden lg:py-12">
        <ContactWidget
          lang={lang}
          className="w-full lg:flex lg:justify-start"
        />
      </div>
    </div>
  );
}

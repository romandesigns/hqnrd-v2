"use client";
import { Carousel, ContactWidget, Divider } from "@/components/ui";
export function Gallery({ lang }: { lang: string }) {
  const images = [
    "/assets/images/home/20221015_150527.jpg",
    "/assets/images/home/20221015_150955.jpg",
    "/assets/images/home/20221015_151139.jpg",
  ];

  return (
    <>
      <div className="relative p-4 pb-8 pl-8">
        {/* Main Image */}
        <div className="backdrop relative aspect-square overflow-hidden rounded-md border border-white bg-white/50 p-4 shadow-lg backdrop-blur-sm">
          <figure className="relative aspect-square overflow-hidden">
            <Carousel
              arr={images}
              delay={3500}
              spaceBetween={10}
              speed={2000}
              direction="horizontal"
            />
          </figure>
        </div>

        {/* Top Left Image */}
        <div className="backdrop absolute -left-8 top-10 aspect-square w-1/3 overflow-hidden rounded-md border border-white bg-white/50 p-4 shadow-md backdrop-blur-sm max-lg:left-0 max-lg:w-1/4">
          <figure className="relative aspect-square overflow-hidden">
            <Carousel
              arr={images}
              delay={3500}
              spaceBetween={10}
              speed={2000}
              direction="vertical"
            />
          </figure>
        </div>

        {/* Bottom Left Image */}
        <div className="backdrop absolute -bottom-2 -left-2 -z-[1] aspect-square w-1/3 overflow-hidden rounded-md border border-white bg-white/50 p-4 shadow-lg backdrop-blur-sm max-lg:bottom-2 max-lg:left-2">
          <figure className="before:backdrop relative aspect-square overflow-hidden before:absolute before:-inset-0 before:z-[2] before:block before:rounded-md before:bg-black/50 before:backdrop-blur-sm">
            <Carousel
              arr={images}
              delay={3500}
              spaceBetween={10}
              speed={2000}
              direction="horizontal"
            />
          </figure>
        </div>

        <div className="backdrop absolute -bottom-2 -right-2 aspect-square w-1/3 overflow-hidden rounded-md border border-white bg-white/50 p-4 shadow-lg backdrop-blur-sm max-lg:bottom-2 max-lg:right-2">
          <figure className="relative aspect-square overflow-hidden">
            <Carousel
              arr={images}
              delay={3500}
              spaceBetween={10}
              speed={2000}
              direction="horizontal"
            />
          </figure>
        </div>
      </div>

      <div className="lg:hidden lg:py-12">
        <Divider orientation="horizontal">
          <ContactWidget
            lang={lang}
            className="w-full lg:flex lg:justify-start"
          />
        </Divider>
      </div>
    </>
  );
}

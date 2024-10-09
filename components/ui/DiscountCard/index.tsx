import React from "react";
import Image from "next/image";

interface DiscountCardProps {
  percentage: number;
  ctaText: string;
  imageSrc: string;
}
export function DiscountCard({
  percentage,
  ctaText,
  imageSrc,
}: DiscountCardProps) {
  return (
    <article className="glass-effect">
      <header className="flex w-full flex-col">
        <div className="flex w-full">
          <div className="h-8 flex-[.1] rounded-tl-md rounded-tr-md bg-background" />
          <div
            data-before="DISCOUNT"
            className="relative max-w-[30%] flex-auto rounded-bl-md rounded-br-md bg-transparent p-2 pt-0 shadow-[3px_6px_0px_3px_hsl(var(--background))] after:absolute after:bottom-2 after:left-2 after:right-2 after:mx-auto after:flex after:h-10 after:items-center after:justify-center after:rounded-md after:bg-foreground after:py-6 after:font-bold after:text-primary-foreground after:content-[attr(data-before)] after:max-sm:px-6 after:max-sm:text-xs"
          />
          <div className="h-8 flex-[.7] rounded-tl-md rounded-tr-md bg-background" />
        </div>
        <div className="h-3 w-full bg-background" />
      </header>
      <div className="bg-background p-1">
        <figure className="relative block aspect-square overflow-hidden rounded-md">
          <div className="absolute inset-0 z-[1] flex flex-col items-start justify-start bg-foreground/40 p-14 backdrop-blur-sm max-lg:p-4">
            <p className="flex flex-col">
              <span className="text-[12rem] font-black text-background max-lg:text-[8rem]">
                {percentage}%
              </span>
              <span className="text-md -translate-y-5 translate-x-4 font-semibold text-background">
                {ctaText}
              </span>
            </p>
          </div>
          <Image
            src={imageSrc}
            fill
            alt="featured Image"
            className="object-cover"
          />
        </figure>
      </div>
      <footer className="rounded-bl-md rounded-br-md bg-background p-2 text-xs" />
    </article>
  );
}

import React from "react";
import Image from "next/image";
import NumberTicker from "../number-ticker";

interface DiscountCardProps {
  title: string;
  percentage: number;
  ctaText: string;
  imageSrc: string;
}
export function DiscountCard({
  title,
  percentage,
  ctaText,
  imageSrc,
}: DiscountCardProps) {
  return (
    <article className="glass-effect">
      <header className="flex w-full flex-col">
        <div className="flex w-full">
          <div className="h-8 flex-[.1] rounded-tl-md rounded-tr-md bg-card" />

          <div
            data-before={title.toUpperCase()}
            className="after:floating-shadow relative max-w-[30%] flex-auto rounded-bl-md rounded-br-md bg-transparent p-2 pt-0 shadow-[3px_6px_0px_3px_hsl(var(--card))] after:absolute after:bottom-2 after:left-2 after:right-2 after:mx-auto after:flex after:h-10 after:items-center after:justify-center after:rounded-md after:bg-[hsl(var(--accent-secondary))] after:py-6 after:font-bold after:text-white after:content-[attr(data-before)] after:max-sm:px-6 after:max-sm:text-xs"
          >
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="h-8 flex-[.7] rounded-tl-md rounded-tr-md bg-card" />
        </div>
        <div className="h-3 w-full bg-card" />
      </header>
      <div className="overflow-hidden rounded-md rounded-t-none bg-card p-3">
        <figure className="relative block aspect-square overflow-hidden rounded-md">
          <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center bg-gradient-to-br from-[#1c4e70]/60 via-[#3a5f85]/60 to-[#bfbd33]/60 p-14 backdrop-blur-sm max-lg:p-4">
            <div className="flex flex-col items-center justify-center">
              <span className="mx-auto flex flex-col items-center justify-center">
                <span className="text-[18rem] font-black text-white max-lg:text-[8rem]">
                  <NumberTicker value={percentage} className="text-white" />
                  <span>%</span>
                </span>
                <p className="inline-block w-full border-b-2 border-t-2 border-white p-3 text-center uppercase text-white">
                  <span className="max-w-sm text-[0.65rem] font-bold lg:text-lg">
                    {ctaText}
                  </span>
                </p>
              </span>
            </div>
          </div>
          <Image
            src={imageSrc}
            fill
            alt="featured Image"
            className="object-cover"
          />
        </figure>
      </div>
    </article>
  );
}

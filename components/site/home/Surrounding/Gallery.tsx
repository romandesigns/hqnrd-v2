"use client";

import { CiImageOn } from "@/components/icons";
import { CONSTANTS } from "@/constants";
import Image from "next/image";
import { useRef, useState } from "react";
import type { FullscreenRef } from "yet-another-react-lightbox";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export function Gallery({ imagesArray }: { imagesArray: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleLightbox = (index: number) => {
    setOpen(true);
    setIndex(index);
  };

  const fullscreenRef = useRef<FullscreenRef | null>(null);

  // Class names array for styling each image differently based on index
  const imageClasses = [
    "relative row-span-full aspect-square overflow-hidden rounded-md", // For the first image (index 0)
    "relative h-full overflow-hidden rounded-md", // For the second image (index 1)
    "relative h-full overflow-hidden rounded-md", // For the third image (index 2)
  ];

  return (
    <>
      <Lightbox
        className="w-full [&>div>div]:bg-black/80 [&>div>div]:backdrop-blur-md"
        open={open}
        close={() => setOpen(false)}
        slides={imagesArray.map((image) => ({
          src: image,
          alt: CONSTANTS.site.site_name + " Featured Image",
          download: `${image}/download`,
        }))}
        index={index}
        plugins={[Counter, Download, Fullscreen]}
        counter={{ container: { style: { top: "top", bottom: 0 } } }}
        fullscreen={{ ref: fullscreenRef }}
        on={{
          click: () => fullscreenRef.current?.enter(),
        }}
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-4 max-md:gap-2">
        {imagesArray.slice(0, 3).map((image, i) => (
          <figure
            key={i}
            className={imageClasses[i]}
            onClick={() => handleLightbox(i)}
          >
            <div className="group absolute inset-0 z-[1] flex h-full w-full cursor-pointer items-center justify-center transition-all delay-75 duration-100 hover:bg-black/50 hover:backdrop-blur-lg">
              <CiImageOn className="text-4xl text-white opacity-0 delay-200 duration-100 group-hover:opacity-100" />
            </div>
            <Image
              src={image}
              fill
              alt={CONSTANTS.site.site_name + " Featured Image"}
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </>
  );
}

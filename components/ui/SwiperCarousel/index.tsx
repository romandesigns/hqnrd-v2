"use client";
import { CONSTANTS } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";

interface CarouselProps {
  arr: string[];
  delay: number;
  direction: "horizontal" | "vertical";
  className?: string;
  spaceBetween?: number;
  speed?: number;
}

export function Carousel({
  arr,
  delay,
  spaceBetween = 10,
  speed = 800, // Default speed of 800ms
  direction = "horizontal",
}: CarouselProps) {
  useEffect(() => {
    // Apply cubic-bezier easing to all slides for smooth transitions
    const swiperSlides = document.querySelectorAll(".swiper-slide");
    swiperSlides.forEach((slide) => {
      (slide as HTMLElement).style.transitionTimingFunction =
        "cubic-bezier(.21,.96,.79,.31)"; // Smoother easing function
    });
  }, []);

  return (
    <Swiper
      autoplay={{
        waitForTransition: true,
        delay: delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      freeMode={true}
      direction={direction}
      spaceBetween={spaceBetween}
      speed={speed} // Control speed for transitions
      loop={true}
      className="absolute inset-0 h-full w-full bg-transparent"
      modules={[Autoplay]}
    >
      {arr.map((image, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide flex h-full w-full items-center justify-center rounded-md"
        >
          <Image
            fill
            src={image}
            alt={CONSTANTS.site.site_name + " gallery image " + index}
            className="rounded-md object-cover shadow-sm"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

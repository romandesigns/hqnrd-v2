"use client";
import { CONSTANTS } from "@/constants";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";
import { CardTestimonial } from "@/components/ui";
import { clsx } from "@/utils/clsx";
import useViewportState from "beautiful-react-hooks/useViewportState";
import { CardTestimonialProps, CarouselProps } from "@/types";

export function Carousel({
  arr,
  delay,
  slidesPerView = "auto",
  spaceBetween = 10,
  speed = 800,
  direction = "horizontal",
  component = "img",
  classNames,
}: CarouselProps) {
  const { width } = useViewportState();

  useEffect(() => {
    const swiperSlides = document.querySelectorAll(".swiper-slide");
    swiperSlides.forEach((slide) => {
      (slide as HTMLElement).style.transitionTimingFunction =
        "cubic-bezier(.21,.96,.79,.31)";
    });
  }, []);

  const renderImageComponent = (arr: string[]) => {
    return arr.map((image, index) => (
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
    ));
  };

  const renderCardTestimonialComponent = (arr: CardTestimonialProps[]) => {
    return arr.map((item, index) => (
      <SwiperSlide
        key={index}
        className={clsx(
          `swiper-slide flex h-full w-full items-stretch justify-center rounded-md`,
          classNames,
        )}
      >
        <CardTestimonial {...item} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      pagination={true}
      autoplay={{
        waitForTransition: true,
        delay: delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={
        component === "cardTestimonial" && width < 810
          ? 1
          : component === "cardTestimonial" && width < 1024
            ? 2
            : slidesPerView
      }
      freeMode={true}
      direction={direction}
      spaceBetween={spaceBetween}
      speed={speed} // Control speed for transitions
      loop={true}
      className="absolute inset-0 h-full w-full bg-transparent"
      modules={[Autoplay, Pagination]}
    >
      {component === "img" && renderImageComponent(arr as string[])}
      {component === "cardTestimonial" &&
        renderCardTestimonialComponent(arr as CardTestimonialProps[])}
    </Swiper>
  );
}

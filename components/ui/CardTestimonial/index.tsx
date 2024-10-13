import { useHtmlParser } from "@/utils/useHtmlParser";
import Image from "next/image";
import { StarRating } from "..";
import { CardTestimonialProps } from "@/types";

export function CardTestimonial({
  avatar,
  author,
  rating,
  comment,
  roomRating,
  locationRating,
  ServiceRating,
}: CardTestimonialProps) {
  return (
    <article className="glass-effect w-full @container">
      <div className="flex justify-end after:absolute after:left-[.5rem] after:block after:h-[calc(100%-3rem)] after:w-[3.4%] after:rounded-tl-lg after:bg-background after:content-[''] lg:after:left-3">
        <div className="relative z-[2] w-[20.5%] -translate-y-6 rounded-lg rounded-tr-none bg-transparent p-[.3rem] shadow-[0px_26px_0px_2px_hsl(var(--background))]">
          <div className="relative aspect-square h-[100%] w-full -translate-y-[.05rem] overflow-hidden rounded-lg bg-background">
            <Image src={avatar} fill alt="Avatar user" />
          </div>
        </div>
        <div className="w-[76%] rounded-tr-lg bg-background p-4 text-sm">
          <p className="font-medium text-neutral-500">{author}</p>
          <p className="flex items-end justify-start gap-1 font-bold">
            <span>{rating}</span>
            <StarRating rating={rating} />
          </p>
        </div>
      </div>
      <div className="relative z-[2] -translate-y-2 bg-background px-4 pb-2 text-xs leading-relaxed after:absolute after:left-0 after:right-0 after:block after:h-4 after:bg-background after:content-['']">
        {useHtmlParser(comment)}
      </div>
      <div className="flex justify-between gap-4 rounded-bl-lg rounded-br-lg border-t border-background bg-background p-2 px-4 text-xs">
        <span>
          Rooms: <b>{roomRating}</b>
        </span>
        <span>
          Location: <b>{locationRating}</b>
        </span>
        <span>
          Service: <b>{ServiceRating}</b>
        </span>
      </div>
    </article>
  );
}

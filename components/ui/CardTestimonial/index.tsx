import React from "react";

export function CardTestimonial({
  author,
  rating,
  comment,
  roomRating,
  locationRating,
  ServiceRating,
}: CardTestimonialProps) {
  return (
    <article className="glass-effect container w-full">
      <div className="flex justify-end after:absolute after:left-3 after:block after:h-[calc(100%-3rem)] after:w-[3.4%] after:rounded-tl-lg after:bg-background after:content-['']">
        <div className="relative z-[2] w-[20.5%] -translate-y-4 rounded-lg rounded-tr-none bg-transparent p-[.3rem] shadow-[-3px_20px_0px_4px_hsl(var(--background))]">
          <div className="h-[120%] w-full -translate-y-[.89rem] rounded-lg bg-background"></div>
        </div>
        <div className="w-[76%] rounded-tr-lg bg-background p-4">
          <p>Robert Brown</p>
          <p>
            <span className="font-bold">4.5</span> Rating Review
          </p>
        </div>
      </div>
      <div className="relative bg-background p-2 px-4 text-sm leading-relaxed">
        This is just a little description of what I&lsquo;m trying to accomplish
        here. Let me know what...
      </div>
      <div className="flex justify-between gap-4 rounded-bl-lg rounded-br-lg border-t border-background bg-background p-2 px-4">
        <span>
          Rooms: <b>4.5</b>
        </span>
        <span>
          Location: <b>4.5</b>
        </span>
        <span>
          Service: <b>4.5</b>
        </span>
      </div>
    </article>
  );
}

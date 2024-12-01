import React from "react";

export function Aside({
  children,
  roomPricePerNight,
}: {
  children: React.ReactNode;
  roomPricePerNight: number;
}) {
  return (
    <aside className="grid flex-[.9] grid-cols-1 grid-rows-[auto_1fr] rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md bg-card p-4 max-lg:hidden">
      <div className="flex items-center justify-between">
        <p className="font-black uppercase">Reservation</p>
        <p className="flex items-center justify-center gap-2 rounded-tl-md rounded-tr-md bg-foreground p-2 px-4 uppercase text-background">
          <span className="font-black">{roomPricePerNight}</span>/
          <span className="font-medium">Night</span>
        </p>
      </div>
      {children}
    </aside>
  );
}

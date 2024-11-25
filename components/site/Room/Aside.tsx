import React from "react";

export function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="flex-[.9] rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md bg-card p-4 max-lg:hidden">
      <div className="flex items-center justify-between border-b">
        <p className="font-black uppercase">Reservation</p>
        <p className="flex items-center justify-center gap-2 rounded-tl-md rounded-tr-md bg-foreground p-2 px-4 uppercase text-background">
          <span className="font-black">1,350</span>/
          <span className="font-medium">Night</span>
        </p>
      </div>
      {children}
    </aside>
  );
}

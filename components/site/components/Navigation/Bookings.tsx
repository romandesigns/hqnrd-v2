import { MdOutlineChecklistRtl } from "@/components/icons";
import { Button, Notifier } from "@/components/ui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clsx } from "@/utils/clsx";
import { ReservationTypes } from "@/zustand/interface";

import { TrayCard } from "../../Room/TrayCard";

export function Bookings({
  reservations,
}: {
  reservations: ReservationTypes[];
}) {
  console.log(reservations);
  return (
    <>
      <Notifier />
      <Sheet open={true}>
        <SheetTrigger className="relative rounded-md border bg-background p-2 shadow-sm hover:bg-muted">
          <div
            className={clsx(
              `p-0.25 absolute -right-2 -top-1.5 rounded-full border border-background bg-muted-foreground px-2.5 text-[0.7rem] font-semibold text-muted-foreground`,
              reservations.length >= 1 &&
                "bg-[var(--brand-secondary-accent-500)] text-white",
            )}
          >
            {reservations.length}
          </div>
          <MdOutlineChecklistRtl size={18} />
        </SheetTrigger>
        <SheetContent className="p-2 [@media(max-width:414px)]:w-[99%]">
          <SheetHeader className="py-4">
            <SheetTitle>My Bookings</SheetTitle>
          </SheetHeader>
          <TrayCard />
          <SheetClose>Close it</SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}

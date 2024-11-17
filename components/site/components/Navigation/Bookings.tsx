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

import { CardBooking } from "../../Room";

export function Bookings({
  reservations,
}: {
  reservations: ReservationTypes[];
}) {
  return (
    <>
      <Notifier />
      <Sheet>
        <SheetTrigger className="relative rounded-md border bg-background p-2 shadow-sm hover:bg-muted">
          <div
            className={clsx(
              `p-0.25 absolute -right-2 -top-1.5 rounded-full border border-background bg-muted px-2.5 text-[0.7rem] font-semibold text-muted-foreground`,
              reservations.length >= 1 &&
                "bg-[var(--brand-secondary-accent-500)] text-white",
            )}
          >
            {reservations.length}
          </div>
          <MdOutlineChecklistRtl size={18} />
        </SheetTrigger>
        <SheetContent className="p-2 max-sm:w-full">
          <SheetHeader className="py-4">
            <SheetTitle>My Bookings</SheetTitle>
          </SheetHeader>
          <CardBooking />
          <SheetClose>Close it</SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}
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

import { CardBooking } from "../../Room";
import { RoomReservationInterface } from "@/types";

export function Bookings({
  reservations,
  className,
}: {
  reservations: RoomReservationInterface[];
  className?: string;
}) {
  return (
    <>
      <Notifier />
      <Sheet>
        <SheetTrigger
          className={clsx(
            "relative rounded-md border bg-background p-2 shadow-sm hover:bg-muted",
            className,
          )}
        >
          <div
            className={clsx(
              `p-0.25 text-muted-foreground absolute -right-2 -top-1.5 rounded-full bg-muted px-2.5 text-[0.7rem] font-semibold transition-transform duration-1000`,
              reservations.length >= 1 &&
                "animate-beacon bg-highlight text-white",
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

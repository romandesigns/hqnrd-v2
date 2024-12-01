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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Locale } from "@/i18n-config";

export function Bookings({
  reservations,
  className,
  lang,
}: {
  reservations: RoomReservationInterface[];
  className?: string;
  lang: Locale;
}) {
  console.log(reservations);
  const isBooked = false;
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
          <div className="h-full">
            <ScrollArea className="h-full max-h-screen">
              <div className="grid grid-flow-row grid-cols-1 grid-rows-[1fr_auto] gap-3 py-20">
                {reservations.map((booking, index) => {
                  return <CardBooking key={index} {...booking} lang={lang} />;
                })}
              </div>
            </ScrollArea>
            <div className="z-[2] bg-red-500">
              <Button>Continue</Button>
            </div>
          </div>
          {/* <div>
            <SheetClose>Close it</SheetClose>
          </div> */}
        </SheetContent>
      </Sheet>
    </>
  );
}

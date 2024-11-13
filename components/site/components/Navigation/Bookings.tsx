import { MdOutlineChecklistRtl } from "@/components/icons";
import { Notifier } from "@/components/ui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clsx } from "@/utils/clsx";
import React from "react";

export function Bookings({ bookingsCount }: { bookingsCount: number }) {
  return (
    <>
      <Notifier />
      <Sheet>
        <SheetTrigger className="relative rounded-md border bg-background p-2 shadow-sm hover:bg-muted">
          <span
            className={clsx(
              `absolute -right-2 -top-1.5 inline-block rounded-full border border-background bg-muted p-2 px-2.5 text-[0.7rem] font-semibold text-muted-foreground`,
              bookingsCount > 0 &&
                "bg-[var(--brand-secondary-accent-500)] text-white",
            )}
          >
            {bookingsCount}
          </span>
          <MdOutlineChecklistRtl size={18} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose>Close it</SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}

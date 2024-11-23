"use client";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ReservationForm } from "./ReservationForm";

export interface RoomReservationPropTypes {
  adults: number;
  infants: number;
  pricePerNight: number;
  unitNumber: number;
  checkIn: Date | null;
  checkOut: Date | null;
  message?: string;
  user: string;
  createdOn: Date;
}

export function DialogForm({ unitNumber }: { unitNumber: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false); // Programmatically close the sheet
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="text-forground w-full rounded-lg border bg-foreground p-2 px-4 text-sm text-background shadow max-lg:self-end">
        Make Reservation
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Reservation</DialogTitle>
        </DialogHeader>
        <ReservationForm unitNumber={unitNumber} pricePerNight={3000}>
          <Button size="block" onClick={closeSheet} className="lg:hidden">
            Submit
          </Button>
        </ReservationForm>
      </DialogContent>
    </Dialog>
  );
}

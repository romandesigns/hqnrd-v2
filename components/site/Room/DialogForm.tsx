"use client";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNotifications, useReservation } from "@/zustand/hooks";
import moment from "moment";
import React, { useState } from "react";
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
  const [reservation, setReservation] = useState<RoomReservationPropTypes>({
    adults: 0,
    infants: 0,
    pricePerNight: 1300,
    unitNumber,
    checkIn: null,
    checkOut: null,
    message: "",
    user: "Anonymous",
    createdOn: moment().toDate(),
  });

  const { addReservation } = useReservation();
  const { notificationTrigger } = useNotifications();

  const closeSheet = () => {
    setIsOpen(false); // Programmatically close the sheet
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addReservation(reservation);
    notificationTrigger("added reservation");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="text-forground w-full rounded-lg border bg-foreground p-2 px-4 text-sm text-background shadow max-lg:self-end">
        Make Reservation
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservation</DialogTitle>
        </DialogHeader>
        <ReservationForm
          unitNumber={unitNumber}
          pricePerNight={3000}
          handleSubmit={handleSubmit}
          setReservation={setReservation}
          reservation={reservation}
        >
          <Button size="block" onClick={closeSheet} className="lg:hidden">
            Submit
          </Button>
        </ReservationForm>
      </DialogContent>
    </Dialog>
  );
}

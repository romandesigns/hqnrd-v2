"use client";
import {
  BiMessageRoundedDots,
  HiOutlineUser,
  MdChildCare,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNotifications, useReservation } from "@/zustand/hooks";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import { DateTimePicker } from "./DateTimePicker";
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
export function ReservationForm({
  unitNumber,
  pricePerNight,
}: {
  unitNumber: number;
  pricePerNight: number;
}) {
  const [openTray, setOpenTray] = useState(false);
  const [reservation, setReservation] = useState<RoomReservationPropTypes>({
    adults: 0,
    infants: 0,
    pricePerNight,
    unitNumber,
    checkIn: null,
    checkOut: null,
    message: "",
    user: "Anonymous",
    createdOn: moment().toDate(),
  });

  const { addReservation } = useReservation();
  const { notificationTrigger } = useNotifications();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenTray(!openTray);
    addReservation(reservation);
    notificationTrigger("added reservation");
  };

  return (
    <>
      <form className="space-y-8 py-8" onSubmit={handleSubmit}>
        <div className="flex w-full items-stretch justify-center gap-2">
          <Label
            htmlFor="adultCount"
            className="flex flex-1 flex-col items-start justify-start gap-2"
          >
            <p className="flex items-center justify-start gap-2">
              <HiOutlineUser />
              <span className="text-xs">Adults</span>
            </p>
            <Input
              type="number"
              name="adultCount"
              placeholder="0"
              id="adultCount"
              min={0}
              required
              onChange={(e) =>
                setReservation({
                  ...reservation,
                  adults: Number(e.target.value),
                })
              }
            />
          </Label>
          <Label
            htmlFor="childCount"
            className="flex flex-1 flex-col items-start justify-start gap-2"
          >
            <p className="flex items-center justify-start gap-2">
              <MdChildCare />
              <span className="text-xs">Infantes</span>
            </p>
            <Input
              type="number"
              name="childCount"
              placeholder="0"
              id="childCount"
              min={0}
              required
              onChange={(e) =>
                setReservation({
                  ...reservation,
                  infants: Number(e.target.value),
                })
              }
            />
          </Label>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center gap-2">
          <Label
            htmlFor="childCount"
            className="mb-4 flex flex-1 flex-col items-start justify-start gap-2"
          >
            <p className="flex items-center justify-start gap-2">
              <span className="text-xs">Check In</span>
            </p>
            <DateTimePicker
              setReservation={setReservation}
              reservation={reservation}
            />
          </Label>
          <div className="flex items-center justify-between gap-2">
            <Label
              htmlFor="childCount"
              className="flex flex-1 flex-col items-start justify-start gap-2"
            >
              <p className="flex items-center justify-start gap-2">
                <span className="text-xs">Check Out</span>
              </p>
              <DatePicker
                setReservation={setReservation}
                reservation={reservation}
              />
            </Label>
            <Label
              htmlFor="checkoutTime"
              className="flex flex-1 flex-col items-start justify-start gap-2"
            >
              <p className="flex items-center justify-start gap-2"> </p>
              <Input
                type="text"
                readOnly
                name="checkOutTime"
                value={"11:30 AM"}
                id="checkoutTime"
                disabled
              />
            </Label>
          </div>
        </div>
        <div>
          <Label
            htmlFor="reservationMessage"
            className="flex flex-1 flex-col items-start justify-start gap-2"
          >
            <p className="flex items-center justify-start gap-2">
              <BiMessageRoundedDots />
              <span className="text-xs">(Optional)</span>
            </p>
            <Textarea
              placeholder="Type your message here."
              id="reservationMessage"
              name="reservationMessage"
              onChange={(e) =>
                setReservation({ ...reservation, message: e.target.value })
              }
            />
          </Label>
        </div>
        <Button className="w-full" size="lg" itemType="submit">
          Add Booking
        </Button>
      </form>
    </>
  );
}

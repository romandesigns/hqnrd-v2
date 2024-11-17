"use client";
import {
  FaChevronDown,
  FaRegClock,
  HiOutlineUser,
  MdChildCare,
  MdOutlineChecklistRtl,
  MdOutlineMessage,
} from "@/components/icons";
import {
  Button,
  Input,
  Label,
  Textarea,
  TimePicker,
  DateTimePicker,
} from "@/components/ui";
import { RoomReservationInterface } from "@/types";
import { timeWithDateConversion } from "@/utils/timeDateConversion";
import { bookingSchema } from "@/zod/roomBookingSchema";
import { useNotifications, useReservation } from "@/zustand/hooks";
import React, { useEffect, useState } from "react";

export function ReservationForm({
  unitNumber,
  pricePerNight,
  children,
}: {
  unitNumber: number;
  pricePerNight: number;
  children: React.ReactNode;
}) {
  const [errors, setErrors] = useState<string[]>([]);
  const [reservation, setReservation] = useState<RoomReservationInterface>({
    adults: 0,
    infants: 0,
    pricePerNight: 1300,
    unitNumber,
    checkInTime: undefined,
    checkInDate: undefined,
    checkOutDate: undefined,
    checkOutTime: "11:30 AM",
    message: "",
    user: "Anonymous",
    createdOn: new Date(),
  });
  const [isValid, setIsValid] = useState(true);
  const { addReservation, reservations } = useReservation();
  const { notificationTrigger } = useNotifications();
  const [timeToCheckIn, setTimeToCheckIn] = React.useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setReservation({ ...reservation, checkInTime: timeToCheckIn ?? "" });
  }, [timeToCheckIn]);

  useEffect(() => {
    try {
      const output = timeWithDateConversion(reservation);
      const validation = bookingSchema.parse(output);
      console.log(validation);
    } catch (error) {
      setIsValid(false); // Set invalid if parsing fails
    }
  }, [reservation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addReservation(reservation);
      notificationTrigger("added reservation");
    } catch (error) {
      console.error(error.errors); // Log the validation errors
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-stretch justify-center gap-6 lg:py-8"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 items-center justify-between gap-2">
          <div className="flex flex-col">
            <Label
              htmlFor="adultsCount"
              className="mb-1 flex gap-1 text-muted-foreground"
            >
              <HiOutlineUser />
              <span className="text-xs">Adults</span>
            </Label>
            <Input
              type="tel"
              min={1}
              id="adultsCount"
              placeholder="0"
              value={reservation.adults}
              onChange={(e) =>
                setReservation({
                  ...reservation,
                  adults: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <Label
              htmlFor="childrenCount"
              className="mb-1 flex gap-1 text-muted-foreground"
            >
              <MdChildCare />
              <span className="text-xs">Children</span>
            </Label>
            <Input
              type="tel"
              min={1}
              id="childrenCount"
              placeholder="0"
              value={reservation.infants}
              onChange={(e) =>
                setReservation({
                  ...reservation,
                  infants: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="items-strech flex flex-col justify-start">
          <Label className="mb-1 flex items-end justify-start gap-1 text-muted-foreground">
            <MdOutlineChecklistRtl />
            <span className="text-xs">Check In</span>
          </Label>
          <div className="grid grid-cols-2 items-center justify-between gap-2 max-sm:grid-cols-1 max-sm:grid-rows-2">
            <DateTimePicker
              min={new Date()}
              value={reservation.checkInDate}
              onChange={(checkInDate) =>
                setReservation({
                  ...reservation,
                  checkInDate: checkInDate,
                })
              }
              use12HourFormat
              hideTime
            />
            <TimePicker setTimeToCheckIn={setTimeToCheckIn} />
          </div>
        </div>
        <div className="items-strech flex flex-col justify-start">
          <Label className="mb-1 flex items-end justify-start gap-1 text-muted-foreground">
            <MdOutlineChecklistRtl />
            <span className="text-xs">Check Out</span>
          </Label>
          <div className="grid grid-cols-2 items-center justify-between gap-2 max-sm:grid-cols-1 max-sm:grid-rows-2">
            <DateTimePicker
              min={reservation.checkInDate || new Date()}
              value={reservation.checkOutDate}
              onChange={(checkOutDate) =>
                setReservation({
                  ...reservation,
                  checkOutDate: checkOutDate,
                })
              }
              use12HourFormat
              hideTime
            />
            <p className="flex w-full cursor-not-allowed items-center rounded-md border p-2 px-3 text-sm opacity-50 shadow-sm">
              <FaRegClock size={12.2} className="mr-3" />
              <span>11</span>
              <span>:</span>
              <span>30</span>
              <span className="ml-1">AM</span>
              <span className="ml-auto">
                <FaChevronDown size={11} className="text-neutral-300" />
              </span>
            </p>
          </div>
        </div>
        <div>
          <Label className="mb-1 flex items-end justify-start gap-2 text-muted-foreground">
            <MdOutlineMessage />
            <span className="text-xs">Message (Optional)</span>
          </Label>
          <Textarea
            value={reservation.message}
            onChange={(e) =>
              setReservation({
                ...reservation,
                message: e.target.value,
              })
            }
          />
        </div>
        <Button size="block" type="submit" disabled={isValid}>
          Add Booking
        </Button>
      </form>
    </>
  );
}

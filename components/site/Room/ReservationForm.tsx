"use client";
import {
  FaChevronDown,
  FaRegClock,
  FaTrash,
  HiOutlineUser,
  MdChildCare,
  MdModeEdit,
  MdOutlineChecklistRtl,
  MdOutlineEdit,
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
import React, { useCallback, useEffect, useMemo, useState } from "react";

export function ReservationForm({
  roomUnitNumber,
  roomPricePerNight,
  children,
  roomCategory,
}: {
  roomUnitNumber: number;
  roomPricePerNight: number;
  children?: React.ReactNode;
  roomCategory: string;
}) {
  const [errors, setErrors] = useState<string[]>([]);
  const [reservation, setReservation] = useState<RoomReservationInterface>({
    adults: 0,
    infants: 0,
    pricePerNight: 1300,
    roomUnitNumber,
    checkInTime: undefined,
    checkInDate: undefined,
    checkOutDate: undefined,
    checkOutTime: "11:30 AM",
    message: "",
    user: "Anonymous",
    createdOn: new Date(),
    category: roomCategory,
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
    } catch (error) {
      setIsValid(false); // Set invalid if parsing fails
    }
  }, [reservation]);

  const addedRoom = useMemo(() => {
    return reservations.filter(
      (room) => room.roomUnitNumber === roomUnitNumber,
    );
  }, [reservations, roomUnitNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addReservation(reservation);
      notificationTrigger("added reservation");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message); // Log the validation errors
      }
    }
  };

  const handleUpdateBooking = useCallback(() => {
    setReservation([reservation, ...addedRoom]);
  }, [addedRoom]);

  return (
    <>
      <form
        className={`relative flex flex-col items-stretch justify-start gap-6 ${addedRoom.length > 0 ? "lg:py-1" : "lg:py-8"}`}
        onSubmit={handleSubmit}
      >
        {addedRoom.length ? (
          <div className="absolute z-[2] mt-4 flex w-full flex-col items-center justify-start rounded-md border bg-white py-40 backdrop-blur-lg">
            <h4 className="font-bold">Already added</h4>
            <div className="flex w-3/4 flex-col items-center justify-center gap-2 py-4">
              <Button size="block">Make Payment</Button>
              <div className="mt-2 flex w-full justify-end gap-6">
                <small className="flex items-end gap-1 leading-none text-orange-500 underline">
                  <MdModeEdit size={20} />
                  Edit
                </small>
                <small className="flex items-end gap-1 leading-none text-highlight underline">
                  <FaTrash />
                  Remove
                </small>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 items-center justify-between gap-2">
              <div className="flex flex-col">
                <Label
                  htmlFor="adultsCount"
                  className="text-muted-foreground mb-1 flex gap-1"
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
                  className="text-muted-foreground mb-1 flex gap-1"
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
              <Label className="text-muted-foreground mb-1 flex items-end justify-start gap-1">
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
              <Label className="text-muted-foreground mb-1 flex items-end justify-start gap-1">
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
              <Label className="text-muted-foreground mb-1 flex items-end justify-start gap-2">
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
            <div>
              <Button
                onClick={() => handleUpdateBooking}
                disabled={isValid}
                size="block"
                type="submit"
              >
                Add Booking
              </Button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

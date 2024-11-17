"use client";
import {
  BiMessageRoundedDots,
  FaCalendar,
  HiOutlineUser,
  LuCalendarDays,
  MdChildCare,
  MdOutlineTimer,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { RoomReservationPropTypes } from "./DialogForm";
import moment from "moment";
import { useNotifications, useReservation } from "@/zustand/hooks";
import { RoomReservationInterface } from "@/types";
import { validateRequiredFields } from "@/utils/validateReservationForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { set } from "date-fns";
import { DateTimePicker, TimePicker } from "@/components/ui/DateTimePicker";
import { ChevronDown } from "lucide-react";
import { tree } from "next/dist/build/templates/app-page";

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
    checkInTime: null,
    checkInDate: null,
    checkOutDate: null,
    checkOutTime: "11:30 AM",
    message: "",
    user: "Anonymous",
    createdOn: new Date(),
  });

  const { addReservation } = useReservation();
  const { notificationTrigger } = useNotifications();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState<Date | undefined>(undefined);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const handleCheckIn = (selectedDate: Date | undefined) => {
    console.log(selectedDate);
    if (selectedDate) {
      setReservation({ ...reservation, checkInDate: selectedDate });
    }
  };

  const handleCheckOut = (selectedDate: Date | undefined) => {
    console.log(selectedDate);
    if (selectedDate) {
      setReservation({ ...reservation, checkOutDate: selectedDate });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateRequiredFields(reservation);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(
        Object.values(validationErrors).map((error) => error.message), // Use map to extract messages
      );
      setIsDialogOpen(true); // Open Alert Dialog on errors
      return;
    }
    addReservation(reservation);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch justify-center gap-6 lg:py-8"
      >
        {/* Guests Count */}
        <div className="flex w-full items-stretch justify-center gap-2">
          <Label
            htmlFor="adultCount"
            className="flex flex-1 flex-col items-start justify-start"
          >
            <p className="mb-1 flex items-center justify-start gap-1">
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
            className="flex flex-1 flex-col items-start justify-start"
          >
            <p className="mb-1 flex items-center justify-start gap-1">
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
        {/* CheckIn */}
        <div className="flex gap-2 max-sm:flex-col">
          <Label
            htmlFor="childCount"
            className="flex flex-1 flex-col items-start justify-start"
          >
            <p className="mb-1 flex items-center justify-start gap-1">
              <LuCalendarDays />
              <span className="text-xs">Check In</span>
            </p>
            <DateTimePicker
              hideCalendar={true}
              value={checkInDate}
              onChange={setCheckInDate}
              hourCycle={12}
              granularity="day"
              displayFormat={{ hour12: "MM-dd-yyyy" }}
            />
          </Label>
          <Label
            htmlFor="childCount"
            className="mb-4 flex flex-1 flex-col items-start justify-start"
          >
            <p className="mb-1 flex items-center justify-start gap-1 text-xs">
              <MdOutlineTimer />
              <span className="text-xs">Time</span>
            </p>
            <TimePicker hourCycle={12} granularity="minute" />
          </Label>
        </div>
        {/* Checkout */}
        <div className="flex w-full items-center justify-between gap-2 max-sm:flex-col">
          <Label
            htmlFor="childCount"
            className="flex w-full flex-1 flex-col items-start justify-start"
          >
            <p className="mb-1 flex items-center justify-start gap-1">
              <LuCalendarDays />
              <span className="text-xs">Check Out</span>
            </p>
            <DateTimePicker
              hideCalendar={true}
              value={checkOutDate}
              onChange={setCheckOutDate}
              hourCycle={12}
              granularity="day"
              displayFormat={{ hour12: "MM-dd-yyyy" }}
            />
          </Label>
          <Label
            htmlFor="checkoutTime"
            className="flex flex-1 flex-col items-start justify-start max-sm:w-full"
          >
            <p className="mb-1 flex items-center justify-start gap-1 text-xs">
              <MdOutlineTimer />
              <span className="text-xs">Time</span>
            </p>
            <p className="flex cursor-not-allowed gap-2 opacity-35">
              <span className="flex h-10 w-[3rem] items-center justify-center rounded-md border px-4 text-xs shadow-sm">
                11
              </span>
              <span className="flex items-center">:</span>
              <span className="flex h-10 w-[4rem] items-center rounded-md border px-4 text-xs shadow-sm">
                30
              </span>
              <span className="flex h-10 w-[3rem] items-center rounded-md border px-4 shadow-sm">
                AM
                <ChevronDown size={15} className="ml-1" />
              </span>
            </p>
          </Label>
        </div>
        {/* Message */}
        <Label
          htmlFor="reservationMessage"
          className="flex flex-1 flex-col items-start justify-start"
        >
          <p className="mb-1 flex items-center justify-start">
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
        {children}
        <Button size="block" type="submit" className="max-lg:hidden">
          Submit
        </Button>
      </form>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Validation Errors</AlertDialogTitle>
          </AlertDialogHeader>
          <ul className="space-y-2">
            {errors.map((error, index) => (
              <li key={index} className="text-sm text-red-500">
                {error}
              </li>
            ))}
          </ul>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>
              Dismiss
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

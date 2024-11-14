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
import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import { DateTimePicker } from "./DateTimePicker";
import { RoomReservationPropTypes } from "./DialogForm";

export function ReservationForm({
  unitNumber,
  pricePerNight,
  children,
  handleSubmit,
  setReservation,
  reservation,
}: {
  unitNumber: number;
  pricePerNight: number;
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setReservation: React.Dispatch<
    React.SetStateAction<RoomReservationPropTypes>
  >;
  reservation: RoomReservationPropTypes;
}) {
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
        {children}
        <Button size="block" type="submit" className="max-lg:hidden">
          Submit
        </Button>
      </form>
    </>
  );
}

"use client";
import {
  BiMessageRoundedDots,
  HiOutlineUser,
  MdChildCare,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import { DateTimePicker } from "@/components/ui/DateTimePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ReservationForm() {
  return (
    <form className="space-y-8 py-8">
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
          <DateTimePicker />
        </Label>
        <div className="flex items-center justify-between gap-2">
          <Label
            htmlFor="childCount"
            className="flex flex-1 flex-col items-start justify-start gap-2"
          >
            <p className="flex items-center justify-start gap-2">
              <span className="text-xs">Check Out</span>
            </p>
            <DatePicker />
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
          />
        </Label>
      </div>
      <Button className="w-full" size="lg">
        Add Booking
      </Button>
    </form>
  );
}

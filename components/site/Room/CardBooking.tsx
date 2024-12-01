import { HiOutlineUser, MdChildCare, TbMoonStars } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Locale } from "@/i18n-config";
import { formattedTime } from "@/lib/utils";
import { dateTimeFormatter } from "@/zustand/reducers/utils/timeStamp";
import { format } from "date-fns";

interface CardBookingProps {
  adults: number;
  infants: number;
  roomUnitNumber: number;
  unitNumber: number;
  checkInTime: string | undefined;
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
  checkOutTime: string | undefined;
  message: string;
  user: string;
  createdOn: Date;
  totalGuests: number | undefined;
  totalDays: number;
  origianlPrice: number;
  totalPrice: number;
  discount: number;
  eligibleForDiscount: boolean;
  lang: Locale;
  category: string;
  pricePerNight: number;
}

export function CardBooking({
  adults,
  infants,
  totalDays,
  unitNumber,
  pricePerNight,
  totalPrice,
  checkInDate,
  checkOutDate,
  checkOutTime,
  checkInTime,
  lang,
  category,
  roomUnitNumber,
}: CardBookingProps) {
  return (
    <Card className="rounded-md shadow-sm">
      <CardContent className="flex items-start justify-start p-0">
        {/* Image thumbnail */}
        <div className="aspect-square w-2/6 p-1">
          <figure className="aspect-square h-full w-full rounded-md bg-pink-500" />
        </div>
        {/* Header */}

        <div className="flex w-full flex-col p-1 pr-2">
          <div className="flex-1">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold">UNIT {roomUnitNumber}</h3>~
                  <p className="text-muted-foreground text-xs font-semibold">
                    {category}
                  </p>
                </div>
                <p className="text-xs">
                  <span className="font-bold">1,300</span>
                  <span>/ Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* Reservation Details */}
            <div className="flex w-full justify-start pt-1">
              <div className="flex-1">
                <p className="flex flex-1 flex-col items-start justify-start text-xs">
                  <span className="text-muted-foreground text-[0.6rem] font-medium">
                    Check In
                  </span>
                  <span className="text-[0.65rem] font-medium">
                    {dateTimeFormatter.formattedTime(checkInDate, lang)}
                  </span>
                </p>
              </div>
              <div className="flex-1">
                <p className="flex flex-1 flex-col items-start justify-start text-xs">
                  <span className="text-muted-foreground text-[0.60rem] font-medium">
                    Check Out
                  </span>
                  <span className="text-[0.65rem] font-medium">
                    {dateTimeFormatter.formattedTime(checkOutDate, lang)}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <p className="flex items-end gap-1 rounded-full bg-muted p-1 py-0.5 text-xs">
                <span className="text-[0.65rem] font-medium leading-none">
                  {adults}
                </span>
                <span className="text-muted-foreground leading-none">
                  <HiOutlineUser />
                </span>
              </p>
              <p className="flex items-end gap-1 rounded-full bg-muted p-1 py-0.5 text-xs">
                <span className="text-[0.65rem] font-medium leading-none">
                  {infants}
                </span>
                <span className="text-muted-foreground leading-none">
                  <MdChildCare />
                </span>
              </p>
              <p className="flex items-end gap-1 rounded-full bg-muted p-1 py-0.5 text-xs">
                <span className="text-[0.65rem] font-medium leading-none">
                  {totalDays}
                </span>
                <span className="text-muted-foreground leading-none">
                  <TbMoonStars />
                </span>
              </p>
              <p className="flex items-end gap-1 text-xs">
                <span className="py-0.25">
                  <span className="font-bold leading-none">{totalDays}</span>
                  <span className="leading-none">x {pricePerNight} = </span>
                </span>
                <span className="rounded-lg bg-muted px-2 py-0.5 font-bold leading-none">
                  ${totalPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

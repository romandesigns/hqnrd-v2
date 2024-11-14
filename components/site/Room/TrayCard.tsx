import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiOutlineUser, MdChildCare, TbMoonStars } from "@/components/icons";

export function TrayCard() {
  return (
    <Card className="rounded-md">
      <CardContent className="flex items-start justify-start gap-1 p-0">
        {/* Image thumbnail */}
        <figure className="aspect-square w-2/6 rounded-md bg-pink-500" />
        {/* Header */}

        <div className="flex w-full flex-col p-1 pr-2">
          <div className="flex-1">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold">UNIT 205</h3>-
                  <p className="text-xs font-semibold text-muted-foreground">
                    Double Bed
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
                  <span className="text-[0.6rem] font-medium text-muted-foreground">
                    Check In
                  </span>
                  <span className="text-[0.65rem] font-bold">
                    16/06/2024~12:30PM
                  </span>
                </p>
              </div>
              <div className="flex-1">
                <p className="flex flex-1 flex-col items-start justify-start text-xs">
                  <span className="text-[0.60rem] font-medium text-muted-foreground">
                    Check Out
                  </span>
                  <span className="text-[0.65rem] font-bold">
                    16/06/2024~11:30AM
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end gap-4">
              <p className="flex items-end gap-1 text-xs">
                <span className="font-bold leading-none">3</span>
                <HiOutlineUser />
              </p>
              <p className="flex items-end gap-1 text-xs">
                <span className="font-bold leading-none">0</span>
                <MdChildCare />
              </p>
              <p className="flex items-end gap-1 text-xs">
                <span className="font-bold leading-none">2</span>
                <span className="leading-none">
                  <TbMoonStars />
                </span>
              </p>
              <p className="flex items-end gap-1 text-xs">
                <span className="font-bold leading-none">2</span>
                <span className="leading-none">x 1,300 = </span>
                <span className="rounded-lg bg-muted px-2 py-0.5 font-bold leading-none text-muted-foreground">
                  $2,600
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

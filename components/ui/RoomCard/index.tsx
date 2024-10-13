import React from "react";
import { CONSTANTS } from "@/constants";
import Image from "next/image";
import { Button, CardHeader, CardHeading } from "@/components/ui";
import {
  BiHandicap,
  TbAirConditioning,
  TbBrandIntercom,
  TbMicrowave,
  TbToolsKitchen,
} from "@/components/icons";

export function RoomCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="">
      <CardHeader highlight="#101" title="Double Bed" />
      <div className="bg-background p-2">
        <figure className="relative block aspect-video">
          <Image
            fill
            className="rounded-md object-cover"
            src={imgSrc}
            alt={CONSTANTS.site.site_name}
          />
        </figure>
      </div>
      <CardHeading text="2,350 / Per Night" classNames="font-bold -mt-8" />
      <div className="flex flex-col gap-2 bg-background p-2 py-4">
        <div className="flex items-center justify-start gap-2">
          <p className="text-xs font-semibold">Features</p>
          <ul className="flex items-center justify-start gap-1">
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.72rem]">
              258 sqft
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.72rem]">
              Intercom
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.72rem]">
              2.5 Beds
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.72rem]">
              Balcony
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="text-xs font-semibold">Amenities</p>
          <ul className="flex items-center justify-start gap-2">
            <li className="p-1 px-2">
              <BiHandicap />
            </li>
            <li className="p-1 px-2">
              <TbAirConditioning />
            </li>
            <li className="p-1 px-2">
              <TbMicrowave />
            </li>
            <li className="p-1 px-2">
              <TbBrandIntercom />
            </li>
            <li className="p-1 px-2">
              <TbToolsKitchen />
            </li>
            <li className="text-xs font-bold">... 15+</li>
          </ul>
        </div>
      </div>
      <div className="rounded-bl-md rounded-br-md bg-background p-2">
        <Button size="block">View Details</Button>
      </div>
    </div>
  );
}

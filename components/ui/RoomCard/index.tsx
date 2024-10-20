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
import { data } from "@/public/assets/data";

export function RoomCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="">
      <CardHeader
        highlight="#101"
        title="Double Bed"
        siteMetaData={{ metadata: data.site.shareData }}
      />
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
          <ul className="flex items-center justify-start">
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.60rem] font-semibold">
              258 sqft
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.60rem] font-semibold">
              Intercom
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.60rem] font-semibold">
              2.5 Beds
            </li>
            <li className="rounded-full bg-foreground/5 p-1 px-2 text-[0.60rem] font-semibold">
              Balcony
            </li>
            <li className="ml-1 text-xs font-bold">... 6+</li>
          </ul>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="text-xs font-semibold">Amenities</p>
          <ul className="flex items-center justify-start">
            <li className="p-1">
              <BiHandicap />
            </li>
            <li className="p-1">
              <TbAirConditioning />
            </li>
            <li className="p-1">
              <TbMicrowave />
            </li>
            <li className="p-1">
              <TbBrandIntercom />
            </li>
            <li className="p-1">
              <TbToolsKitchen />
            </li>
            <li className="ml-1 text-xs font-bold">... 15+</li>
          </ul>
        </div>
      </div>
      <div className="rounded-bl-md rounded-br-md bg-background p-2">
        <Button size="block">View Details</Button>
      </div>
    </div>
  );
}

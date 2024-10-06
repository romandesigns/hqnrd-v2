import {
  FaStar,
  FaStarHalfAlt,
  FcGoogle,
  PiMapPinFill,
} from "@/components/icons";
import { Button, ExternalLink } from "@/components/ui";
import { CONSTANTS } from "@/constants";
import { clsx } from "@/utils/clsx";
import { useHtmlParser } from "@/utils/useHtmlParser";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface CopyWrittingProps {
  header: {
    review: string;
    highlight: string;
    title: string;
    complementaryText: string;
  };
}

export function CopyWritting({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: CopyWrittingProps;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex flex-col max-lg:py-2 max-lg:text-center">
        <div className="flex items-center justify-start gap-2 max-lg:justify-center">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FcGoogle />
            4.5
          </p>
          <span className="flex items-center justify-start">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </span>
        </div>
        <small className="max-lg:text-xs max-lg:font-medium">
          139 Google {dictionary.header.review}
        </small>
      </div>
      <div className="flex items-center justify-start gap-2 text-sm font-medium max-lg:justify-center">
        <PiMapPinFill className="animate-bounce" />
        <p>{dictionary.header.highlight}</p>
      </div>
      <h1
        className={twMerge(
          `text-5xl font-extrabold max-lg:text-center max-lg:text-3xl`,
          classNames({
            "text-4xl": lang === "es",
          }),
        )}
      >
        {dictionary.header.title}
      </h1>
      <p className="my-4 text-sm leading-relaxed max-lg:px-4 max-lg:text-center max-lg:text-xs">
        {useHtmlParser(dictionary.header.complementaryText)}
      </p>
      <div className="flex gap-4 max-lg:justify-center">
        <Button asChild>
          <Link href={`/${lang}/habitaciones`}>Explore Rooms</Link>
        </Button>
        <Button variant="outline" asChild>
          <ExternalLink href={CONSTANTS.site.contact.whatsapp_chat}>
            Contact Us
          </ExternalLink>
        </Button>
      </div>
    </div>
  );
}

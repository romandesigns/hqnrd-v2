"use client";

import { Button } from "@/components/ui";
import { BrandWrapper } from "@/components/ui/BrandWrapper";
import Link from "next/link";

export const DesktopNav = ({ lang }: { lang: string }) => {
  return (
    <BrandWrapper
      className="mx-auto flex max-w-7xl items-center justify-between p-2 max-md:flex-col"
      HTMLTag="nav"
    >
      <ul className="flex text-sm max-md:flex-col">
        <li>
          <Button size="default" variant="link" asChild>
            <Link href={`/${lang}`}>Home</Link>
          </Button>
        </li>
        <li>
          <Button size="default" variant="link" asChild>
            <Link href={`/${lang}/habitaciones`}>Rooms</Link>
          </Button>
        </li>
        <li className="px-4" />
        <li className="mr-2">
          <Button variant="default" size={"sm"} asChild>
            <Link href={`/${lang}/iniciar-session`}>Sign In</Link>
          </Button>
        </li>
        <li className="ml-2">
          <Button variant="outline" size={"sm"}>
            Sign Out
          </Button>
        </li>
      </ul>
    </BrandWrapper>
  );
};

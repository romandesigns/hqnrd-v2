"use client";
import { Button, ContactWidget, ModeToggle } from "@/components/ui";
import { RoomReservationInterface, SiteNavigationTypes } from "@/types";
import { clsx } from "@/utils/clsx";
import { useMobileNavigation } from "@/zustand/hooks";
import Link from "next/link";
import { Bookings } from "./Bookings";

export function NavigationMenu({
  lang,
  classNames,
  navStrings,
  reservations,
}: {
  lang: string;
  classNames?: string;
  navStrings: SiteNavigationTypes;
  reservations: RoomReservationInterface[];
}) {
  const { toggle } = useMobileNavigation();

  return (
    <ul
      className={clsx(
        "relative flex items-center text-sm max-lg:flex-col lg:gap-2",
        classNames,
      )}
    >
      <li className="w-full" onClick={() => toggle()}>
        <Button
          variant="ghost"
          className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
          asChild
        >
          <Link href={`/${lang}`}>{navStrings.navigation.home}</Link>
        </Button>
      </li>
      <li className="w-full" onClick={() => toggle()}>
        <Button
          variant="ghost"
          className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
          asChild
        >
          <Link href={`/${lang}/habitaciones`}>
            {navStrings.navigation.rooms}
          </Link>
        </Button>
      </li>
      <li className="w-full rounded-md max-lg:hidden">
        <Bookings reservations={reservations} lang={lang} />
      </li>
      <li className="mt-auto">
        <ContactWidget lang={lang} buttonVariant="ghost" />
      </li>
      <li className="w-full max-lg:mt-3">
        <ul className="mt-auto flex flex-col gap-4 lg:flex-row lg:items-center">
          <li className="w-full" onClick={() => toggle()}>
            <Button
              variant="default"
              className="w-full max-lg:h-10 lg:h-8"
              asChild
            >
              <Link href={`/${lang}/iniciar-session`}>
                {navStrings.navigation.signIn}
              </Link>
            </Button>
          </li>
          <li className="hidden lg:block">
            <ModeToggle navStrings={navStrings.themeMenu} />
          </li>
        </ul>
      </li>
    </ul>
  );
}

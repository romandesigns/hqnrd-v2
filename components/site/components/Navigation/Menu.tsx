"use client";
import { Button, ContactWidget, ModeToggle } from "@/components/ui";
import { useSiteMobileNavigation } from "@/hooks";
import { SiteNavigationTypes } from "@/types";
import { clsx } from "@/utils/clsx";
import Link from "next/link";

export function NavigationMenu({
  lang,
  classNames,
  navStrings,
}: {
  lang: string;
  classNames?: string;
  navStrings: SiteNavigationTypes;
}) {
  const { toggleNav } = useSiteMobileNavigation();
  return (
    <ul className={clsx("flex text-sm max-lg:flex-col", classNames)}>
      <li className="w-full" onClick={() => toggleNav()}>
        <Button
          variant="ghost"
          className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
          asChild
        >
          <Link href={`/${lang}`}>{navStrings.navigation.home}</Link>
        </Button>
      </li>
      <li className="w-full" onClick={() => toggleNav()}>
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
      <li className="lg:block lg:px-4" />
      <li className="mt-auto">
        <ContactWidget lang={lang} />
      </li>
      <li className="w-full max-lg:mt-3">
        <ul className="mt-auto flex flex-col gap-4 lg:flex-row">
          <li className="w-full" onClick={() => toggleNav()}>
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
          <li className="w-full" onClick={() => toggleNav()}>
            <Button
              asChild
              variant="ghost"
              className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
            >
              <Link href={`/${lang}/crear-session`}>
                {navStrings.navigation.signUp}
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

"use client";

import { SiGoogletranslate } from "@/components/icons";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CONSTANTS } from "@/constants";
import { i18n } from "@/i18n-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { redirectedPathName } from "../locale-switcher";

function languageSwitcherBtns(
  lang: string,
  pathName: string,
  buttonVariant: ButtonProps["variant"] = "ghost",
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size="icon">
          <SiGoogletranslate className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader className="py-6">
          <DialogTitle className="text-center">Select Language</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center gap-10">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathName(locale, pathName)}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={twMerge(
                  `flex aspect-[1] h-24 w-24 flex-col items-center justify-center gap-2 rounded-md`,
                  cn({
                    "border-blue-500 bg-blue-100": locale === lang,
                    "border-none": locale !== lang,
                  }),
                )}
              >
                <Image
                  src={`/assets/flags/${
                    locale === "es" ? "dominican-flag.svg" : "american-flag.svg"
                  }`}
                  alt={`${CONSTANTS.site.site_name} Flag for ${locale}`}
                  width={50}
                  height={50}
                />
                <span className="text-xs">
                  {locale === "es" ? "Spanish" : "English"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function LanugageSwitcher({
  lang,
  buttonVariant,
}: {
  lang: string;
  buttonVariant?: ButtonProps["variant"];
}) {
  const pathName = usePathname();
  return languageSwitcherBtns(lang, pathName, buttonVariant);
}

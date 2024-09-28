"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "@/i18n-config";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

export default function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <div className="flex">
      <p>Locale switcher:</p>
      <ul className="flex gap-4 pl-4">
        {i18n.locales.map((locale) => {
          return (
            <li
              key={locale}
              className={twMerge(
                `flex`,
                cn({
                  "text-blue-500": locale === lang,
                })
              )}
            >
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

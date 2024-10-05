import React from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navigation({ lang }: { lang: string }) {
  return (
    <div>
      <DesktopNav
        lang={lang}
        className="flex p-4 max-lg:max-w-[100vw] lg:static lg:inset-auto lg:p-2"
      />
    </div>
  );
}

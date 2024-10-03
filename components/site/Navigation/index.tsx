import React from "react";
import { DesktopNav } from "./DesktopNav";

export function Navigation({ lang }: { lang: string }) {
  return (
    <div>
      <DesktopNav lang={lang} />
    </div>
  );
}

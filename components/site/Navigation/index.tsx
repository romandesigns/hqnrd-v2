import React from "react";
import { DesktopNav } from "./DesktopNav";

export function Navigation({ lang }: { lang: string }) {
  return (
    <div>
      {/* <div className="max-lg:hidden">Desktop</div> */}
      <div className="lg:hidden">Mobile</div>
      <DesktopNav lang={lang} className="max-lg:hidden" />
    </div>
  );
}

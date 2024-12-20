"use client";

import { useMobileNavigation } from "@/zustand/hooks";
import { HiMenuAlt1 } from "../../icons";
import { Button } from "../button";

export function NavigationToggleBtn() {
  const { toggle } = useMobileNavigation();
  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-lg lg:hidden"
      onClick={() => toggle()}
    >
      <HiMenuAlt1 />
    </Button>
  );
}

"use client";

import { useSiteMobileNavigation } from "@/hooks";
import { HiMenuAlt1 } from "../../icons";
import { Button } from "../button";

export function NavigationToggleBtn() {
  const { toggleNav } = useSiteMobileNavigation();
  return (
    <Button
      size="icon"
      variant="outline"
      className="text-lg lg:hidden"
      onClick={() => toggleNav()}
    >
      <HiMenuAlt1 />
    </Button>
  );
}

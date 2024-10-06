"use client";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { HiMenuAlt1 } from "../icons";
import { Button } from "./button";

function useCounter() {
  return useStore(
    useShallow((store) => ({
      toggleNav: store.toggleNavigation,
    })),
  );
}

export function NavigationToggleBtn() {
  const { toggleNav } = useCounter();
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

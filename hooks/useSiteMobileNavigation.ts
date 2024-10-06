"use client";

import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

export function useSiteMobileNavigation() {
  return useStore(
    useShallow((store) => ({
      toggleNav: store.toggleNavigation,
      isOpen: store.isOpen,
    })),
  );
}

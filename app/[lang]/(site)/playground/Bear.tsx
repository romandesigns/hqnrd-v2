"use client";
import { useMobileNavigation } from "@/zustand/hooks";
// import { useCombinedStore } from "@/zustand/store";
import React from "react";

export function Bear() {
  // const store = useCombinedStore((state) => state);
  const store = useMobileNavigation();
  return (
    <div className="flex flex-col gap-2">
      <p>Bears: {store.isOpen}</p>
      <button className="outline" onClick={() => store.toggle()}>
        Increase population
      </button>

      <p>ComponentName</p>
    </div>
  );
}

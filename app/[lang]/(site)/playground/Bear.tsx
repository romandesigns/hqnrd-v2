"use client";
import { useMobileNavigation } from "@/zustand/hooks";
// import { useCombinedStore } from "@/zustand/store";
import React from "react";

export function Bear() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState<Date | undefined>(undefined);
  // const store = useCombinedStore((state) => state);
  const store = useMobileNavigation();

  return <div className="flex flex-col gap-3 md:flex-row md:gap-10">Hello</div>;
}

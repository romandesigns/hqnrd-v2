"use client";

import { type PropsWithChildren, useRef } from "react";
import type { StoreInterface, StoreType } from "./";
import { initializeStore, Provider } from "./";

export interface PreloadedStoreInterface
  extends Pick<StoreInterface, "lastUpdate"> {}

export default function StoreProvider({
  children,
  ...props
}: PropsWithChildren<PreloadedStoreInterface>) {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
}

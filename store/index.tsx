// store.ts
import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import { PreloadedStoreInterface } from "./StoreProvider";

// Store interface combining both navigation and counter logic
export interface StoreInterface {
  isOpen: boolean;
  toggleNavigation: () => void;
}

// Default initial state for the combined store
function getDefaultInitialState() {
  return {
    isOpen: false,
  } as const;
}

export type StoreType = ReturnType<typeof initializeStore>;
const storeContext = createContext<StoreType | null>(null);
export const Provider = storeContext.Provider;

// Hook to access the store
export function useStore<T>(selector: (state: StoreInterface) => T) {
  const store = useContext(storeContext);
  if (!store) throw new Error("Store is missing the provider");
  return useZustandStore(store, selector);
}

// Initialize store with the combined logic
export function initializeStore(preloadedState: PreloadedStoreInterface) {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    toggleNavigation: () => set((state) => ({ isOpen: !state.isOpen })),
  }));
}

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  mobileNavBarInitialState,
  reservationInitialState,
} from "./initialStates";
import {
  MobileNavBarPropTypes,
  ReservationPropTypes,
  ReservationTypes,
} from "./interface";

// Combined Interface
export interface CombinedStore
  extends MobileNavBarPropTypes,
    ReservationPropTypes {}

// Create Combined Store
export const useCombinedStore = create<CombinedStore>()(
  persist(
    devtools((set, get) => ({
      ...mobileNavBarInitialState,
      toggle: () =>
        set(
          (state) => ({ isOpen: !state.isOpen }),
          false,
          "toggleMobileNavigation",
        ),

      ...reservationInitialState,
      addReservation: (reservation: ReservationTypes) =>
        set((state) => {
          const reservations = [...state.reservations, reservation];
          console.log(reservations);
          return { reservations };
        }),
    })),
    {
      name: "combined-store", // Unique storage name for persistence
    },
  ),
);

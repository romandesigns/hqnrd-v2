import { RoomReservationInterface } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  mobileNavBarInitialState,
  notificationInitialState,
  reservationInitialState,
} from "./initialStates";
import {
  MobileNavBarPropTypes,
  NotificationPropTypes,
  ReservationPropTypes,
} from "./interface";

// Utils
import { calculateReservationFees } from "./reducers/utils/calculateReservationFees";
import { integrateReservationTimes } from "./reducers/utils/combineTimeWithTimeStamp";

// Combined Interface
export interface CombinedStore
  extends MobileNavBarPropTypes,
    ReservationPropTypes,
    NotificationPropTypes {}

// Create Combined Store
export const useCombinedStore = create<CombinedStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Handle mobile navigation
        ...mobileNavBarInitialState,
        toggle: () =>
          set(
            (state) => ({ isOpen: !state.isOpen }),
            false,
            "toggleMobileNavigation",
          ),

        // Handle reservations
        ...reservationInitialState,
        addReservation: (reservation: RoomReservationInterface) =>
          set((state) => {
            const computedReservation = calculateReservationFees(reservation);
            const reservations = [
              ...state.reservations,
              integrateReservationTimes(computedReservation),
            ];
            console.log(reservations);
            return { reservations };
          }),

        // Handle notifications
        ...notificationInitialState,
        notificationTrigger: (event: string) => {
          set(
            () => ({ notification: event as CombinedStore["notification"] }),
            false,
            "notificationTrigger",
          );

          setTimeout(() => {
            set(() => ({ notification: null }), false, "resetNotification");
          }, 1000); // Reset notification after 3 seconds
        },
      }),
      {
        name: "reservations-store", // Only persist reservation-related data
        partialize: (state) => ({
          reservations: state.reservations, // Only persist reservations
        }),
      },
    ),
  ),
);

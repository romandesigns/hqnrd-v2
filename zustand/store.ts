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
  ReservationTypes,
} from "./interface";

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
        addReservation: (reservation: ReservationTypes) =>
          set((state) => {
            const reservations = [...state.reservations, reservation];
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

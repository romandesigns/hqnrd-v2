import { useShallow } from "zustand/shallow";
import { useCombinedStore } from "../store";

// Reservations
export function useMobileNavigation() {
  return useCombinedStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      toggle: state.toggle,
    })),
  );
}

// Reservations
export function useReservation() {
  return useCombinedStore(
    useShallow((state) => ({
      reservations: state.reservations,
      addReservation: state.addReservation,
    })),
  );
}

import { Reservation } from "@/types";

export const navBarInitialState = {
  isOpen: false,
  lastUpdate: new Date().getTime(),
};

export const reservationInitialState = {
  reservations: [],
};

export const reservationState = {
  adultsCount: 0,
  infantsCount: 0,
  totalDays: 0,
  checkInTime: "",
  checkOutTime: "",
  discount: 0,
  totalPrice: 0,
  eligibleForDiscount: false,
};

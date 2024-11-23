import { RoomReservationInterface } from "@/types";
import moment from "moment";

export const calculateReservationFees = (
  reservation: RoomReservationInterface,
) => {
  // Calculate total days
  const checkIn = moment(reservation.checkInDate);
  const checkOut = moment(reservation.checkOutDate);
  const totalDays = checkOut.diff(checkIn, "days");
  reservation.totalGuests =
    Number(reservation.adults) + Number(reservation.infants);
  reservation.totalDays = totalDays;
  // Calculate total price
  const totalPrice = totalDays * reservation.pricePerNight;
  const origianlPrice = totalDays * reservation.pricePerNight;
  reservation.origianlPrice = totalPrice;
  reservation.totalPrice = totalPrice;
  // If total days is equal or greater than 5, subtract 5% discount from the total price
  if (totalDays >= 5) {
    reservation.discount = 5;
    reservation.totalPrice = totalPrice - totalPrice * 0.05;
    reservation.eligibleForDiscount = true;
  }
  // If total days is equal or greater than 15, subtract 8% discount from the total price
  if (totalDays >= 15) {
    reservation.discount = 8;
    reservation.totalPrice = totalPrice - totalPrice * 0.08;
    reservation.eligibleForDiscount = true;
  }
  return reservation;
};

export interface MobileNavBarPropTypes {
  isOpen: boolean;
  toggle: () => void;
}

export interface ReservationTypes {
  adults: number;
  infants: number;
  pricePerNight: number;
  unitNumber: number;
  checkIn: Date | null;
  checkOut: Date | null;
  message?: string;
  user: string;
  createdOn: Date;
}

export interface ReservationPropTypes {
  reservations: ReservationTypes[];
  addReservation: (reservation: ReservationTypes) => void;
}

export interface NotificationPropTypes {
  notification: "added reservation" | "deleted reservation" | null;
  notificationTrigger: (event: string) => void;
}

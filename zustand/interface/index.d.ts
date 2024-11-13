export interface MobileNavBarPropTypes {
  isOpen: boolean;
  toggle: () => void;
}

export interface ReservationTypes {
  adultsCount: number;
  infantsCount: number;
  checkIn: Date;
  checkOut: Date;
  message?: string;
}

export interface ReservationPropTypes {
  reservations: ReservationTypes[];
}

export interface NotificationPropTypes {
  notification: "added reservation" | "deleted reservation" | null;
  notificationTrigger: (event: string) => void;
}

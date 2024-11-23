import { RoomReservationInterface } from "@/types";
import moment from "moment";

export function timeWithDateConversion(data: RoomReservationInterface) {
  // Parse the check-in date and time
  const checkInDateTime = moment(data.checkInDate).set({
    hour: moment(data.checkInTime, "h:mm A").hour(),
    minute: moment(data.checkInTime, "h:mm A").minute(),
    second: 0,
    millisecond: 0,
  });

  // Parse the check-out date and time
  const checkOutDateTime = moment(data.checkOutDate).set({
    hour: moment(data.checkOutTime, "h:mm A").hour(),
    minute: moment(data.checkOutTime, "h:mm A").minute(),
    second: 0,
    millisecond: 0,
  });

  return {
    ...data,
    checkInDateTime: checkInDateTime.toISOString(),
    checkOutDateTime: checkOutDateTime.toISOString(),
  };
}

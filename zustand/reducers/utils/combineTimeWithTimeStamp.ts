import { toZonedTime } from "date-fns-tz";

/**
 * Combines the date and time in a reservation object and returns an updated object with integrated timestamps.
 * @param {Object} reservation - The reservation object containing dates and times.
 * @param {string} timeZone - The desired timezone (e.g., "America/New_York").
 * @returns {Object} - Updated reservation object with combined timestamps.
 */

export function integrateReservationTimes(
  reservation: any,
  timeZone: string = "America/New_York",
) {
  const combineDateAndTimeToTimestamp = (isoDate: Date, timeString: string) => {
    const date = toZonedTime(isoDate, timeZone); // Convert ISO date to the desired timezone
    const [time, meridiem] = timeString.split(" "); // Split time and AM/PM
    const [hours, minutes] = time.split(":"); // Split hours and minutes

    // Adjust hours based on AM/PM
    const adjustedHours =
      meridiem.toUpperCase() === "PM" && parseInt(hours, 10) !== 12
        ? parseInt(hours, 10) + 12
        : meridiem.toUpperCase() === "AM" && parseInt(hours, 10) === 12
          ? 0
          : parseInt(hours, 10);

    // Set the time
    date.setHours(adjustedHours, parseInt(minutes, 10), 0, 0);
    return date.toISOString(); // Return the full timestamp in ISO format
  };

  // Combine times into timestamps
  return {
    ...reservation,
    checkInDate: combineDateAndTimeToTimestamp(
      reservation.checkInDate,
      reservation.checkInTime,
    ),
    checkOutDate: combineDateAndTimeToTimestamp(
      reservation.checkOutDate,
      reservation.checkOutTime,
    ),
  };
}

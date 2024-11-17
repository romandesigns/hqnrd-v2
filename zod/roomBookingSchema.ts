import { z } from "zod";

// Define the Zod schema for the booking object
export const bookingSchema = z
  .object({
    adults: z.number().min(0),
    infants: z.number().min(0),
    pricePerNight: z.number().positive(),
    unitNumber: z.string(),
    checkInTime: z.string().nullable().optional(),
    checkInDate: z.string().nullable().optional(),
    checkOutDate: z.string().nullable().optional(),
    checkOutTime: z.string(),
    message: z.string().optional(),
    user: z.string(),
    createdOn: z.date(),
  })
  .refine(
    (data) => {
      // Custom validation logic
      return !(
        data.adults === 0 &&
        !data.checkInTime &&
        !data.checkInDate &&
        !data.checkOutDate
      );
    },
    {
      message:
        "Error: Booking cannot be created with 0 adults and undefined check-in/check-out dates and times.",
      path: ["adults", "checkInTime", "checkInDate", "checkOutDate"], // Path to the error
    },
  );

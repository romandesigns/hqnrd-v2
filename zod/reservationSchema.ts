import { z } from "zod";
import moment from "moment";

// Define the schema
const RoomReservationSchema = z.object({
  adults: z
    .number()
    .int()
    .min(1, "At least one adult is required")
    .max(10, "Maximum 10 adults allowed"),
  infants: z
    .number()
    .int()
    .min(0, "Infants cannot be negative")
    .max(5, "Maximum 5 infants allowed"),
  pricePerNight: z
    .number()
    .positive("Price per night must be a positive number"),
  unitNumber: z
    .number()
    .int()
    .positive("Unit number must be a positive integer"),
  checkIn: z
    .date()
    .nullable()
    .refine((date) => date && moment(date).isAfter(moment()), {
      message: "Check-in date must be in the future",
    }),
  checkOut: z
    .date()
    .nullable()
    .refine(
      (date, ctx) => {
        if (!date || !ctx.parent.checkIn) return true; // Allow null check-out or missing check-in
        return moment(date).isAfter(moment(ctx.parent.checkIn));
      },
      { message: "Check-out date must be after check-in date" },
    ),
  message: z
    .string()
    .max(500, "Message must be less than 500 characters")
    .optional(),
  user: z.string().nonempty("User name is required"),
  createdOn: z.date().refine((date) => moment(date).isValid(), "Invalid date"),
});

export default RoomReservationSchema;

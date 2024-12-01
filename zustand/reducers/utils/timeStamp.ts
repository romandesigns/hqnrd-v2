import { Locale } from "@/i18n-config";

export const dateTimeFormatter = {
  formattedTime: (isoTime: Date | undefined, locale: Locale = "en") =>
    new Date(isoTime!).toLocaleString(`${locale}-US`, {
      timeZone: "America/New_York", // Eastern Time Zone
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format
    }),
};

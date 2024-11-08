import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactHtmlParser from "react-html-parser";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLabel = (string: string) => {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replace(/-/g, " ");
};

export const htmlParser = (htmlString: string) => {
  return ReactHtmlParser(htmlString);
};

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getLastPathSegment(pathname) {
  if (!pathname) return "";
  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "";
}

export const formatRangeDate = (startDate, endDate) => {
  return `${format(new Date(startDate), "dd")}-${format(
    new Date(endDate),
    "dd"
  )} ${format(new Date(endDate), "MMMM yyyy")}`;
};

export const formatFullDate = (date) => {
  return format(new Date(date), "dd MMMM yyyy");
};

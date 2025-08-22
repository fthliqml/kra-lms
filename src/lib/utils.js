import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getLastPathSegment(pathname) {
  if (!pathname) return "";
  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "";
}

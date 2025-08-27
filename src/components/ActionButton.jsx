"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ActionButton({
  icon,
  tooltip,
  color = "bg-info",
  arrowFill = "fill-info",
  as = "button",
  href,
  ...props
}) {
  const trigger =
    as === "link" ? (
      <Link
        href={href ?? "#"}
        className={`p-2 rounded-md cursor-pointer ${color}`}
        {...props}
      >
        {icon}
      </Link>
    ) : (
      <button className={`p-2 rounded-md cursor-pointer ${color}`} {...props}>
        {icon}
      </button>
    );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent
        className={color}
        side="right"
        sideOffset={8}
        arrowClassName={`${color} ${arrowFill}`}
      >
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

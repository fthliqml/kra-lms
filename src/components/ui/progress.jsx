"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary relative h-3 w-full overflow-hidden rounded-full shadow-[inset_0_4px_8px_2px_#00000040] border-2 border-primary ",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-tetriary h-full w-full flex-1 transition-all rounded-r-lg shadow-[inset_0_4px_4px_0_#FFFFFF59]"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-5 shrink-0 rounded-full border-2 border-primary flex items-center justify-center transition-all",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

function ProgressRadioItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      {...props}
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-6 shrink-0 rounded-full border-2 border-primary flex items-center justify-center transition-all cursor-pointer",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-gradient-to-r from-primary to-[#2772BC] data-[state=checked]:border-primary",
        className
      )}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center text-white">
        <Check className="w-3 h-3" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem, ProgressRadioItem };

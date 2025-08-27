"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import React from "react";

export default function InfoGrid({
  items,
  colTemplate = "150px 1fr",
  className = "",
}) {
  const isSmUp = useMediaQuery("(min-width: 640px)");

  return (
    <div
      className={`grid gap-y-3 gap-x-0 text-gray-800 text-lg ${className}`}
      style={{ gridTemplateColumns: colTemplate }}
    >
      {items.map((item, i) =>
        isSmUp ? (
          <React.Fragment key={i}>
            <p className="font-semibold">
              {item.label} {!isSmUp && ":"}
            </p>
            <p>
              {isSmUp && <span className="mr-3">:</span>} {item.value}
            </p>
          </React.Fragment>
        ) : (
          <div key={i}>
            <p className="font-semibold">
              {item.label} {!isSmUp && ":"}
            </p>
            <p>
              {isSmUp && <span className="mr-3">:</span>} {item.value}
            </p>
          </div>
        )
      )}
    </div>
  );
}

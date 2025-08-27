import React from "react";

export default function InfoGrid({
  items,
  colTemplate = "150px 1fr",
  className = "",
}) {
  return (
    <div
      className={`grid gap-y-3 gap-x-0 text-gray-800 text-lg ${className}`}
      style={{ gridTemplateColumns: colTemplate }}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <p>{item.label}</p>
          <p>
            <span className="mr-3">:</span> {item.value}
          </p>
        </React.Fragment>
      ))}
    </div>
  );
}

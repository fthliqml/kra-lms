import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import React from "react";

const InfoDetailSurvey = ({ items }) => {
  const isSmUp = useMediaQuery("(min-width: 640px)");

  return (
    <div
      className={`grid gap-y-3 gap-x-0 text-gray-800 text-lg shadow-all p-5 rounded-lg mb-7 sm:mb-10`}
      style={{ gridTemplateColumns: isSmUp ? "280px 1fr" : "1fr" }}
    >
      {items.map((item, i) =>
        isSmUp ? (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2">
              <p className="font-semibold">
                {item.label} {!isSmUp && ":"}
              </p>
            </div>
            <p>
              {isSmUp && <span className="mr-3">:</span>} {item.value}
            </p>
          </React.Fragment>
        ) : (
          <div key={i}>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold">
                {item.label} {!isSmUp && ":"}
              </p>
            </div>
            <p>
              {isSmUp && <span className="mr-3">:</span>} {item.value}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default InfoDetailSurvey;

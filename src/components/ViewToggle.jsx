"use client";

import { useState } from "react";
import { Grid3X3, List } from "lucide-react";

export function ViewToggle() {
  const [activeView, setActiveView] = useState("grid");

  return (
    <div className="relative inline-flex bg-gradient-to-r from-[#123456] to-[#4863A0] p-1 rounded-full">
      {/* Sliding background indicator */}
      <div
        className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ease-out ${
          activeView === "list" ? "left-[48%]" : "left-1"
        }`}
      />

      {/* Grid Button */}
      <button
        onClick={() => setActiveView("grid")}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeView === "grid"
            ? "text-[#123456]"
            : "text-white hover:text-gray-200"
        }`}
      >
        <Grid3X3 size={18} />
        <span className="font-medium">Grid</span>
      </button>

      {/* List Button */}
      <button
        onClick={() => setActiveView("list")}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
          activeView === "list"
            ? "text-[#123456]"
            : "text-white hover:text-gray-200"
        }`}
      >
        <List size={18} />
        <span className="font-medium">List</span>
      </button>
    </div>
  );
}

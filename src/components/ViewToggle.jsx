"use client";

import { Grid3X3, List } from "lucide-react";

export function ViewToggle({ isExpanded, setIsExpanded }) {
  return (
    <div className="relative inline-flex bg-gradient-to-r from-[#123456] to-[#4863A0] p-1 rounded-full">
      {/* Sliding background indicator */}
      <div
        className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ease-out ${
          isExpanded ? "left-[48%]" : "left-1"
        }`}
      />

      {/* Grid Button */}
      <button
        onClick={() => {
          setIsExpanded(false);
        }}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
          !isExpanded ? "text-[#123456]" : "text-white hover:text-gray-200"
        }`}
      >
        <Grid3X3 size={18} />
        <span className="font-medium">Grid</span>
      </button>

      {/* List Button */}
      <button
        onClick={() => {
          setIsExpanded(true);
        }}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
          isExpanded ? "text-[#123456]" : "text-white hover:text-gray-200"
        }`}
      >
        <List size={18} />
        <span className="font-medium">List</span>
      </button>
    </div>
  );
}

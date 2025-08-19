"use client";

import CourseList from "@/components/courses/CourseList";
import FilterDropdown from "@/components/FilterDropdown";
import SearchInput from "@/components/SearchInput";
import { ViewToggle } from "@/components/ViewToggle";
import { useState } from "react";

export default function CourseView() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <ViewToggle setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
          <span className="text-primary">Showing 1-9 of 12 results</span>
        </div>

        <div className="flex gap-3 items-center">
          <SearchInput />
          <FilterDropdown />
        </div>
      </div>

      <CourseList isExpanded={isExpanded} />
    </>
  );
}

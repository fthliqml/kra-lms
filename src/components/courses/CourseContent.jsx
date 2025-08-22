"use client";

import { useState } from "react";
import CourseList from "@/components/courses/CourseList";
import FilterDropdown from "@/components/FilterDropdown";
import SearchInput from "@/components/SearchInput";
import { ViewToggle } from "@/components/ViewToggle";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export default function CourseContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 pt-9 pb-5 transition-all duration-500 ease-in-out",
        isOpen ? "pl-72" : "pl-36"
      )}
    >
      <h1 className="text-primary text-4xl font-bold mb-10">Courses</h1>

      <div className="flex justify-between items-center lg:flex-row flex-col">
        <div className="flex flex-wrap items-center gap-5">
          <ViewToggle setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
          <span className="text-primary">Showing 1-9 of 12 results</span>
        </div>

        <div className="flex  gap-3 items-center">
          <SearchInput className={"rounded-full"} />
          <FilterDropdown />
        </div>
      </div>

      <CourseList isExpanded={isExpanded} />
    </div>
  );
}

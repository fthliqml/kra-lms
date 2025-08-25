"use client";

import { useEffect, useState } from "react";
import CourseList from "@/components/courses/CourseList";
import FilterDropdown from "@/components/FilterDropdown";
import SearchInput from "@/components/SearchInput";
import { ViewToggle } from "@/components/ViewToggle";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export default function CourseContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen } = useSidebar();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => {
      if (!e.matches) {
        setIsExpanded(false);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={cn(
        "flex-1 pb-5 transition-all duration-500 ease-in-out",
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <h1 className="text-primary text-4xl font-bold mb-10">Courses</h1>

      <div className="block md:flex justify-between items-center md:flex-row flex-col space-y-3 md:space-y-0">
        <ViewToggle
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
          className={"hidden md:flex"}
        />

        <div className="flex gap-3 items-center">
          <SearchInput className={"rounded-full"} />
          <FilterDropdown content={["All", "Active", "Completed"]} />
        </div>
      </div>

      <CourseList isExpanded={isExpanded} />
    </div>
  );
}

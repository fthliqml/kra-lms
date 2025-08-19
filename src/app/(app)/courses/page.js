import CourseCard from "@/components/CourseCard";
import FilterDropdown from "@/components/FilterDropdown";
import SearchInput from "@/components/SearchInput";

import { ViewToggle } from "@/components/ViewToggle";

export default function page() {
  return (
    <>
      <h1 className="text-primary text-4xl font-bold mb-10">Courses</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <ViewToggle />
          <span className="text-primary">Showing 1-9 of 12 results</span>
        </div>

        <div className="flex gap-3 items-center">
          <SearchInput />
          <FilterDropdown />
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
}

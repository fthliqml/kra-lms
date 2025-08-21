import CourseCard from "@/components/courses/CourseCard";
import { cn } from "@/lib/utils";

export default function CourseList({ isExpanded }) {
  return (
    <div
      className={cn(
        "mt-10 grid gap-6",
        isExpanded
          ? "grid-cols-1 place-items-center"
          : "grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-start"
      )}
    >
      <CourseCard isExpanded={isExpanded} />
      <CourseCard isExpanded={isExpanded} />
      <CourseCard isExpanded={isExpanded} />
      <CourseCard isExpanded={isExpanded} />
      <CourseCard isExpanded={isExpanded} />
      <CourseCard isExpanded={isExpanded} />
    </div>
  );
}

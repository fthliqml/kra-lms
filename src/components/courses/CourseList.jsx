import CourseCard from "@/components/courses/CourseCard";
import { cn } from "@/lib/utils";

export default function CourseList({ isExpanded }) {
  return (
    <div
      className={cn(
        "mt-10 flex",
        isExpanded
          ? "flex-col justify-center gap-4"
          : "flex-row justify-start gap-6 flex-wrap"
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

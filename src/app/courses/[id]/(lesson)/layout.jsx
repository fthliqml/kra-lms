import CourseSidebar from "@/components/courses/CourseSidebar";
import CourseTopBar from "@/components/courses/CourseTopBar";

export default function LessonLayout({ children }) {
  return (
    <div className="flex pb-10">
      <CourseSidebar />
      <main className="flex-1 flex flex-col">
        <CourseTopBar />
        {children}
      </main>
    </div>
  );
}

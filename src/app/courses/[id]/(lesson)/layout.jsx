import CourseSidebar from "@/components/courses/CourseSidebar";
import CourseTopBar from "@/components/courses/CourseTopBar";

export default function LessonLayout({ children }) {
  return (
    <div className="flex">
      <CourseSidebar />
      <main className="flex-1 flex flex-col min-h-screen">
        <CourseTopBar />
        {children}
      </main>
    </div>
  );
}

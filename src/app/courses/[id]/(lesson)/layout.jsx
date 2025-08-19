import CourseSidebar from "@/components/courses/CourseSidebar";

export default function LessonLayout({ children, params }) {
  return (
    <div className="flex">
      <CourseSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

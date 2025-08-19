import CourseView from "@/components/courses/CourseView";
import { Sidebar } from "@/components/Sidebar";

export default function page() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 pt-10 pb-5 px-17">
        <h1 className="text-primary text-4xl font-bold mb-10">Courses</h1>
        <CourseView />
      </div>
    </main>
  );
}

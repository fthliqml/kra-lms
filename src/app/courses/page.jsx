import CourseContent from "@/components/courses/CourseContent";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function page() {
  return (
    <main className="flex">
      <SidebarProvider>
        <Sidebar />
        <CourseContent />
      </SidebarProvider>
    </main>
  );
}

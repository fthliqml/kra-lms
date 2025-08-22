import OverviewContent from "@/components/courses/OverviewContent";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function CourseOverviewPage() {
  return (
    <main className="flex">
      <SidebarProvider>
        <Sidebar />
        <OverviewContent />
      </SidebarProvider>
    </main>
  );
}

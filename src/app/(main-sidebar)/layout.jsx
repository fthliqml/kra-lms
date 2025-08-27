import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function layout({ children }) {
  return (
    <main className="flex pt-8 md:pt-12 px-6 md:px-15 md:pl-8">
      <SidebarProvider>
        <Sidebar />
        {children}
      </SidebarProvider>
    </main>
  );
}

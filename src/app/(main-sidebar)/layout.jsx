import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function layout({ children }) {
  return (
    <main className="flex pt-9 pr-15">
      <SidebarProvider>
        <Sidebar />
        {children}
      </SidebarProvider>
    </main>
  );
}

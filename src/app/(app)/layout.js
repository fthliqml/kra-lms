import { Sidebar } from "@/components/Sidebar";

export default function layout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 pt-16 px-20">{children}</div>
    </main>
  );
}

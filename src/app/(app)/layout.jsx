import { Sidebar } from "@/components/Sidebar";

export default function layout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 pt-10 pb-5 px-17">{children}</div>
    </main>
  );
}

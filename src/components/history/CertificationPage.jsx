"use client";

import { useSidebar } from "@/context/SidebarContext";
import SearchInput from "@/components/SearchInput";
import { DataTable } from "@/components/DataTable";
import { MyPagination } from "@/components/MyPagination";
import { cn } from "@/lib/utils";

const columns = [
  {
    key: "no",
    header: "No.",
    className: "text-center font-semibold w-[100px]",
    cellClassName: "text-center font-semibold",
  },
  {
    key: "competency",
    header: "Competency",
  },
  {
    key: "date",
    header: "Date",
    className: "text-center",
    cellClassName: "text-center",
  },
  {
    key: "status",
    header: "Status",
    className: "text-center",
    cellClassName: "text-center",
  },
];

export default function CertificationPage({ certifications }) {
  const { isOpen } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 pb-5 w-full transition-all duration-500 ease-in-out",
        isOpen ? "pl-72" : "pl-32"
      )}
    >
      <div className="w-full flex justify-between items-center mb-15">
        <h1 className="text-primary text-4xl font-bold">
          Certification History
        </h1>
        <div className="flex gap-2">
          <SearchInput />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-2">
        <DataTable columns={columns} rows={certifications} />
      </div>

      <div className="flex items-center justify-between w-full mt-5">
        <p className=" text-[#9e9e9e]">Showing 1-10 of 50 results</p>
        <MyPagination />
      </div>
    </div>
  );
}

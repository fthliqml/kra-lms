"use client";

import { cn, formatFullDate } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import SearchInput from "@/components/SearchInput";
import { DataTable } from "@/components/DataTable";
import { MyPagination } from "@/components/MyPagination";

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
    className: "py-3",
    cellClassName: "py-3",
  },
  {
    key: "date",
    header: "Date",
    className: "text-center",
    cellClassName: "text-center",
    render: (value) => <p>{formatFullDate(value)}</p>,
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
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <div className="w-full flex justify-between items-center mb-5 md:mb-10 flex-col md:flex-row gap-10 md:gap-5">
        <h1 className="text-primary text-4xl font-bold max-w-[500px] w-full md:w-[800px] text-center md:text-start">
          Certification History
        </h1>
        <div className="flex gap-2 w-full justify-between md:justify-end">
          <SearchInput className={"md:w-[300px] w-full"} />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-2">
        <DataTable columns={columns} rows={certifications} />
      </div>

      <div className="flex items-center justify-between w-full mt-5 flex-col md:flex-row gap-4 md:gap-">
        <p className=" text-[#9e9e9e] text-sm md:text-base">
          Showing 1-10 of 50 results
        </p>
        <MyPagination />
      </div>
    </div>
  );
}

"use client";

import FilterDropdown from "@/components/FilterDropdown";
import { MyPagination } from "@/components/MyPagination";
import SearchInput from "@/components/SearchInput";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/DataTable";
import Link from "next/link";

const columns = [
  {
    key: "no",
    header: "No.",
    className: "text-center",
    cellClassName: "text-center",
  },
  { key: "trainingName", header: "Training", className: "w-[200px]" },
  { key: "groupComp", header: "Group Comp" },
  { key: "date", header: "Date" },
  { key: "instructor", header: "Instructor", className: "w-[200px]" },
  {
    key: "status",
    header: "Status",
    className: "text-center",
    cellClassName: "text-center",
  },
  {
    key: "certificate",
    header: "Certificate",
    render: (value) => (
      <Link href={"#"} className="underline text-blue-800 cursor-pointer">
        {value}
      </Link>
    ),
  },
];

export default function TrainingPage({ histories }) {
  const { isOpen } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 pb-5 w-full transition-all duration-500 ease-in-out",
        isOpen ? "pl-72" : "pl-36"
      )}
    >
      <div className="w-full flex justify-between items-center mb-15">
        <h1 className="text-primary text-4xl font-bold">Training History</h1>
        <div className="flex gap-2">
          <FilterDropdown content={["All", "Inhouse", "Outhouse", "K-Learn"]} />
          <SearchInput />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-3">
        <DataTable columns={columns} rows={histories} />
      </div>

      <div className="flex items-center justify-between w-full mt-5">
        <p className=" text-[#9e9e9e]">Showing 1-10 of 50 results</p>
        <MyPagination />
      </div>
    </div>
  );
}

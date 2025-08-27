"use client";

import Link from "next/link";
import { cn, formatRangeDate } from "@/lib/utils";
import FilterDropdown from "@/components/FilterDropdown";
import { MyPagination } from "@/components/MyPagination";
import SearchInput from "@/components/SearchInput";
import { useSidebar } from "@/context/SidebarContext";
import { DataTable } from "@/components/DataTable";

const columns = [
  {
    key: "no",
    header: "No.",
    className: "text-center font-semibold",
    cellClassName: "text-center font-semibold",
  },
  { key: "trainingName", header: "Training", className: "w-[200px]" },
  {
    key: "groupComp",
    header: "Group Comp",
    className: "text-center",
    cellClassName: "text-center",
  },
  {
    key: "date",
    header: "Date",
    className: "text-center",
    cellClassName: "text-center",
    render: (_, row) => <p>{formatRangeDate(row.startDate, row.endDate)}</p>,
  },
  {
    key: "instructor",
    header: "Instructor",
    className: "w-[200px] text-center",
  },
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
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <div className="w-full flex justify-between items-center mb-5 md:mb-15 flex-col md:flex-row gap-5">
        <h1 className="text-primary text-4xl font-bold">Training History</h1>
        <div className="flex gap-2">
          <FilterDropdown
            content={["All", "Inhouse", "Outhouse", "K-Learn"]}
            className={"order-2 md:order-1"}
          />
          <SearchInput className={"order-1 md:order-2"} />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-2">
        <DataTable columns={columns} rows={histories} />
      </div>

      <div className="flex items-center justify-between w-full mt-5 flex-col md:flex-row gap-4 md:gap-0">
        <p className=" text-[#9e9e9e] text-sm md:text-base">
          Showing 1-10 of 50 results
        </p>
        <MyPagination />
      </div>
    </div>
  );
}

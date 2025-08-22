"use client";

import FilterDropdown from "@/components/FilterDropdown";
import { MyPagination } from "@/components/MyPagination";
import SearchInput from "@/components/SearchInput";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

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
          <FilterDropdown />
          <SearchInput />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={"text-center"}>No.</TableHead>
              <TableHead className="w-[200px]">Training</TableHead>
              <TableHead>Group Comp</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[200px]">Instructor</TableHead>
              <TableHead className={"text-center"}>Status</TableHead>
              <TableHead>Certificate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {histories.map((history) => (
              <TableRow
                key={history.no}
                className={
                  "odd:bg-[#EDEDED] odd:hover:bg-[#EDEDED] even:bg-white"
                }
              >
                <TableCell className="font-medium text-center">
                  {history.no}
                </TableCell>
                <TableCell>{history.trainingName}</TableCell>
                <TableCell>{history.groupComp}</TableCell>
                <TableCell>{history.date}</TableCell>
                <TableCell>{history.instructor}</TableCell>
                <TableCell className={"text-center"}>
                  {history.status}
                </TableCell>
                <TableCell className={"underline text-blue-800 cursor-pointer"}>
                  {history.certificate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between w-full mt-5">
        <p className=" text-[#9e9e9e]">Showing 1-10 of 50 results</p>
        <MyPagination />
      </div>
    </div>
  );
}

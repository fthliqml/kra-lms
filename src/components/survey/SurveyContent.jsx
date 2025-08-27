"use client";

import React from "react";
import { ClipboardCheck, Eye } from "lucide-react";

import { cn, formatRangeDate } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import FilterDropdown from "@/components/FilterDropdown";
import { MyPagination } from "@/components/MyPagination";
import SearchInput from "@/components/SearchInput";
import { DataTable } from "@/components/DataTable";
import { ActionButton } from "@/components/ActionButton";

export default function SurveyContent({ trainings, params }) {
  const { isOpen } = useSidebar();

  const { surveyId } = React.use(params);

  const columns = [
    {
      key: "id",
      header: "No.",
      className: "text-center font-semibold",
      cellClassName: "text-center font-semibold",
    },
    { key: "trainingName", header: "Training Name", className: "w-[200px]" },
    {
      key: "date",
      header: "Date",
      className: "text-center",
      cellClassName: "text-center",
      render: (_, row) => <p>{formatRangeDate(row.startDate, row.endDate)}</p>,
    },
    {
      key: "status",
      header: "Status",
      className: "text-center",
      cellClassName: "text-center",
    },
    {
      key: "action",
      header: "Action",
      cellClassName: "flex items-center justify-center",
      className: "text-center w-[150px]",
      render: (_, row) => {
        return row.status === "Completed" ? (
          <ActionButton
            as="link"
            href={`${surveyId}/detail/${row.id}`}
            icon={<Eye className="size-5 stroke-white" />}
            tooltip="Detail"
            color="bg-info"
            arrowFill="fill-info"
          />
        ) : (
          <ActionButton
            as="link"
            href={`${surveyId}/detail/${row.id}`}
            icon={<ClipboardCheck className="size-5 stroke-white" />}
            tooltip="Take Survey"
            color="bg-secondary"
            arrowFill="fill-secondary"
          />
        );
      },
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 pb-5 w-full transition-all duration-500 ease-in-out",
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <div className="w-full flex justify-between items-center mb-5 md:mb-10 flex-col md:flex-row gap-10 md:gap-5">
        <h1 className="text-primary text-4xl font-bold w-[300px] text-center md:text-start">
          Survey {surveyId}
        </h1>
        <div className="flex gap-2 w-full justify-between md:justify-end">
          <FilterDropdown
            content={["All", "Inhouse", "Outhouse", "K-Learn"]}
            className={"order-2 md:order-1"}
          />
          <SearchInput
            className={"order-1 md:order-2 md:w-[200px] max-w-[300px]"}
          />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-all p-2">
        <DataTable columns={columns} rows={trainings} />
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

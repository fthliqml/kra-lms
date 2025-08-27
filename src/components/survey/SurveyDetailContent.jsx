"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import { cn, formatRangeDate } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarContext";
import InfoGrid from "@/components/InfoGrid";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";

export default function SurveyFillContent({ data, params }) {
  const { isOpen } = useSidebar();

  const { surveyId } = React.use(params);

  const formData = [
    { label: "Nama Training", value: data.trainingName },
    { label: "Nama Instruktur", value: data.instructor },
    {
      label: "Tanggal Pelaksanaan",
      value: formatRangeDate(data.date.startDate, data.date.endDate),
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 pb-5 w-full transition-all duration-500 ease-in-out",
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <div className="w-full flex justify-between items-center mb-5 md:mb-15 flex-col md:flex-row gap-5">
        <h1 className="text-primary text-4xl font-bold">Survey {surveyId}</h1>
      </div>

      <InfoGrid
        items={formData}
        colTemplate="220px 1fr"
        className="shadow-all p-5 rounded mb-10"
      />

      <div className="px-20 py-10 shadow-all">
        {data.questions.map((item, i) => (
          <QuestionCard
            key={i + 1}
            number={i + 1}
            question={item.question}
            type={item.type}
            options={item.options}
          />
        ))}

        <div className="w-full text-right">
          <Button variant="primary" size={"xl"}>
            Submit <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

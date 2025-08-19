"use client";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CourseTopBar() {
  const router = useRouter();

  return (
    <div className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-lg fixed top-0 w-full">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">
          Master JavaScript From Beginner to Advanced
        </h1>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:bg-gray-200 p-2 cursor-pointer"
        onClick={() => {
          router.push(`/courses`);
        }}
      >
        <ArrowLeft className="size-5" />
        Kembali
      </Button>
    </div>
  );
}

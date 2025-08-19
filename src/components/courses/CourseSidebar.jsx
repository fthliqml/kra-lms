"use client";

import { useState } from "react";
import { Logs, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CourseSidebar({ className }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedModule, setSelectedModule] = useState("");

  const modules = [
    { id: "pretest", label: "Pretest" },
    { id: "learning", label: "Learning Module" },
    { id: "posttest", label: "Post test" },
    { id: "result", label: "Result" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("flex h-screen relative shadow-all", className)}>
      {!isOpen && (
        <Button
          onClick={toggleSidebar}
          className="fixed rounded-l-none top-25 left-0 z-50 opacity-20 bg-primary hover:opacity-100 text-white shadow-lg rounded-r-full"
          size="xl"
        >
          <Logs className="size-6" />
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 ease-in-out relative",
          isOpen ? "w-80" : "w-0 overflow-hidden"
        )}
      >
        {/* Close button in sidebar header */}
        {isOpen && (
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="text-gray-600 hover:bg-gray-100 p-2 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="p-6">
          <h2 className="text-xl font-semibold text-primary mb-6">
            Course Content
          </h2>

          {/* Progress Section */}
          <div className="mb-8">
            <div className="bg-primary text-white px-4 py-3 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm">50%</span>
              </div>
              <Progress value={50} />
            </div>
          </div>

          {/* Course Modules */}
          <div className="space-y-4">
            <RadioGroup
              value={selectedModule}
              onValueChange={setSelectedModule}
            >
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="flex items-center space-x-3 py-2 border-b border-gray-600"
                >
                  <Label
                    htmlFor={module.id}
                    className="text-gray-700 font-medium cursor-pointer flex-1"
                  >
                    {module.label}
                  </Label>
                  <RadioGroupItem
                    value={module.id}
                    id={module.id}
                    className="border-gray-300"
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Logs, X } from "lucide-react";

import { cn, getLastPathSegment } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CourseSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const lastSegment = getLastPathSegment(pathname);

  const modules = [
    { href: "pre-test", label: "Pretest" },
    { href: "learning-module", label: "Learning Module" },
    { href: "post-test", label: "Post test" },
    { href: "result", label: "Result" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={toggleSidebar}
          className="fixed rounded-l-none top-25 left-0 z-50 opacity-20 bg-primary hover:opacity-100 text-white shadow-lg rounded-r-full"
          size="xl"
        >
          <Logs className="size-6" />
        </Button>
      )}

      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "w-80" : "w-0"
        )}
      >
        {/* Sidebar */}
        <div
          className={cn(
            "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-40 overflow-y-auto shadow-all",
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
                <X className="size-5" />
              </Button>
            </div>
          )}

          <div className="p-6 flex flex-col gap-10">
            <div>
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
              <RadioGroup value={lastSegment}>
                {modules.map((module) => (
                  <Link
                    href={module.href}
                    key={module.href}
                    className="flex items-center space-x-3 py-2 border-b border-gray-600"
                  >
                    <Label
                      htmlFor={module.href}
                      className={cn(
                        "text-gray-700 font-medium cursor-pointer flex-1",
                        module.href == lastSegment &&
                          "text-primary font-semibold translate-x-2"
                      )}
                    >
                      {module.label}
                    </Label>
                    <RadioGroupItem
                      value={module.href}
                      id={module.href}
                      className="border-gray-300"
                    />
                  </Link>
                ))}
              </RadioGroup>
            </div>

            <Button
              variant={"primary"}
              className={"rounded-full"}
              onClick={() => router.push("/courses")}
            >
              <ArrowLeft />
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

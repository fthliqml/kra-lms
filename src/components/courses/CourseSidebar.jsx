"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Logs, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProgressRadioItem, RadioGroup } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CourseSidebar({ course = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  const [menus, setMenus] = useState([
    { href: `/courses/${course.id}/pre-test`, label: "Pretest", done: true },
    ...course.modules.map((mod) => ({
      label: mod.title,
      done: false,
      submenu: [
        {
          href: `/courses/${course.id}/modules/${mod.id}/document`,
          label: "Document",
          done: false,
        },
        {
          href: `/courses/${course.id}/modules/${mod.id}/video`,
          label: "Video",
          done: false,
        },
      ],
    })),
    ,
    {
      href: `/courses/${course.id}/post-test`,
      label: "Post test",
      done: false,
    },
    { href: `/courses/${course.id}/resume`, label: "Result", done: false },
  ]);

  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={toggleSidebar}
              className="fixed rounded-l-none top-25 left-0 z-50 opacity-20 bg-primary hover:opacity-100 text-white shadow-lg rounded-r-full"
              size="xl"
            >
              <Logs className="size-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            arrowClassName={"bg-primary fill-primary"}
            sideOffset={5}
          >
            <p>Menu Pembelajaran</p>
          </TooltipContent>
        </Tooltip>
      )}

      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "md:w-80" : "w-0"
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
              <RadioGroup>
                {menus.map((menu) => (
                  <div
                    key={menu.label}
                    className={cn(
                      "flex flex-col gap-2",
                      !menu.submenu && "border-b border-gray-300"
                    )}
                  >
                    {/* Parent Module */}
                    <Accordion type="single" collapsible className="w-full">
                      {menu.submenu ? (
                        <AccordionItem value={menu.label}>
                          <AccordionTrigger>
                            <div className="flex items-center justify-between py-2">
                              <p
                                className={cn(
                                  "text-gray-700 font-medium cursor-pointer",
                                  menu.done && "text-primary font-semibold"
                                )}
                              >
                                {menu.label}
                              </p>
                            </div>
                          </AccordionTrigger>

                          {menu.submenu && (
                            <AccordionContent className={"pb-0"}>
                              <div className="pl-4 space-y-2 border-l border-gray-300">
                                {menu.submenu.map((sub) => (
                                  <div
                                    key={sub.href}
                                    className="flex items-center justify-between py-2"
                                  >
                                    <Link href={sub.href} className="flex-1">
                                      <Label
                                        htmlFor={sub.href}
                                        className={cn(
                                          "text-gray-600 cursor-pointer hover:underline",
                                          sub.done &&
                                            "text-primary font-semibold",
                                          pathname === sub.href &&
                                            "font-bold translate-x-2"
                                        )}
                                      >
                                        {sub.label}
                                      </Label>
                                    </Link>
                                    <ProgressRadioItem
                                      id={sub.href}
                                      value={sub.href}
                                      checked={sub.done}
                                      readOnly
                                      className="border-gray-300"
                                    />
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          )}
                        </AccordionItem>
                      ) : (
                        <div className="flex items-center justify-between py-2 pb-4">
                          <Link href={menu.href} className="flex-1">
                            <Label
                              htmlFor={menu.href}
                              className={cn(
                                "text-gray-700 font-medium cursor-pointer",
                                menu.done && "text-primary font-semibold",
                                pathname === menu.href &&
                                  "font-bold translate-x-2"
                              )}
                            >
                              {menu.label}
                            </Label>
                          </Link>

                          {!menu.submenu && (
                            <ProgressRadioItem
                              id={menu.href}
                              value={menu.href}
                              checked={menu.done}
                              readOnly
                              className="border-gray-300"
                            />
                          )}
                        </div>
                      )}
                    </Accordion>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button
              variant={"primary"}
              className={"rounded-full"}
              onClick={() => router.push("/courses")}
            >
              <ArrowLeft />
              Halaman Utama
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay (mobile only) */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useSidebar } from "@/context/SidebarContext";
import CalendarView from "@/components/CalendarView";
import CourseCard from "@/components/courses/CourseCard";
import EventCard from "@/components/EventCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DashboardContent() {
  const { isOpen } = useSidebar();
  const isMdUp = useMediaQuery("(min-width: 768px)");
  const isXlUp = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "xl:flex gap-15 transition-all duration-500 ease-in-out w-full space-y-10 pb-6 xl:pb-0",
        isOpen ? "md:pl-72" : "md:pl-32"
      )}
    >
      <div className="flex flex-col gap-10 xl:gap-20 flex-[1.5]">
        <div className="flex flex-col gap-7">
          <h1 className="text-primary text-4xl font-bold">Home</h1>
          <div className="relative shadow-all mt-5 w-full bg-gradient-to-r from-primary to-tetriary text-white px-6 py-6 rounded-[25px] overflow-visible">
            <div className="relative flex items-start">
              <div className="z-10 max-w-[60%]">
                <span>Hi, Surya</span>
                <h4 className="text-xl font-bold mb-8">Welcome Back!</h4>
                <p className="text-sm sm:text-base">
                  You’ve completed 2 courses this month. Keep it up!
                </p>
              </div>
            </div>
            <div className="relative flex-1">
              <Image
                src="/images/female-reading.png"
                alt="image"
                className="absolute right-0 -translate-y-45 translate-x-10 sm:translate-x-0 lg:-translate-y-50 h-auto w-auto"
                width={150}
                height={150}
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-primary text-2xl font-bold">My Courses</h2>
            <button className="text-gray-800 cursor-pointer">
              View More <ArrowRight className="inline w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <CourseCard isExpanded={isMdUp} />
            <CourseCard isExpanded={isMdUp} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-13 w-full flex-1 relative">
        {!isXlUp && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="fixed top-20 right-0 bg-primary rounded-none rounded-l-full opacity-50 hover:opacity-100 py-3 pr-3 pl-5 cursor-pointer">
                <CalendarClock className="size-7 text-white" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>My Schedule</DialogTitle>
                <DialogDescription>
                  Click on date to see the details.
                </DialogDescription>
              </DialogHeader>
              <CalendarView className="bg-[#F6F6F6] shadow-all h-fit" />
            </DialogContent>
          </Dialog>
        )}

        <CalendarView className="bg-[#F6F6F6] shadow-all h-fit hidden xl:block" />

        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-2xl font-bold">Schedule</h2>
          <div className="flex flex-col gap-3">
            <EventCard
              date={Date.now()}
              title={"Certification D"}
              location={"Simulator Room, EDC"}
              type={"certification"}
            />
            <EventCard
              date={Date.now()}
              title={"Training B"}
              location={"Simulator Room, EDC"}
              type={"training"}
            />
            <EventCard
              date={Date.now()}
              title={"Training C"}
              location={"Simulator Room, EDC"}
              type={"training"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

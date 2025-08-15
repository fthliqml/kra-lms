"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CalendarView({ className, ...props }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample events data
  const eventDates = {
    "2025-08-14": "yellow", // Single event
    "2025-08-19": "blue", // Multiple events
    "2025-08-20": "blue",
    "2025-08-21": "blue",
    "2025-08-22": "blue",
    "2025-08-23": "blue",
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonth.getDate() - i,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, prevMonth.getDate() - i),
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: new Date(year, month, day),
      });
    }

    // Add next month's days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const isSelected = (date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const getEventColor = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return eventDates[`${year}-${month}-${day}`];
  };
  const days = getDaysInMonth(currentDate);

  return (
    <div className={cn("p-6 bg-gray-50 rounded-2xl w-full mx-auto", className)}>
      {/* Header */}
      <div className="flex justify-center items-center mb-6 relative">
        <button
          onClick={() => navigateMonth(-1)}
          className="absolute left-0 p-2 hover:bg-gray-200 rounded-md transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="bg-[#4F6FBD] text-white px-6 py-2 rounded-full">
          <span className="text-lg font-medium">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
        </div>

        <button
          onClick={() => navigateMonth(1)}
          className="absolute right-0 p-2 hover:bg-gray-200 rounded-md transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-4">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-gray-500 text-sm font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 place-items-center">
        {days.map((day, index) => {
          const eventColor = getEventColor(day.fullDate);

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(day.fullDate)}
              className={cn(
                "relative h-10 w-10 text-sm font-normal rounded-md transition-colors hover:bg-gray-200 flex justify-center items-center",
                !day.isCurrentMonth && "text-gray-400",
                isToday(day.fullDate) &&
                  "bg-[#4F6FBD] text-white hover:bg-[#4F6FBD] rounded-full"
              )}
            >
              {day.date}
              {eventColor && (
                <div
                  className={cn(
                    "absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full",
                    eventColor === "blue" ? "bg-blue-400" : "bg-yellow-400"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

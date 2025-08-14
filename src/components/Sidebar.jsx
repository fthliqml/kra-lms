"use client";

import { useState } from "react";
import {
  Home,
  BookText,
  History,
  FileText,
  Goal,
  Menu,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

const menuItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookText,
    href: "/courses",
  },
  {
    id: "history",
    label: "History",
    icon: History,
    href: "/history",
    submenu: [
      { label: "Recent Activity", href: "/history/recent" },
      { label: "All History", href: "/history/all" },
      { label: "Archived", href: "/history/archived" },
    ],
  },
  {
    id: "survey",
    label: "Survey",
    icon: FileText,
    href: "/survey",
    submenu: [
      { label: "Create Survey", href: "/survey/create" },
      { label: "My Surveys", href: "/survey/my" },
      { label: "Results", href: "/survey/results" },
    ],
  },
  {
    id: "development",
    label: "Development",
    icon: Goal,
    href: "/development",
  },
];

export function Sidebar({ className, onToggle }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("home");
  const [expandedMenus, setExpandedMenus] = useState([]);

  const toggleSubmenu = (itemId) => {
    setExpandedMenus((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className={cn("relative flex", className)}>
      <div className="fixed top-4 left-4 z-50 flex items-center gap-7">
        {/* Menu Toggle Button */}
        <button
          onClick={handleToggle}
          className="p-2 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
        >
          <Menu className="w-5 h-5 text-primary" />
        </button>

        {/* K-LEARN Logo */}
        <h1
          className={cn(
            "text-4xl font-bold transform transition-all duration-500",
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          )}
        >
          <span className="bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text">
            K
          </span>
          <span className="text-primary">-</span>
          <span className="bg-gradient-to-r from-primary to-tetriary text-transparent bg-clip-text">
            LEARN
          </span>
        </h1>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "relative left-0 z-40 rounded-tr-[80px] transition-all duration-500 ease-in-out shrink-0",
          "bg-gradient-to-b from-primary to-secondary",
          isOpen
            ? "w-64 h-[85vh] top-[15vh]"
            : "w-25 h-80 top-[15vh] rounded-br-[80px]"
        )}
      >
        <div
          className={cn(
            "flex flex-col h-full p-4 pr-[24px] pl-[21px]",
            !isOpen && "pl-[10px]"
          )}
        >
          {/* Navigation Items */}
          <nav
            className={cn(
              "flex-1 space-y-2 transition-all duration-1000 ease-out",
              isOpen ? "mt-[11px]" : "mt-4 space-y-3"
            )}
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isExpanded = expandedMenus.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="transition-all duration-1000 ease-out"
                >
                  {/* Main Menu Item */}
                  <button
                    onClick={() => {
                      handleItemClick(item.id);
                      if (hasSubmenu && isOpen) {
                        toggleSubmenu(item.id);
                      }
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300",
                      "text-white hover:bg-white/10",
                      isActive && "bg-white text-primary hover:bg-white",
                      item.id === "home" && "rounded-tr-[50px]",
                      !isOpen && "justify-center px-2 py-2 rounded-full"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-colors duration-300",
                        isActive ? "text-primary" : "text-white"
                      )}
                    />
                    <div
                      className={cn(
                        "flex items-center justify-between flex-1 transition-all duration-300 overflow-hidden whitespace-nowrap",
                        isOpen
                          ? "opacity-100 max-w-full ml-0"
                          : "opacity-0 max-w-0 -ml-3"
                      )}
                    >
                      <span className="font-medium">{item.label}</span>
                      {hasSubmenu && (
                        <div className="transition-transform duration-500 ease-out">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Submenu */}
                  {hasSubmenu && isOpen && (
                    <div
                      className={cn(
                        "ml-4 overflow-hidden transition-all ease-out",
                        isExpanded
                          ? "max-h-96 opacity-100 mt-2 duration-1500"
                          : "max-h-0 opacity-0 mt-0 duration-700"
                      )}
                    >
                      <div
                        className={cn(
                          "space-y-1 transition-all ease-out transform",
                          isExpanded
                            ? "translate-y-0 opacity-100 duration-1000"
                            : "-translate-y-2 opacity-0 duration-500"
                        )}
                      >
                        {item.submenu?.map((subItem, index) => (
                          <button
                            key={index}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md",
                              "transition-all ease-out transform",
                              isExpanded
                                ? "translate-x-0 opacity-100 duration-500"
                                : "-translate-x-4 opacity-0 duration-300"
                            )}
                            style={{
                              transitionDelay: isExpanded
                                ? `${index * 200}ms`
                                : "0ms",
                            }}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

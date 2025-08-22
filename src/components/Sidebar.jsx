"use client";

import { useState } from "react";
import { Home, BookText, History, FileText, Goal, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { useSidebar } from "@/context/SidebarContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SidebarMainMenu from "@/components/SidebarMainMenu";

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
      { label: "Training History", href: "/history/training" },
      { label: "Certification History", href: "/history/certification" },
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
  const { isOpen, setIsOpen, toggleSidebar } = useSidebar();
  const [expandedMenus, setExpandedMenus] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const firstSegment = "/" + (pathname.split("/")[1] || "");

  const toggleSubmenu = (itemId) => {
    setExpandedMenus((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleToggle = () => {
    toggleSidebar();
    onToggle?.(!isOpen);
  };

  const handleItemClick = (item) => {
    if (!item.submenu) {
      router.push(item.href);
    }
  };

  const handleSubItemClick = (submenu) => {
    router.push(submenu.href);
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
          "fixed left-0 z-40 rounded-tr-[80px] transition-all duration-500 ease-in-out",
          "bg-gradient-to-b from-primary to-secondary",
          isOpen
            ? "w-64 h-[85vh] top-[15vh]"
            : "w-23 h-80 top-[15vh] rounded-br-[60px] rounded-tr-[60px]"
        )}
      >
        <div
          className={cn(
            "flex flex-col h-full p-4 pr-[24px] pl-[21px]",
            !isOpen && "pl-[10px] pr-[30px]"
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
              const isActive = !item.submenu && firstSegment === item.href;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isExpanded = expandedMenus.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="transition-all duration-1000 ease-out"
                >
                  {isOpen ? (
                    <SidebarMainMenu
                      item={item}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      isActive={isActive}
                      isExpanded={isExpanded}
                      hasSubmenu={hasSubmenu}
                      handleItemClick={handleItemClick}
                      toggleSubmenu={toggleSubmenu}
                      Icon={Icon}
                    />
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <SidebarMainMenu
                            item={item}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            isActive={isActive}
                            isExpanded={isExpanded}
                            hasSubmenu={hasSubmenu}
                            handleItemClick={handleItemClick}
                            toggleSubmenu={toggleSubmenu}
                            Icon={Icon}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}

                  {/* Submenu */}
                  {hasSubmenu && isOpen && (
                    <div
                      className={cn(
                        "ml-4 overflow-hidden transition-all ease-out",
                        isExpanded
                          ? "max-h-96 opacity-100 mt-2 duration-2000"
                          : "max-h-0 opacity-0 mt-0 duration-500"
                      )}
                    >
                      <div
                        className={cn(
                          "space-y-1 transition-all ease-out transform",
                          isExpanded
                            ? "translate-y-0 opacity-100 duration-500"
                            : "-translate-y-2 opacity-0 duration-500"
                        )}
                      >
                        {item.submenu?.map((subItem, index) => (
                          <button
                            onClick={() => {
                              handleSubItemClick(subItem);
                            }}
                            key={index}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md",
                              "transition-all ease-out transform cursor-pointer",
                              pathname == subItem.href &&
                                "bg-white text-primary hover:text-primary hover:bg-white",
                              isExpanded
                                ? "translate-x-0 opacity-100 duration-500"
                                : "-translate-x-4 opacity-0 duration-300"
                            )}
                            style={{
                              transitionDelay: isExpanded
                                ? `${index * 50}ms`
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

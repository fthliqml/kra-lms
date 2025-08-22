import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export default function SidebarMainMenu({
  item,
  isOpen,
  setIsOpen,
  isActive,
  isExpanded,
  hasSubmenu,
  handleItemClick,
  toggleSubmenu,
  Icon,
}) {
  return (
    <button
      onClick={() => {
        handleItemClick(item);
        if (hasSubmenu) {
          if (!isOpen && isActive) return;
          toggleSubmenu(item.id);
          setIsOpen(true);
        }
      }}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300",
        "text-white hover:bg-white/10 cursor-pointer",
        isActive && "bg-white text-primary hover:bg-white",
        item.id === "home" && "rounded-tr-[50px]",
        !isOpen && "justify-center px-2 py-2 rounded-full"
      )}
    >
      <Icon
        className={cn(
          "w-5 h-5 flex-shrink-0 transition-colors duration-300",
          isActive ? "text-primary" : "text-white",
          isOpen ? "lg:w-6 lg:h-6" : "sm:w-6 sm:h-6"
        )}
      />

      <div
        className={cn(
          "flex items-center justify-between flex-1 transition-all duration-300 overflow-hidden whitespace-nowrap",
          isOpen ? "opacity-100 max-w-full ml-0" : "opacity-0 max-w-0 -ml-3"
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
  );
}

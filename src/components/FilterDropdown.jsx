"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FilterDropdown = ({ content = [], className }) => {
  const [filter, setFilter] = useState("All");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "text-primary rounded-full shadow-all cursor-pointer gap-2",
            className
          )}
          size="xl"
        >
          {filter}
          <FilterIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {content.map((item) => (
          <DropdownMenuItem key={item} onClick={() => setFilter(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;

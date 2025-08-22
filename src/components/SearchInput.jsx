import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }) => {
  return (
    <div className="relative w-[250px] h-10">
      {/* Icon */}
      <Search className="absolute left-3 top-5 -translate-y-[45%] text-gray-500 w-4 h-4 pointer-events-none" />

      {/* Input */}
      <Input
        className={cn(
          "pl-10 shadow-[inset_0_4px_6px_rgba(0,0,0,0.15)] bg-[#E6F4FF] h-10",
          className
        )}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;

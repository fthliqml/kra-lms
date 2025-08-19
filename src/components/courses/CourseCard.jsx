import Image from "next/image";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const CourseCard = ({ isExpanded = true }) => {
  return (
    <div
      className={cn(
        " from-tetriary to-white rounded-[25px] py-3 px-3 shadow-all flex gap-6 items-center transition-all duration-300 ease-in-out",
        isExpanded
          ? "w-full bg-gradient-to-r"
          : "lg:max-w-[17rem] bg-gradient-to-b flex-col gap-2"
      )}
    >
      <Image
        src="/images/js.jpg"
        alt="image"
        width={150}
        height={150}
        className={cn(
          "h-[152px] object-cover object-center shadow-all rounded-lg",
          isExpanded ? "w-[223px]" : "w-full"
        )}
      />
      <div className="flex flex-col justify-between w-full h-[10rem] pb-4 pt-1">
        <div>
          <span className="text-sm text-muted-foreground">Web Development</span>

          <h2 className="font-bold text-xl text-dark">
            Master JavaScript From Beginner to Advanced
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-xs text-muted-foreground">Complete</span>
            <span className="text-xs text-muted-foreground">70%</span>
          </div>
          <Progress value={70} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

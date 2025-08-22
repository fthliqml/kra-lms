import Image from "next/image";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const CourseCard = ({ isExpanded = true }) => {
  return (
    <Link
      href="/courses/1/overview"
      className={cn(
        "w-full cursor-pointer from-tetriary to-white rounded-[25px] p-3 shadow-all flex gap-6 items-center transition-all duration-300 ease-in-out",
        "hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1",
        isExpanded ? "bg-gradient-to-r" : "bg-gradient-to-b flex-col gap-2"
      )}
    >
      <Image
        src="/images/js.jpg"
        alt="Course cover"
        width={223}
        height={152}
        className={cn(
          "object-cover object-center shadow-all rounded-lg transition duration-300",
          isExpanded ? "w-[223px] h-[152px]" : "w-full h-[152px]",
          "hover:brightness-105"
        )}
      />
      <div className="flex flex-col justify-between w-full space-y-5">
        <div>
          <span className="text-sm text-muted-foreground">Web Development</span>
          <h3 className="font-bold text-xl text-dark line-clamp-2">
            Master JavaScript From Beginner to Advanced
          </h3>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>In Progress</span>
            <span>70%</span>
          </div>
          <Progress value={70} aria-label="Course progress 70 percent" />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

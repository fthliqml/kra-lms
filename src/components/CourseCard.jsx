import Image from "next/image";

import { Progress } from "@/components/ui/progress";

const CourseCard = () => {
  return (
    <div className="w-full bg-gradient-to-r from-tetriary to-white rounded-[25px] py-6 px-6 shadow-all flex gap-6">
      <Image
        src="/images/js.jpg"
        alt="image"
        width={150}
        height={150}
        className="w-[223px] h-[152px] object-cover object-center shadow-all rounded-lg"
      />
      <div className="flex flex-col justify-between pb-5 w-full">
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

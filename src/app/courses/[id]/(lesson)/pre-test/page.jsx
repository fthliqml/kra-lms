import QuestionCard from "@/components/courses/QuestionCard";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex-1 flex flex-col mt-20 md:mt-15">
      <div className="flex-1 p-8 bg-gray-50">
        <div className="w-full">
          <QuestionCard
            number={1}
            question={"Siapa nama ayah anda?"}
            type="multiple"
            options={["wahid", "hamidan", "wahyu", "adit"]}
          />
          <QuestionCard
            number={2}
            question={"Jelaskan tentang diri anda?"}
            type="essay"
          />
          <QuestionCard
            number={1}
            question={"Siapa nama ibu anda?"}
            type="multiple"
            options={["wahid", "hamidan", "wahyu", "adit"]}
          />
        </div>
      </div>

      <Button variant={"primary"} className={"ms-auto me-8"} size={"xl"}>
        Submit
      </Button>
    </div>
  );
}

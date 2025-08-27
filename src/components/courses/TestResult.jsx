import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const TestResult = ({
  completedAt,
  score,
  correctAnswers,
  totalQuestions,
  status,
  percentage,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-card-foreground md:text-lg">
          Pre-Test
        </h3>
        <span className="text-sm md:text-base text-muted-foreground">
          {completedAt}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm md:text-base text-muted-foreground">
            Skor
          </span>
          <span className="text-xl md:text-2xl font-bold text-card-foreground">
            {score}
          </span>
        </div>
        <Progress value={percentage} className="h-2 md:h-3" />
        <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
          <span>
            {correctAnswers}/{totalQuestions} benar
          </span>
          <Badge
            variant="destructive"
            className={cn("text-xs", status === "Lulus" && "bg-green-600")}
          >
            {status}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TestResult;

import { AlertCircle, Award, CheckCircle, Clock, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StatusTestCard = ({
  isPassed,
  completedAt = "",
  isFinal = true,
  scoreComparison = "",
  isPendingReview = false,
}) => {
  return (
    <Card
      className={cn(
        "shadow-sm border-2",
        isPendingReview
          ? "border-amber-600/20 bg-amber-600/5"
          : isPassed
          ? "border-green-600/20 bg-green-600/5"
          : "border-red-600/20 bg-red-600/5"
      )}
    >
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-3">
          <div
            className={cn(
              "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center",
              isPendingReview
                ? "bg-amber-600/10"
                : isPassed
                ? "bg-green-600/10"
                : "bg-red-600/10"
            )}
          >
            {isPendingReview ? (
              <Clock className={cn("h-8 w-8 md:h-10 md:w-10 text-amber-600")} />
            ) : isPassed ? (
              <Trophy
                className={cn("h-8 w-8 md:h-10 md:w-10 text-green-600")}
              />
            ) : (
              <Award className="h-8 w-8 md:h-10 md:w-10 text-destructive" />
            )}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
          Status
        </h2>
        <Badge
          variant={isPassed | isPendingReview ? "default" : "destructive"}
          className={cn(
            "px-6 py-2 text-lg font-semibold",
            isPendingReview
              ? "bg-amber-600"
              : isPassed
              ? "bg-green-600"
              : "bg-red-600"
          )}
        >
          {isPendingReview ? (
            <AlertCircle className="h-5 w-5 mr-2" />
          ) : (
            <CheckCircle className="h-5 w-5 mr-2" />
          )}

          {isPendingReview ? "Pending" : isPassed ? "Lulus" : "Tidak Lulus"}
        </Badge>

        {isFinal ? (
          <p className="text-sm md:text-base text-muted-foreground mt-3">
            {isPassed
              ? `Peningkatan skor: +${scoreComparison} poin`
              : `Penurunan skor: -${scoreComparison} poin`}
          </p>
        ) : (
          <p className="text-sm md:text-base text-muted-foreground mt-3">
            Diselesaikan pada {completedAt}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusTestCard;

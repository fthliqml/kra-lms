import { AlertCircle, BookOpen, ClockIcon, LoaderCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainScoreDisplay from "@/components/courses/MainScoreDisplay";
import DetailedStats from "@/components/courses/DetailedStats";
import { Badge } from "../ui/badge";
import { PuffLoader } from "react-spinners";

const MainResultCard = ({
  percentage,
  score,
  correctAnswers,
  totalQuestions,
  completedAt,
  isPendingReview,
}) => {
  return (
    <>
      {isPendingReview ? (
        <Card>
          <CardContent>
            <div className="relative w-48 h-48 mx-auto mb-6 flex flex-col items-center justify-center">
              <PuffLoader size={90} color="#d97706" className="mb-4" />
              <span className="text-2xl font-bold text-amber-600">Review</span>
              <span className="text-sm text-muted-foreground">Pending</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold text-card-foreground mb-2">
                Menunggu Hasil Review
              </h2>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                Test Anda sedang dalam proses review karena terdapat soal essay
              </p>

              <Badge
                variant={"secondary"}
                className={
                  "px-4 py-2 text-base font-semibold bg-amber-100 text-amber-800 border-amber-200"
                }
              >
                <AlertCircle className="h-4 w-4 mr-2" /> Menunggu Review
              </Badge>

              <p className="text-xs text-muted-foreground mt-3">
                Diselesaikan pada {completedAt}
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-foreground text-lg md:text-xl">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              Hasil Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Score Display */}
            <MainScoreDisplay percentage={percentage} score={score} />

            {/* Detailed Stats */}
            <DetailedStats
              correctAnswers={correctAnswers}
              percentage={percentage}
              totalQuestions={totalQuestions}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default MainResultCard;

import { Progress } from "@/components/ui/progress";

const DetailedStats = ({ correctAnswers, totalQuestions, percentage }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
          <span className="text-sm md:text-base text-muted-foreground">
            Jawaban Benar
          </span>
          <span className="font-semibold text-card-foreground">
            {correctAnswers} dari {totalQuestions}
          </span>
        </div>

        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
          <span className="text-sm md:text-base text-muted-foreground">
            Jawaban Salah
          </span>
          <span className="font-semibold text-card-foreground">
            {totalQuestions - correctAnswers} dari {totalQuestions}
          </span>
        </div>

        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
          <span className="text-sm md:text-base text-muted-foreground">
            Tingkat Akurasi
          </span>
          <span className="font-semibold text-card-foreground">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
        <Progress value={percentage} className="h-3" />
      </div>
    </>
  );
};

export default DetailedStats;

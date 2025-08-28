import { Clock, Trophy, RotateCcw, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserInfoCard from "@/components/courses/UserInfoCard";
import StatusTestCard from "@/components/courses/StatusTestCard";
import StatsCard from "@/components/courses/StatsCard";
import MainResultCard from "@/components/courses/MainResultCard";

const studentData = {
  name: "Surya Abdul Syukur",
  status: "review",
  subject: "Master JavaScript",
  type: "Pretest",
  duration: "2 Jam",
  totalQuestions: 5,
  correctAnswers: 3,
  score: 60,
  passingGrade: 75,
  completedAt: "22 Jan 2024",
  isPassed: false,
  isPendingReview: true,
};

export default function Page() {
  const percentage =
    (studentData.correctAnswers / studentData.totalQuestions) * 100;

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-7 mt-20 md:mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column - User Info and Status */}
        <div className="lg:col-span-4 space-y-6">
          <UserInfoCard name={studentData.name} type={studentData.type} />

          <StatusTestCard
            completedAt={studentData.completedAt}
            isFinal={false}
            isPassed={studentData.isPassed}
            isPendingReview={studentData.isPendingReview}
          />

          {/* Quick Stats - Mobile only */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {studentData.isPendingReview ? (
              <StatsCard
                icon={
                  <BookOpen className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                }
                label={"Jumlah Soal"}
                value={studentData.totalQuestions + " Soal"}
                type="mobile"
              />
            ) : (
              <StatsCard
                icon={
                  <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                }
                label={"Passing Grade"}
                value={studentData.passingGrade}
                type="mobile"
              />
            )}

            <StatsCard
              icon={<Clock className="h-6 w-6 text-primary mx-auto mb-2" />}
              label={"Durasi"}
              value={studentData.duration}
              type="mobile"
            />
          </div>
        </div>

        {/* Middle Column - Score and Progress */}
        <div className="lg:col-span-5 space-y-6">
          <MainResultCard
            percentage={percentage}
            score={studentData.score}
            totalQuestions={studentData.totalQuestions}
            correctAnswers={studentData.correctAnswers}
            isPendingReview={studentData.isPendingReview}
            completedAt={studentData.completedAt}
          />
        </div>

        {/* Right Column - Additional Stats and Actions */}
        <div className="lg:col-span-3 space-y-6">
          {/* Additional Stats - Desktop only */}
          <div className="hidden lg:block space-y-4">
            {studentData.isPendingReview ? (
              <StatsCard
                icon={
                  <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                }
                label={"Jumlah Soal"}
                value={studentData.totalQuestions + " Soal"}
              />
            ) : (
              <StatsCard
                icon={
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                }
                label={"Passing Grade"}
                value={studentData.passingGrade}
              />
            )}

            <StatsCard
              icon={<Clock className="h-8 w-8 text-primary mx-auto mb-2" />}
              label={"Durasi"}
              value={studentData.duration}
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full"
              size="lg"
              variant={"primary"}
              disabled={studentData.isPendingReview}
            >
              {studentData.isPendingReview ? (
                <>
                  <Clock className="h-4 w-4 mr-2" />
                  Menunggu Review
                </>
              ) : (
                <>
                  <Trophy className="h-4 w-4 mr-2" />
                  Lanjut
                </>
              )}
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent shadow"
              size="lg"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Ulangi Test
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

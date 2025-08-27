import { Clock, Trophy, RotateCcw, Eye, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoCard from "@/components/courses/UserInfoCard";
import StatusTestCard from "@/components/courses/StatusTestCard";
import StatsCard from "@/components/courses/StatsCard";
import MainScoreDisplay from "@/components/courses/MainScoreDisplay";
import DetailedStats from "@/components/courses/DetailedStats";

const studentData = {
  name: "Surya Abdul Syukur",
  subject: "Master JavaScript",
  type: "Pretest",
  duration: "2 Jam",
  totalQuestions: 5,
  correctAnswers: 3,
  score: 60,
  completedAt: "22 Jan 2024",
  isPassed: true,
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
          />

          {/* Quick Stats - Mobile only */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            <StatsCard
              icon={<Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />}
              label={"Akurasi"}
              value={percentage + "%"}
              type="mobile"
            />
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
          {/* Score Card */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground text-lg md:text-xl">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                Hasil Test
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Score Display */}
              <MainScoreDisplay
                percentage={percentage}
                score={studentData.score}
              />

              {/* Detailed Stats */}
              <DetailedStats
                correctAnswers={studentData.correctAnswers}
                percentage={percentage}
                totalQuestions={studentData.totalQuestions}
              />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Additional Stats and Actions */}
        <div className="lg:col-span-3 space-y-6">
          {/* Additional Stats - Desktop only */}
          <div className="hidden lg:block space-y-4">
            <StatsCard
              icon={<Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />}
              label={"Akurasi"}
              value={percentage + "%"}
            />
            <StatsCard
              icon={<Clock className="h-8 w-8 text-primary mx-auto mb-2" />}
              label={"Durasi"}
              value={studentData.duration}
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full" size="lg" variant={"primary"}>
              <Trophy className="h-4 w-4 mr-2" />
              Lanjut
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

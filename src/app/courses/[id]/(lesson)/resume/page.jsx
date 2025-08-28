import { Clock, Trophy, RotateCcw, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestResult from "@/components/courses/TestResult";
import ImprovementIndicator from "@/components/courses/ImprovementIndicator";
import UserInfoCard from "@/components/courses/UserInfoCard";
import StatusTestCard from "@/components/courses/StatusTestCard";
import StatsCard from "@/components/courses/StatsCard";

export default function ComprehensiveResultsPage() {
  const studentData = {
    name: "Surya Abdul Syukur",
    subject: "Master JavaScript",
    pretest: {
      duration: "1.5 Jam",
      totalQuestions: 10,
      correctAnswers: 4,
      passingGrade: 75,
      score: 40,
      status: "Tidak Lulus",
      completedAt: "15 Jan 2024",
    },
    posttest: {
      duration: "2 Jam",
      totalQuestions: 10,
      correctAnswers: 8,
      score: 80,
      passingGrade: 75,
      status: "Lulus",
      completedAt: "22 Jan 2024",
    },
    improvement: {
      scoreIncrease: 40,
      correctAnswersIncrease: 4,
      finalStatus: "Lulus",
      isPassed: true,
    },
  };

  const pretestPercentage =
    (studentData.pretest.correctAnswers / studentData.pretest.totalQuestions) *
    100;
  const posttestPercentage =
    (studentData.posttest.correctAnswers /
      studentData.posttest.totalQuestions) *
    100;

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 mt-20 md:mt-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - User Info and Status */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Info Card */}
            <UserInfoCard name={studentData.name} type={studentData.type} />

            {/* Final Status Card */}
            <StatusTestCard
              isPassed={studentData.improvement.isPassed}
              isFinal
              scoreComparison={studentData.improvement.scoreIncrease}
            />

            {/* Statistics Grid - Mobile only, hidden on desktop */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              <StatsCard
                icon={
                  <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                }
                label={"Passing Grade"}
                value={studentData.posttest.passingGrade}
              />
              <StatsCard
                icon={<Clock className="h-6 w-6 text-primary mx-auto mb-2" />}
                label={"Durasi"}
                value={"3.5 Jam"}
              />
            </div>
          </div>

          {/* Middle Column - Test Comparison */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground text-lg md:text-xl">
                  <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Perbandingan Hasil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pretest Results */}
                <TestResult
                  completedAt={studentData.pretest.completedAt}
                  correctAnswers={studentData.pretest.correctAnswers}
                  percentage={pretestPercentage}
                  score={studentData.pretest.score}
                  status={studentData.pretest.status}
                  totalQuestions={studentData.pretest.totalQuestions}
                />

                {/* Improvement Indicator */}
                <ImprovementIndicator
                  score={studentData.improvement.scoreIncrease}
                  isIncrement
                />

                {/* Posttest Results */}
                <TestResult
                  completedAt={studentData.posttest.completedAt}
                  correctAnswers={studentData.posttest.correctAnswers}
                  percentage={posttestPercentage}
                  score={studentData.posttest.score}
                  status={studentData.posttest.status}
                  totalQuestions={studentData.posttest.totalQuestions}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Statistics and Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Statistics Grid - Desktop only */}
            <div className="hidden lg:grid grid-cols-1 gap-4">
              <StatsCard
                icon={
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                }
                label={"Passing Grade"}
                value={studentData.posttest.passingGrade}
              />
              <StatsCard
                icon={<Clock className="h-8 w-8 text-primary mx-auto mb-2" />}
                label={"Durasi"}
                value={"3.5 Jam"}
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
    </div>
  );
}

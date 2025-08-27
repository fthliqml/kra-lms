import SurveyContent from "@/components/survey/SurveyContent";

const trainings = [
  {
    id: 1,
    trainingName: "Basic Safety Induction",
    startDate: "2025-05-06",
    endDate: "2025-05-08",
    status: "Not Started",
  },
  {
    id: 2,
    trainingName: "Hydraulic System Training",
    startDate: "2025-03-03",
    endDate: "2025-03-07",
    status: "Completed",
  },
  {
    id: 3,
    trainingName: "Diesel Engine Overhaul",
    startDate: "2025-01-15",
    endDate: "2025-01-16",
    status: "Completed",
  },
  {
    id: 4,
    trainingName: "Heavy Equipment Welding",
    startDate: "2024-07-03",
    endDate: "2024-07-05",
    status: "Completed",
  },
  {
    id: 5,
    trainingName: "Electrical Troubleshooting",
    startDate: "2024-04-22",
    endDate: "2024-04-22",
    status: "Completed",
  },
  {
    id: 6,
    trainingName: "Preventive Maintenance Program",
    startDate: "2024-02-19",
    endDate: "2024-02-23",
    status: "Not Started",
  },
  {
    id: 7,
    trainingName: "Production Planning & Control",
    startDate: "2023-09-18",
    endDate: "2023-09-19",
    status: "Not Started",
  },
  {
    id: 8,
    trainingName: "Leadership for Supervisor",
    startDate: "2023-08-14",
    endDate: "2023-08-18",
    status: "Completed",
  },
  {
    id: 9,
    trainingName: "Lean Manufacturing Workshop",
    startDate: "2023-06-13",
    endDate: "2023-06-15",
    status: "Completed",
  },
  {
    id: 10,
    trainingName: "First Aid & Emergency Response",
    startDate: "2023-01-12",
    endDate: "2023-01-12",
    status: "Completed",
  },
];

export default function page({ params }) {
  return <SurveyContent trainings={trainings} params={params} />;
}

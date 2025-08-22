import CertificationPage from "@/components/history/CertificationPage";

const certifications = [
  { no: 1, competency: "Leadership", date: "2025-01-05", status: "Completed" },
  { no: 2, competency: "Teamwork", date: "2025-01-12", status: "Pending" },
  {
    no: 3,
    competency: "Problem Solving",
    date: "2025-01-19",
    status: "Completed",
  },
  {
    no: 4,
    competency: "Communication",
    date: "2025-01-26",
    status: "Completed",
  },
  {
    no: 5,
    competency: "Critical Thinking",
    date: "2025-02-02",
    status: "In Progress",
  },
  {
    no: 6,
    competency: "Time Management",
    date: "2025-02-09",
    status: "Completed",
  },
  { no: 7, competency: "Adaptability", date: "2025-02-16", status: "Pending" },
  { no: 8, competency: "Creativity", date: "2025-02-23", status: "Completed" },
  {
    no: 9,
    competency: "Conflict Resolution",
    date: "2025-03-02",
    status: "Completed",
  },
  {
    no: 10,
    competency: "Decision Making",
    date: "2025-03-09",
    status: "In Progress",
  },
  {
    no: 11,
    competency: "Negotiation",
    date: "2025-03-16",
    status: "Completed",
  },
  {
    no: 12,
    competency: "Emotional Intelligence",
    date: "2025-03-23",
    status: "Pending",
  },
  {
    no: 13,
    competency: "Analytical Thinking",
    date: "2025-03-30",
    status: "Completed",
  },
  {
    no: 14,
    competency: "Collaboration",
    date: "2025-04-06",
    status: "Completed",
  },
  {
    no: 15,
    competency: "Project Management",
    date: "2025-04-13",
    status: "Pending",
  },
];

export default function page() {
  return <CertificationPage certifications={certifications} />;
}

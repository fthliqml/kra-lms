import CourseSidebar from "@/components/courses/CourseSidebar";
import CourseTopBar from "@/components/courses/CourseTopBar";

const data = {
  id: 1,
  title: "Dasar-Dasar Keselamatan",
  description:
    "Kursus ini membahas prinsip-prinsip dasar keselamatan kerja di industri, termasuk pemahaman risiko, penggunaan alat pelindung diri, serta prosedur darurat.",
  modules: [
    {
      id: 201,
      courseId: 1,
      title: "Pengenalan Keselamatan Kerja",
      fileUrl: "https://files.example.com/safety/modul1.pdf",
      size: "2.1 MB",
    },
    {
      id: 202,
      courseId: 1,
      title: "Alat Pelindung Diri (APD)",
      fileUrl: "https://files.example.com/safety/modul2.pdf",
      size: "3.5 MB",
    },
    {
      id: 203,
      courseId: 1,
      title: "Prosedur Darurat",
      fileUrl: "https://files.example.com/safety/modul3.pdf",
      size: "1.8 MB",
    },
  ],
  videos: [
    {
      id: 301,
      courseId: 1,
      title: "Pengenalan Risiko Keselamatan",
      youtubeUrl: "https://www.youtube.com/watch?v=abcd1234",
    },
    {
      id: 302,
      courseId: 1,
      title: "Cara Menggunakan APD",
      youtubeUrl: "https://www.youtube.com/watch?v=efgh5678",
    },
    {
      id: 303,
      courseId: 1,
      title: "Simulasi Prosedur Darurat",
      youtubeUrl: "https://www.youtube.com/watch?v=ijkl9012",
    },
  ],
};

export default function LessonLayout({ children }) {
  return (
    <div className="flex bg-white">
      <CourseSidebar title={data.title} course={data} />
      <main className="flex-1 flex flex-col min-h-screen">
        <CourseTopBar />
        {children}
      </main>
    </div>
  );
}

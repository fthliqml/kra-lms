import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "K-learn",
  description:
    "Platform digital terintegrasi untuk manajemen pelatihan karyawan, kursus online, ujian, dan sertifikasi. Kelola sesi pelatihan, tracking progress pembelajaran, sistem penilaian, dan survei evaluasi dalam satu sistem yang komprehensif.",
  icons: {
    icon: "/images/logo_kra.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex`}>
        <Sidebar />
        <main className="flex-1 pt-16 px-20">{children}</main>
      </body>
    </html>
  );
}

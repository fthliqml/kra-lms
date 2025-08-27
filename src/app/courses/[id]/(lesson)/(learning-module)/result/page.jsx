import InfoGrid from "@/components/InfoGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function page() {
  const isPassed = true;

  const data = [
    { label: "Nama", value: "Surya" },
    { label: "Waktu Pengerjaan", value: "2 Jam" },
    { label: "Jumlah Soal", value: 5 },
    { label: "Jawaban Benar", value: 3 },
    { label: "Skor Akhir", value: 60 },
    { label: "Status", value: isPassed ? "Lulus" : "Tidak Lulus" },
  ];

  return (
    <div className="container mx-auto flex flex-col mt-30 h-full">
      <div className="max-w-md p-6">
        <InfoGrid items={data} colTemplate="180px 1fr" />
      </div>

      <div className="max-w-4xl mt-20 p-6">
        <h3 className="text-lg font-bold">
          {isPassed
            ? "🎉 Selamat! Anda telah lulus modul ini."
            : "Terimakasih telah menyelesaikan modul ini."}
        </h3>
        <p className="text-lg mt-2">
          {isPassed
            ? "Terima kasih atas partisipasi Anda dalam pembelajaran. Anda berhak mendapatkan sertifikat sebagai bukti kelulusan. Jangan lupa untuk mengunduh sertifikat Anda dan terus tingkatkan kompetensi Anda. Sampai jumpa di modul selanjutnya!"
            : "Saat ini Anda belum lulus. Silakan pelajari kembali materi yang tersedia dan coba kerjakan kembali post-test hingga Anda mencapai skor kelulusan. Semangat belajar, kami yakin Anda bisa!"}
        </p>
      </div>

      <div className="w-full flex justify-end">
        <Button variant={"primary"} size={"xl"}>
          Finish
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

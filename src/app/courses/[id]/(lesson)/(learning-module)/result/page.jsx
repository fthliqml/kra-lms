import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function page() {
  return (
    <div className="container mx-auto flex flex-col mt-30 h-full">
      <div className="max-w-md p-6">
        <div className="grid grid-cols-2 gap-y-3 gap-x-0 text-gray-800 text-lg">
          <p>Nama</p>
          <p>
            <span className="mr-3">:</span> Surya
          </p>

          <p>Waktu Pengerjaan</p>
          <p>
            <span className="mr-3">:</span> 2 Jam
          </p>

          <p>Jumlah Soal</p>
          <p>
            <span className="mr-3">:</span> 5
          </p>

          <p>Jawaban Benar</p>
          <p>
            <span className="mr-3">:</span> 3
          </p>

          <p>Skor Akhir</p>
          <p>
            <span className="mr-3">:</span> 60
          </p>

          <p>Status</p>
          <p>
            <span className="mr-3">:</span>Tidak Lulus
          </p>
        </div>
      </div>

      <div className="max-w-4xl mt-20 p-6">
        <h3 className="text-lg font-bold">
          Terimakasih telah menyelesaikan modul ini.
        </h3>
        <p className="text-lg mt-2">
          Terima kasih atas partisipasi Anda dalam pembelajaran. Anda berhak
          mendapatkan sertifikat sebagai bukti kelulusan. Jangan lupa untuk
          mengunduh sertifikat Anda dan terus tingkatkan kompetensi Anda. Sampai
          jumpa di modul selanjutnya!
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

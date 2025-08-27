import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";

const data = {
  title: "Safety Induction Quiz",
  questions: [
    {
      name: "Apa tujuan utama dari safety induction?",
      type: "multiple-choice",
      options: [
        "Memberikan pemahaman tentang aturan keselamatan",
        "Meningkatkan produktivitas kerja",
        "Menilai kemampuan karyawan",
        "Memberikan pelatihan teknis",
      ],
    },
    {
      name: "Apa yang harus dilakukan pertama kali jika terjadi kebakaran?",
      type: "multiple-choice",
      options: [
        "Menyelamatkan dokumen",
        "Menyelamatkan diri ke titik kumpul",
        "Mematikan semua peralatan listrik",
        "Menunggu instruksi atasan",
      ],
    },
    {
      name: "Alat pelindung diri (APD) yang wajib dipakai di area konstruksi adalah?",
      type: "multiple-choice",
      options: [
        "Sepatu safety, helm, rompi reflektif",
        "Topi biasa dan kacamata hitam",
        "Jaket tebal dan sarung tangan",
        "Masker medis saja",
      ],
    },
    {
      name: "Apa warna helm untuk supervisor biasanya?",
      type: "multiple-choice",
      options: ["Kuning", "Putih", "Hijau", "Biru"],
    },
    {
      name: "Simbol APAR berwarna apa?",
      type: "multiple-choice",
      options: ["Hijau", "Merah", "Biru", "Kuning"],
    },
    {
      name: "Jika melihat kabel terbuka dan berbahaya, apa yang harus dilakukan?",
      type: "multiple-choice",
      options: [
        "Menyentuh kabel untuk memeriksa",
        "Melaporkan segera ke petugas terkait",
        "Menutup dengan kain seadanya",
        "Mengabaikannya",
      ],
    },
    {
      name: "Apa fungsi dari jalur evakuasi?",
      type: "multiple-choice",
      options: [
        "Tempat istirahat pekerja",
        "Jalur cepat keluar saat darurat",
        "Area penyimpanan barang",
        "Tempat parkir kendaraan",
      ],
    },
    {
      name: "Tindakan pertama jika melihat rekan kerja pingsan?",
      type: "multiple-choice",
      options: [
        "Membawa ke ruang medis",
        "Memberikan pertolongan pertama atau panggil tim medis",
        "Memberikan minum air putih",
        "Membiarkan sampai sadar sendiri",
      ],
    },
    {
      name: "Pictogram segitiga berwarna kuning menandakan apa?",
      type: "multiple-choice",
      options: ["Larangan", "Peringatan bahaya", "Kewajiban", "Informasi umum"],
    },
    {
      name: "Sebutkan contoh perilaku tidak aman di tempat kerja!",
      type: "essay",
    },
    {
      name: "Apa yang harus dilakukan sebelum menggunakan peralatan listrik?",
      type: "multiple-choice",
      options: [
        "Langsung digunakan tanpa periksa",
        "Memeriksa kondisi kabel dan grounding",
        "Dipinjamkan ke orang lain dulu",
        "Dibiarkan menyala terus-menerus",
      ],
    },
    {
      name: "Apa tujuan adanya safety sign?",
      type: "multiple-choice",
      options: [
        "Hiasan dinding",
        "Sebagai pengingat dan instruksi keselamatan",
        "Dekorasi ruangan",
        "Agar tempat kerja lebih ramai",
      ],
    },
    {
      name: "Jelaskan langkah-langkah evakuasi saat terjadi gempa di tempat kerja!",
      type: "essay",
    },
    {
      name: "Siapa yang bertanggung jawab atas keselamatan di tempat kerja?",
      type: "multiple-choice",
      options: [
        "Hanya tim HSE",
        "Hanya supervisor",
        "Semua pekerja dan manajemen",
        "Hanya pekerja baru",
      ],
    },
    {
      name: "Mengapa penting untuk melaporkan hampir celaka (near miss)?",
      type: "essay",
    },
  ],
};

export default function page() {
  return (
    <div className="flex-1 flex flex-col mt-20 md:mt-15 pb-10">
      <div className="flex-1 p-8 bg-gray-50">
        <div className="w-full">
          {data.questions.map((q, i) => (
            <QuestionCard
              key={i + 1}
              number={i + 1}
              question={q.name}
              type={q.type}
              options={q.options}
            />
          ))}
        </div>
      </div>

      <Button variant={"primary"} className={"ms-auto me-8"} size={"xl"}>
        Submit
      </Button>
    </div>
  );
}

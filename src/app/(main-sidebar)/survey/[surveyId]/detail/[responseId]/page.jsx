import SurveyFillContent from "@/components/survey/SurveyDetailContent";

const data = {
  surveyId: 1,
  trainingName: "Machine Learning",
  instructor: "Yuda Prana Wijaya Putra",
  date: {
    startDate: "2025-05-06",
    endDate: "2025-05-08",
  },
  questions: [
    {
      id: 1,
      question: "Seberapa jelas instruktur menyampaikan materi pelatihan?",
      type: "single_choice",
      options: [
        "Sangat Tidak Jelas",
        "Tidak Jelas",
        "Cukup Jelas",
        "Jelas",
        "Sangat Jelas",
      ],
    },
    {
      id: 2,
      question:
        "Apakah instruktur mampu menjawab pertanyaan peserta dengan baik?",
      type: "single_choice",
      options: [
        "Sangat Tidak Mampu",
        "Kurang Mampu",
        "Cukup Mampu",
        "Mampu",
        "Sangat Mampu",
      ],
    },
    {
      id: 3,
      question: "Bagaimana sikap dan interaksi instruktur selama pelatihan?",
      type: "single_choice",
      options: [
        "Tidak Ramah",
        "Kurang Interaktif",
        "Cukup Interaktif",
        "Interaktif",
        "Sangat Interaktif",
      ],
    },
    {
      id: 4,
      question: "Apakah instruktur menguasai materi pelatihan dengan baik?",
      type: "single_choice",
      options: [
        "Sangat Tidak Menguasai",
        "Kurang Menguasai",
        "Cukup Menguasai",
        "Menguasai",
        "Sangat Menguasai",
      ],
    },
    {
      id: 5,
      question:
        "Seberapa besar peran instruktur dalam membantu Anda memahami materi pelatihan?",
      type: "single_choice",
      options: [
        "Tidak Membantu",
        "Kurang Membantu",
        "Cukup Membantu",
        "Membantu",
        "Sangat Membantu",
      ],
    },
  ],
};

export default function page({ params }) {
  return <SurveyFillContent data={data} params={params} />;
}

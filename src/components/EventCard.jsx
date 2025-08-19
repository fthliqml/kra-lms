import { cn } from "@/lib/utils";

export default function EventCard({ date, title, location, type }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="cursor-pointer relative flex items-center rounded-xl shadow-md bg-white transition-all hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
      {/* Strip kecil di kiri */}
      <div
        className={cn(
          "absolute top-0 left-0 w-16 h-full rounded-l-xl z-0",
          type === "training"
            ? "bg-gradient-to-r from-blue-300 to-white"
            : "bg-gradient-to-r from-yellow-300 to-white"
        )}
      ></div>

      {/* Konten */}
      <div className="p-4 flex justify-between items-center w-full ml-3 relative z-10">
        <div>
          <p className="text-sm italic text-gray-500">{formattedDate}</p>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm text-gray-700">{location}</p>
      </div>
    </div>
  );
}

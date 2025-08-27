import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StatsCard = ({ icon, label, value, type = "desktop" }) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4 text-center">
        {icon}
        <p className="text-sm text-muted-foreground">{label}</p>
        <p
          className={cn(
            "font-bold text-card-foreground",
            type == "desktop" ? "text-2xl" : "text-xl"
          )}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

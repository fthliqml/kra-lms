import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const UserInfoCard = ({ name, type }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold text-lg md:text-xl">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="text-center">
            <CardTitle className="text-lg md:text-xl text-card-foreground">
              {name}
            </CardTitle>
            <p className="text-muted-foreground text-sm md:text-base">
              Peserta {type}
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserInfoCard;

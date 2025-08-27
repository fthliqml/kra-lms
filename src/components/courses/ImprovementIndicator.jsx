import { TrendingDown, TrendingUp } from "lucide-react";

const ImprovementIndicator = ({ score, isIncrement = true }) => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex items-center gap-2 text-orange-500">
        {isIncrement ? (
          <>
            <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base font-medium">
              +{score} poin
            </span>
          </>
        ) : (
          <>
            <TrendingDown className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base font-medium">
              -{score} poin
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ImprovementIndicator;

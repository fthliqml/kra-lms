const MainScoreDisplay = ({ percentage, score }) => {
  return (
    <div className="text-center space-y-4">
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted-foreground/20"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.51} 251`}
              className="text-orange-600 transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-card-foreground">
                {score}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                dari 100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScoreDisplay;

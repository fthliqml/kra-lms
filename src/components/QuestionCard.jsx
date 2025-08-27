"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const QuestionCard = ({ number, question, type = "essay", options = [] }) => {
  const [value, setValue] = useState(0);
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-black mb-6">
        {number}. {question}
      </h2>

      {type == "essay" ? (
        <Textarea
          placeholder="Type your answer here."
          className="border-2 border-gray-300 w-full max-w-[70rem] h-30"
          maxLength={300}
        />
      ) : (
        <RadioGroup
          className="space-y-1"
          onValueChange={setValue}
          value={value}
        >
          {options.map((opt, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center space-x-3 border-2 p-2 rounded-md border-gray-300 cursor-pointer",
                value == i + 1 && "border-primary"
              )}
              onClick={() => setValue(i + 1)}
            >
              <RadioGroupItem value={i + 1} id={opt} />
              <Label htmlFor={opt} className="text-gray-700 cursor-pointer">
                {opt}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default QuestionCard;

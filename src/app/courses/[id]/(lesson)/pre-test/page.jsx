import { ArrowLeft } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold">
            Master JavaScript From Beginner to Advanced
          </h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-gray-200 p-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-4xl">
          {/* Question 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-6">
              1. Apa output dari kode berikut?{" "}
              <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                console.log(typeof null);
              </code>
            </h2>

            <RadioGroup className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="null" id="q1-null" />
                <Label
                  htmlFor="q1-null"
                  className="text-gray-700 cursor-pointer"
                >
                  "null"
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="object" id="q1-object" />
                <Label
                  htmlFor="q1-object"
                  className="text-gray-700 cursor-pointer"
                >
                  "object"
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="undefined" id="q1-undefined" />
                <Label
                  htmlFor="q1-undefined"
                  className="text-gray-700 cursor-pointer"
                >
                  "undefined"
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="boolean" id="q1-boolean" />
                <Label
                  htmlFor="q1-boolean"
                  className="text-gray-700 cursor-pointer"
                >
                  "boolean"
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              2. Mana di antara berikut ini yang digunakan untuk mendeklarasikan
              variabel di JavaScript?
            </h2>

            <RadioGroup className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="var-int-float" id="q2-var-int-float" />
                <Label
                  htmlFor="q2-var-int-float"
                  className="text-gray-700 cursor-pointer"
                >
                  var, int, float
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="let-const-var" id="q2-let-const-var" />
                <Label
                  htmlFor="q2-let-const-var"
                  className="text-gray-700 cursor-pointer"
                >
                  let, const, var
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="define-set-declare"
                  id="q2-define-set-declare"
                />
                <Label
                  htmlFor="q2-define-set-declare"
                  className="text-gray-700 cursor-pointer"
                >
                  define, set, declare
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="string-number-boolean"
                  id="q2-string-number-boolean"
                />
                <Label
                  htmlFor="q2-string-number-boolean"
                  className="text-gray-700 cursor-pointer"
                >
                  string, number, boolean
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

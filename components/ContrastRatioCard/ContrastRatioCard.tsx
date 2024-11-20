import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateContrastRatio } from "@/utils/colorUtils";

interface ContrastRatioCardProps {
  foreground: string;
  background: string;
}

const ContrastRatioCard: React.FC<ContrastRatioCardProps> = ({
  foreground,
  background,
}) => {
  const ratio = calculateContrastRatio(foreground, background);

  const passFail = ratio >= 4.5 ? "Pass" : "Fail";

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-center">Contrast Ratio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center text-lg font-medium">
          {ratio.toFixed(2)}:1
        </div>
        <p
          className={`text-center text-sm mt-2 ${
            passFail === "Pass" ? "text-green-500" : "text-red-500"
          }`}
        >
          {passFail}
        </p>
      </CardContent>
    </Card>
  );
};

export default ContrastRatioCard;

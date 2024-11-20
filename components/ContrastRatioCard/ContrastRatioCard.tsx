import React from "react";

import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

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

  const getComplianceStatus = (ratio: number) => {
    if (ratio >= 7) {
      return {
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        text: "AAA",
        description: "Excellent - Meets AAA standards",
        class: "bg-green-50 border-green-200",
      };
    } else if (ratio >= 4.5) {
      return {
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
        text: "AA",
        description: "Good - Meets AA standards",
        class: "bg-blue-50 border-blue-200",
      };
    } else if (ratio >= 3) {
      return {
        icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
        text: "Large Text Only",
        description: "Limited - Suitable for large text only",
        class: "bg-yellow-50 border-yellow-200",
      };
    } else {
      return {
        icon: <XCircle className="w-6 h-6 text-red-500" />,
        text: "Fail",
        description: "Poor - Does not meet accessibility standards",
        class: "bg-red-50 border-red-200",
      };
    }
  };

  const status = getComplianceStatus(ratio);

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-center">Contrast Ratio</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl md:text-6xl font-bold tracking-tight">
            {ratio.toFixed(2)}
            <span className="text-2xl md:text-3xl text-gray-500 ml-2">: 1</span>
          </div>
          <div className={`w-full p-4 rounded-lg border ${status.class}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {status.icon}
                <span className="font-semibold">{status.text}</span>
              </div>
              <span className="text-sm text-gray-600">{status.description}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{
                width: `${Math.min(100, (ratio / 7) * 100)}%`,
                transition: 'width 0.3s ease-in-out'
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>1:1</span>
            <span>4.5:1</span>
            <span>7:1</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContrastRatioCard;

import React from "react";

import { AlertCircle, CheckCircle, XCircle, TrendingUp } from "lucide-react";

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
        icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
        text: "AAA",
        description: "Excellent - Meets AAA standards",
        class: "bg-emerald-50/80 dark:bg-emerald-950/50 border-emerald-200/60 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-200",
        gradient: "from-emerald-500 to-green-500",
      };
    } else if (ratio >= 4.5) {
      return {
        icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
        text: "AA",
        description: "Good - Meets AA standards",
        class: "bg-blue-50/80 dark:bg-blue-950/50 border-blue-200/60 dark:border-blue-800/60 text-blue-800 dark:text-blue-200",
        gradient: "from-blue-500 to-cyan-500",
      };
    } else if (ratio >= 3) {
      return {
        icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
        text: "Large Text Only",
        description: "Limited - Suitable for large text only",
        class: "bg-amber-50/80 dark:bg-amber-950/50 border-amber-200/60 dark:border-amber-800/60 text-amber-800 dark:text-amber-200",
        gradient: "from-amber-500 to-yellow-500",
      };
    } else {
      return {
        icon: <XCircle className="w-5 h-5 text-red-500" />,
        text: "Fail",
        description: "Poor - Does not meet accessibility standards",
        class: "bg-red-50/80 dark:bg-red-950/50 border-red-200/60 dark:border-red-800/60 text-red-800 dark:text-red-200",
        gradient: "from-red-500 to-rose-500",
      };
    }
  };

  const status = getComplianceStatus(ratio);

  return (
    <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center">
          <TrendingUp className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
          Contrast Ratio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Ratio Display */}
        <div className="text-center">
          <div className="text-5xl font-bold text-slate-800 dark:text-slate-200 tracking-tight mb-2">
            {ratio.toFixed(2)}
            <span className="text-2xl text-slate-500 dark:text-slate-400 ml-2">: 1</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Contrast Ratio</p>
        </div>

        {/* Status Badge */}
        <div className={`p-4 rounded-xl border backdrop-blur-sm ${status.class}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {status.icon}
              <span className="font-semibold text-sm">{status.text}</span>
            </div>
          </div>
          <p className="text-xs mt-2 opacity-80">{status.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${status.gradient} transition-all duration-500 ease-out`}
              style={{
                width: `${Math.min(100, (ratio / 7) * 100)}%`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>1:1</span>
            <span className="font-medium">4.5:1 (AA)</span>
            <span className="font-medium">7:1 (AAA)</span>
          </div>
        </div>

        {/* Color Preview */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
              Text Color
            </div>
            <div 
              className="w-full h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-2"
              style={{ backgroundColor: foreground }}
            />
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{foreground}</p>
          </div>
          <div className="text-center">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
              Background Color
            </div>
            <div 
              className="w-full h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-2"
              style={{ backgroundColor: background }}
            />
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{background}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContrastRatioCard;

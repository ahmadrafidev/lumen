import React from "react";

import { Eye } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LivePreviewCardProps {
  foregroundColor: string;
  backgroundColor: string;
}

const LivePreviewCard: React.FC<LivePreviewCardProps> = ({
  foregroundColor,
  backgroundColor,
}) => {
  return (
    <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center">
          <Eye className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Preview Container */}
        <div 
          className="rounded-xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 transition-all duration-300"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="text-center space-y-2">
            <h4 
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: foregroundColor }}
            >
              Sample Heading
            </h4>
            <p 
              className="text-base transition-colors duration-300 leading-relaxed"
              style={{ color: foregroundColor }}
            >
              This is how your text will look with the selected color combination. Test readability and visual appeal here.
            </p>
            <div className="pt-2">
              <button 
                className="px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 font-medium"
                style={{ 
                  color: foregroundColor, 
                  borderColor: foregroundColor,
                  backgroundColor: 'transparent'
                }}
              >
                Sample Button
              </button>
            </div>
          </div>
        </div>

        {/* Color Information */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
              Text Color
            </div>
            <div 
              className="w-full h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-2"
              style={{ backgroundColor: foregroundColor }}
            />
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{foregroundColor}</p>
          </div>
          <div className="text-center">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
              Background Color
            </div>
            <div 
              className="w-full h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-2"
              style={{ backgroundColor: backgroundColor }}
            />
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{backgroundColor}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LivePreviewCard; 
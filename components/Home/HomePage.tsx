'use client'

import { useState } from "react";

import { calculateContrastRatio } from "@/utils/colorUtils";

import ForegroundCard from "../ForegroundCard/ForegroundCard";
import BackgroundCard from "../BackgroundCard/BackgroundCard";
import ContrastRatioCard from "../ContrastRatioCard/ContrastRatioCard";
import LivePreviewCard from "../LivePreviewCard/LivePreviewCard";
import PassCheckCard from "../PassCheckCard/PassCheckCard";

export default function HomePage() {
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); 

  const contrastRatio = calculateContrastRatio(foregroundColor, backgroundColor);

  const handleColorChange = (type: "fg" | "bg", color: string) => {
    if (type === "fg") {
      setForegroundColor(color);
    } else {
      setBackgroundColor(color);
    }
  };

  return (
    <div className="w-full">

      {/* Main Tool Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
        <div className="space-y-6">
          <ForegroundCard
            color={foregroundColor}
            onChange={(color) => handleColorChange("fg", color)}
          />
          <ContrastRatioCard
            foreground={foregroundColor}
            background={backgroundColor}
          />     
        </div>

        <div className="space-y-6">
          <BackgroundCard
            color={backgroundColor}
            onChange={(color) => handleColorChange("bg", color)}
          />
          <LivePreviewCard
            foregroundColor={foregroundColor}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>

      {/* Accessibility Compliance Card */}
      <div className="w-full">
        <PassCheckCard contrastRatio={contrastRatio} />
      </div>
    </div>
  );
}

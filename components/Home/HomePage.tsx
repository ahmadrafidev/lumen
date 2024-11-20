'use client'

import { useState } from "react";
import ForegroundCard from "../ForegroundCard/ForegroundCard";
import BackgroundCard from "../BackgroundCard/BackgroundCard";
import ContrastRatioCard from "../ContrastRatioCard/ContrastRatioCard";
import PassCheckCard from "../PassCheckCard/PassCheckCard";
import { calculateContrastRatio } from "@/utils/colorUtils";

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
      <main>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <ForegroundCard
              color={foregroundColor}
              onChange={(color) => handleColorChange("fg", color)}
            />
            <BackgroundCard
              color={backgroundColor}
              onChange={(color) => handleColorChange("bg", color)}
            />
            <ContrastRatioCard
              foreground={foregroundColor}
              background={backgroundColor}
            />
            <PassCheckCard contrastRatio={contrastRatio} />
          </div>
        </div>
      </main>
    </div>
  );
}

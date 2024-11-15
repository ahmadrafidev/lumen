'use client'

import { useState } from "react";

import ForegroundCard from "../ForegroundCard/ForegroundCard";
import BackgroundCard from "../BackgroundCard/BackgroundCard";
import ContrastRatioCard from "../ContrastRatioCard/ContrastRatioCard";
import PassCheckCard from "../PassCheckCard/PassCheckCard";
import SuggestionImprovementCard from "../SuggestionImprovementCard/SuggestionImprovementCard";

export default function HomePage() {
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  return (
    <div className="w-full">
      <main>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <ForegroundCard color={foregroundColor} onChange={setForegroundColor} />
            <BackgroundCard color={backgroundColor} onChange={setBackgroundColor} />
            <ContrastRatioCard />
            <PassCheckCard />
            <SuggestionImprovementCard />
          </div>
        </div>
      </main>
    </div>
  );
}
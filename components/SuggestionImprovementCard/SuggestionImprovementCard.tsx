import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

const SuggestionImprovementCard = ({ currentColors = { fg: "#000000", bg: "#FFFFFF" } }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Suggested Color Improvements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current vs Suggested Colors */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Color Adjustments</h3>

          {/* Foreground Color Suggestion */}
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <span className="text-sm text-gray-800">Text Color</span>
              <div className="flex items-center mt-1">
                <div
                  className="w-12 h-8 rounded border shadow-sm"
                  style={{ backgroundColor: currentColors.fg }}
                />
                <ArrowRight className="mx-3 h-4 w-4 text-gray-400" />
                <div
                  className="w-12 h-8 rounded border shadow-sm"
                  style={{ backgroundColor: "#000000" }}
                />
                <span className="ml-3 text-sm">Darker shade suggested</span>
              </div>
            </div>
            <code className="bg-white px-2 py-1 rounded text-sm">#000000</code>
          </div>

          {/* Background Color Suggestion */}
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <span className="text-sm text-gray-800">Background Color</span>
              <div className="flex items-center mt-1">
                <div
                  className="w-12 h-8 rounded border shadow-sm"
                  style={{ backgroundColor: currentColors.bg }}
                />
                <ArrowRight className="mx-3 h-4 w-4 text-gray-400" />
                <div
                  className="w-12 h-8 rounded border shadow-sm"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
                <span className="ml-3 text-sm">Lighter shade suggested</span>
              </div>
            </div>
            <code className="bg-white px-2 py-1 rounded text-sm">#FFFFFF</code>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-4">
          <Button className="px-3 py-1.5 rounded-md text-sm font-medium text-white">
            Apply Suggestions
          </Button>
          <Button variant="secondary" className="px-3 py-1.5 rounded-md text-sm text-black">
            Reset
          </Button>
        </div>

        {/* Additional Tips */}
        {/* TODO: logic for displaying AA or AAA compliance */}
        <div className="mt-4 p-3 bg-zinc-100 rounded-lg">
          <h4 className="text-base font-medium text-gray-900">Tips to achieve AAA compliance:</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li>• Try increasing the contrast between text and background</li>
            <li>• Use bold text for better readability</li>
            <li>• Consider using darker text on light backgrounds</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestionImprovementCard;

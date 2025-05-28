import { HexColorPicker } from "react-colorful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ForegroundCardProps {
  color: string;
  onChange: (color: string) => void;
}

export default function ForegroundCard({ color, onChange }: ForegroundCardProps) {
  const handleInputChange = (value: string) => {
    onChange(value);
  };

  return (
    <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center">
            <div 
              className="w-4 h-4 rounded-full mr-3 border-2 border-white dark:border-slate-800 shadow-sm"
              style={{ backgroundColor: color }}
            />
            Foreground Color
          </CardTitle>
          <div 
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
            style={{ backgroundColor: color }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Hex Value</Label>
          <Input
            value={color}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="#000000"
            className="font-mono text-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 focus:ring-slate-400/20 dark:focus:ring-slate-500/20 text-slate-900 dark:text-slate-100"
          />
        </div>
        
        <div className="space-y-3">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Color Picker</Label>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <HexColorPicker 
                color={color} 
                onChange={(newColor) => onChange(newColor)}
                style={{ width: '250px', height: '200px' }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
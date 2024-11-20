import { HexColorPicker } from "react-colorful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BackgroundCardProps {
  color: string;
  onChange: (color: string) => void;
}

export default function BackgroundCard({ color, onChange }: BackgroundCardProps) {
  const handleInputChange = (value: string) => {
    onChange(value); 
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Background</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Label className="font-semibold text-base">Hex Value</Label>
        <Input
          value={color}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="#000000"
          className="mb-4"
        />
        <HexColorPicker color={color} onChange={(newColor) => onChange(newColor)} />
      </CardContent>
    </Card>
  );
}
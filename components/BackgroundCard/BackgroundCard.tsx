import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HexColorPicker } from "react-colorful";

interface BackgroundCardProps {
  color: string;
  onChange: (color: string) => void;
}

export default function BackgroundCard({ color, onChange }: BackgroundCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Background</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Hex Value</Label>
        <Input
          value={color}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          className="mb-4"
        />
        <HexColorPicker color={color} onChange={onChange} />
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContrastRatioCard() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-center">Contrast Ratio</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Contrast ratio logic will be display here */}
      </CardContent>
    </Card>
  );
}
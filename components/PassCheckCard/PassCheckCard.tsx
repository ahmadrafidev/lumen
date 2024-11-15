import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export default function PassCheckCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Pass Check</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl tracking-normal">Normal Text</h2>
          <Separator />
          <div className="my-4 space-y-2">
            <div className="flex items-center space-x-2">
              <h6>WCAG AA :</h6>
              <Label className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                Pass
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <h6>WCAG AAA :</h6>
              <Label className="bg-red-100 text-red-700 px-2 py-1 rounded-md">
                Fail
              </Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl tracking-normal">Large Text</h2>
          <Separator />
          <div className="my-4 space-y-2">
            <div className="flex items-center space-x-2">
              <h6>WCAG AA :</h6>
              <Label className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                Pass
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <h6>WCAG AAA :</h6>
              <Label className="bg-red-100 text-red-700 px-2 py-1 rounded-md">
                Fail
              </Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl tracking-normal">
            Graphical Objects and User Interface Components
          </h2>
          <Separator />
          <div className="my-4 space-y-2">
            <div className="flex items-center space-x-2">
              <h6>WCAG AA :</h6>
              <Label className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                Pass
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
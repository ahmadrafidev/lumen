'use client'

import { useState } from "react";

import { HexColorPicker } from "react-colorful";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HomePage() {
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  return (
    <div className="w-full">
      <main>
        <Card className="w-full">
          <CardHeader>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Foreground</CardTitle>
              </CardHeader>
              <CardContent>
                <Label>Hex Value</Label>
                <Input
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  placeholder="#000000"
                  className="mb-4"
                />
                <HexColorPicker color={foregroundColor} onChange={setForegroundColor} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Background</CardTitle>
              </CardHeader>
              <CardContent>
                <Label>Hex Value</Label>
                <Input
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  placeholder="#000000"
                  className="mb-4"
                />
                <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="text-center">Contrast Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Pass Check</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Suggestion Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

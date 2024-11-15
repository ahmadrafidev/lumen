import Link from 'next/link';

import { Info } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const PassCheckCard = () => {
  const sections = [
    {
      title: "Normal Text",
      checks: [
        {
          level: "AA",
          status: "pass",
          details: "Meets contrast requirements.",
        },
        {
          level: "AAA",
          status: "fail",
          details: "Insufficient contrast ratio.",
        },
      ],
    },
    {
      title: "Large Text",
      checks: [
        {
          level: "AA",
          status: "pass",
          details: "Meets contrast requirements.",
        },
        {
          level: "AAA",
          status: "fail",
          details: "Insufficient contrast ratio.",
        },
      ],
    },
    {
      title: "Graphical Objects and User Interface Components",
      checks: [
        {
          level: "AA",
          status: "pass",
          details: "Meets contrast requirements.",
        },
      ],
    },
  ];

  const renderStatus = (status: string) => {
    const baseClass =
      "px-4 py-2 rounded-md text-center text-sm min-w-[60px]"; 
    if (status === "pass") {
      return (
        <div className="flex items-center gap-2">
          <Label className={`${baseClass} bg-green-200 text-green-900`}>
            Pass
          </Label>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <Label className={`${baseClass} bg-red-100 text-red-900`}>Fail</Label>
      </div>
    );
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center mb-4">Accessibility Compliance Check</CardTitle>
        <div className="space-y-4">
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-5 w-5 text-blue-500" />
            <AlertTitle>About WCAG Compliance</AlertTitle>
            <AlertDescription>
              WCAG guidelines ensure web content is accessible to people with disabilities. 
              AA compliance is required for most websites, while AAA represents the highest level of accessibility.
            </AlertDescription>
            <div>
              <Link 
                href="https://www.wcag.com/resource/what-is-wcag/" 
                target="_blank" 
                passHref
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 text-base"
              >
                Read More
              </Link>
            </div>
          </Alert>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-semibold text-xl tracking-normal">
              {section.title}
            </h2>
            <Separator />
            <div className="space-y-2">
              {section.checks.map((check, checkIndex) => (
                <div
                  key={checkIndex}
                  className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
                >
                  <div>
                    <h6 className="font-medium text-gray-800">
                      WCAG {check.level}
                    </h6>
                    <p className="text-sm text-gray-600">{check.details}</p>
                  </div>
                  {renderStatus(check.status)}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="pt-3 border-t">
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Passing</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Needs Improvement</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassCheckCard;

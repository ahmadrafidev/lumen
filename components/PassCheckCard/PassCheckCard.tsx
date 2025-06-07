import React from "react";
import Link from "next/link";
import { Info, CheckCircle2, XCircle, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PassCheckCardProps {
  contrastRatio: number;
}

const PassCheckCard: React.FC<PassCheckCardProps> = ({ contrastRatio }) => {
  const sections = [
    {
      title: "Normal Text",
      icon: "📝",
      checks: [
        {
          level: "AA",
          status: contrastRatio >= 4.5 ? "pass" : "fail",
          details: contrastRatio >= 4.5
            ? "Meets contrast requirements."
            : "Insufficient contrast ratio.",
          required: 4.5,
        },
        {
          level: "AAA",
          status: contrastRatio >= 7 ? "pass" : "fail",
          details: contrastRatio >= 7
            ? "Meets contrast requirements."
            : "Insufficient contrast ratio.",
          required: 7,
        },
      ],
    },
    {
      title: "Large Text",
      icon: "🔤",
      checks: [
        {
          level: "AA",
          status: contrastRatio >= 3 ? "pass" : "fail",
          details: contrastRatio >= 3
            ? "Meets contrast requirements."
            : "Insufficient contrast ratio.",
          required: 3,
        },
        {
          level: "AAA",
          status: contrastRatio >= 4.5 ? "pass" : "fail",
          details: contrastRatio >= 4.5
            ? "Meets contrast requirements."
            : "Insufficient contrast ratio.",
          required: 4.5,
        },
      ],
    },
    {
      title: "UI Components",
      icon: "🎨",
      checks: [
        {
          level: "AA",
          status: contrastRatio >= 3 ? "pass" : "fail",
          details: contrastRatio >= 3
            ? "Meets contrast requirements."
            : "Insufficient contrast ratio.",
          required: 3,
        },
      ],
    },
  ];

  const renderStatus = (status: string) => {
    if (status === "pass") {
      return (
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
            Pass
          </Badge>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <XCircle className="w-4 h-4 text-red-500" />
        <Badge variant="secondary" className="bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
          Fail
        </Badge>
      </div>
    );
  };

  return (
    <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-300">
      <CardHeader className="pb-6">
        <div className="flex flex-col space-y-4">
          {/* Main Title */}
          <CardTitle className=" text-xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-center">
            <Shield className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
            Accessibility Compliance
          </CardTitle>
          
          {/* Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 text-sm mb-1">
                  WCAG Accessibility Standards
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                  These guidelines ensure your designs are accessible to users with visual impairments. 
                  AA is the standard level, AAA provides enhanced accessibility.
                </p>
              </div>
            </div>
            <Link
              href="https://www.wcag.com/resource/what-is-wcag/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex-shrink-0"
            >
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Horizontal Layout for Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-lg">{section.icon}</span>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                  {section.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {section.checks.map((check, checkIndex) => (
                  <div
                    key={checkIndex}
                    className="bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                          WCAG {check.level}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                          {check.required}:1
                        </span>
                      </div>
                      {renderStatus(check.status)}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{check.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-700/60">
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-slate-600 dark:text-slate-400">Passing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-slate-600 dark:text-slate-400">Needs Improvement</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassCheckCard;

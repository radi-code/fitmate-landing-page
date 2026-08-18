"use client";

import { ClipboardList, Dumbbell, Salad } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Metrics() {
  const { metrics } = landingData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "clipboard-list":
        return <ClipboardList className="w-6 h-6 text-[#064e3b]" />;
      case "dumbbell":
        return <Dumbbell className="w-6 h-6 text-[#064e3b]" />;
      case "salad":
        return <Salad className="w-6 h-6 text-[#064e3b]" />;
      default:
        return <ClipboardList className="w-6 h-6 text-[#064e3b]" />;
    }
  };

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {metrics.map((metric) => (
            <div key={metric.id} className="pt-6 md:pt-0 px-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50/80 flex items-center justify-center mb-3">
                {renderIcon(metric.icon)}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-500 mt-1.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

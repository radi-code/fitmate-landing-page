"use client";

import { ClipboardList, Sparkles, CalendarCheck } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Testimonials() {
  const { title, subtitle, steps, notice } = landingData.stepsSection;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "clipboard-list":
        return <ClipboardList className="w-5 h-5 text-emerald-700" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-700" />;
      case "calendar-check":
        return <CalendarCheck className="w-5 h-5 text-emerald-700" />;
      default:
        return <ClipboardList className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.id}
              className="bg-[#fcfdfd] rounded-3xl p-7 sm:p-8 border border-gray-100/90 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#e8f6ed] text-[#064e3b] border border-emerald-200/50">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    {renderIcon(item.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation Notice Note at Bottom */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
            {notice}
          </p>
        </div>

      </div>
    </section>
  );
}

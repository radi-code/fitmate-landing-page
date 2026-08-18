"use client";

import { ShieldCheck, HeartPulse, Sparkles, Target } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function TrustSecurity() {
  const { title, subtitle, items, medicalDisclaimer } = landingData.trustSection;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case "heart":
        return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case "target":
        return <Target className="w-6 h-6 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
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

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#fcfdfd] rounded-2xl p-6 sm:p-7 border border-gray-100/90 shadow-sm text-center flex flex-col items-center hover:shadow-md hover:border-emerald-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50/80 flex items-center justify-center mb-4">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Medical Disclaimer Note */}
        <div className="mt-14 max-w-4xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
            {medicalDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}

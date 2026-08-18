"use client";

import { Flag, Utensils, Dumbbell, Calendar, LineChart, MessageSquare } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Features() {
  const { title, subtitle, features } = landingData.featuresSection;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "flag":
        return <Flag className="w-5 h-5 text-gray-700" />;
      case "utensils":
        return <Utensils className="w-5 h-5 text-gray-700" />;
      case "dumbbell":
        return <Dumbbell className="w-5 h-5 text-gray-700" />;
      case "calendar":
        return <Calendar className="w-5 h-5 text-gray-700" />;
      case "chart":
        return <LineChart className="w-5 h-5 text-gray-700" />;
      case "bot":
        return <MessageSquare className="w-5 h-5 text-gray-700" />;
      default:
        return <Flag className="w-5 h-5 text-gray-700" />;
    }
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#fafcfb]">
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

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-gray-100/90 shadow-sm hover:shadow-md hover:border-emerald-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-emerald-50/80 border border-gray-100 flex items-center justify-center mb-6 transition-colors">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

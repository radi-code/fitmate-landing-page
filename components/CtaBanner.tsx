"use client";

import Link from "next/link";
import { Ban } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function CtaBanner() {
  const { title, subtitle, buttonText, buttonHref, subtext } = landingData.ctaBanner;

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#e3f6ec] to-[#edf9f3] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-center border border-emerald-100/60 shadow-sm relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-2 flex flex-col items-center gap-3">
              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#064e3b] hover:bg-[#033628] shadow-md hover:shadow-lg transition-all duration-200"
                id="bottom-cta-button"
              >
                {buttonText}
              </Link>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                <Ban className="w-3.5 h-3.5 text-gray-400" />
                <span>{subtext}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

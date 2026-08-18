"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Utensils, Activity, Target, Calendar } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Hero() {
  const { headline, subtitle, primaryCta, secondaryCta, previewCard } = landingData.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f6ed] via-[#f3f9f6] to-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 tracking-tight leading-[1.25] sm:leading-[1.2] whitespace-pre-line">
              {headline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#064e3b] hover:bg-[#033628] shadow-md hover:shadow-lg transition-all duration-200"
                id="hero-primary-cta"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200"
                id="hero-secondary-cta"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(6,78,59,0.08)] border border-emerald-100/80 transition-transform duration-300 hover:scale-[1.01]">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    {previewCard.targetText}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    {previewCard.weightProgress}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2dd4bf]/20 text-[#0f766e] border border-[#2dd4bf]/30">
                  <Calendar className="w-3.5 h-3.5" />
                  {previewCard.badge}
                </span>
              </div>

              {/* Card Item List */}
              <div className="space-y-3.5">
                {/* Weekly Goal */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#064e3b]">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">주간 목표</div>
                      <div className="text-sm font-bold text-gray-900">-0.6kg</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>

                {/* Today's Meal */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#064e3b]">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">오늘의 식단</div>
                      <div className="text-sm font-bold text-gray-900">고단백, 1400kcal</div>
                    </div>
                  </div>
                </div>

                {/* Today's Exercise */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8faf9] border border-gray-100 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#064e3b]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">오늘의 운동</div>
                      <div className="text-sm font-bold text-gray-900">홈트레이닝, 45분</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Pricing() {
  const { title, subtitle, monthlyLabel = "월간 결제", yearlyLabel = "연간 결제", yearlyDiscountText, plans } = landingData.pricingSection as typeof landingData.pricingSection & { monthlyLabel?: string; yearlyLabel?: string };
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#fafcfb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            {subtitle}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center justify-center gap-3">
            <span
              onClick={() => setIsYearly(false)}
              className={`text-sm font-semibold cursor-pointer transition-colors ${
                !isYearly ? "text-gray-900 font-bold" : "text-gray-500"
              }`}
            >
              {monthlyLabel}
            </span>

            {/* Switch button */}
            <button
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-[#064e3b] rounded-full p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              role="switch"
              aria-checked={isYearly}
              id="pricing-toggle-switch"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span
              onClick={() => setIsYearly(true)}
              className={`text-sm font-semibold cursor-pointer transition-colors inline-flex items-center gap-1.5 ${
                isYearly ? "text-gray-900 font-bold" : "text-gray-500"
              }`}
            >
              {yearlyLabel}
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#2dd4bf]/20 text-[#0f766e] border border-[#2dd4bf]/30">
                {yearlyDiscountText}
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const period = isYearly ? plan.periodYearly : plan.periodMonthly;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? "border-2 border-[#064e3b] shadow-xl shadow-emerald-950/5 ring-1 ring-[#064e3b] md:-translate-y-2"
                    : "border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#064e3b] text-white shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card Top */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                      {price}
                    </span>
                    {period && (
                      <span className="text-sm font-medium text-gray-500">
                        {period}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="border-t border-gray-100 pt-6 space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-gray-50 text-gray-300 flex items-center justify-center mt-0.5 shrink-0">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                        )}
                        <span
                          className={`text-xs sm:text-sm ${
                            feature.included ? "text-gray-700 font-medium" : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div>
                  {plan.ctaVariant === "primary" ? (
                    <button
                      type="button"
                      className="w-full py-3 px-5 rounded-full text-sm font-bold text-white bg-[#064e3b] hover:bg-[#033628] shadow transition-all cursor-pointer"
                    >
                      {plan.ctaText}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full py-3 px-5 rounded-full text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all cursor-pointer"
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

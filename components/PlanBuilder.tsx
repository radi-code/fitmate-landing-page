"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Footprints,
  Home,
  Dumbbell,
  Flame,
  ShieldCheck,
  Salad,
  Zap,
  UtensilsCrossed,
  Beef,
  Coins,
  Clock,
  X,
  ArrowRight,
} from "lucide-react";
import { landingData } from "@/data/landingData";

export default function PlanBuilder() {
  const { title, subtitle, durations, workoutStyles, jointAreas = [{ id: "waist", label: "허리" }, { id: "knee", label: "무릎" }], mealPreferences } = landingData.planBuilder;

  const [selectedDuration, setSelectedDuration] = useState<number>(4);
  const [customWeeks, setCustomWeeks] = useState<string>("6");
  const [currentWeight, setCurrentWeight] = useState<string>("65");
  const [targetWeight, setTargetWeight] = useState<string>("58");
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>(["walk", "home"]);
  const [selectedJointAreas, setSelectedJointAreas] = useState<string[]>(["waist"]);
  const [selectedMeals, setSelectedMeals] = useState<string[]>(["healthy", "high-protein"]);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const effectiveDuration = selectedDuration === 0 ? (parseInt(customWeeks) || 4) : selectedDuration;

  const calculateLoss = () => {
    const cur = parseFloat(currentWeight) || 65;
    const tgt = parseFloat(targetWeight) || 58;
    const diff = Math.max(0, cur - tgt);
    const weekly = (diff / Math.max(1, effectiveDuration)).toFixed(1);
    return { totalLoss: diff.toFixed(1), weeklyLoss: weekly };
  };

  const lossStats = calculateLoss();

  const toggleWorkout = (id: string) => {
    if (selectedWorkouts.includes(id)) {
      if (selectedWorkouts.length > 1) {
        setSelectedWorkouts(selectedWorkouts.filter((w) => w !== id));
      }
    } else {
      setSelectedWorkouts([...selectedWorkouts, id]);
    }
  };

  const toggleJointArea = (id: string) => {
    if (selectedJointAreas.includes(id)) {
      setSelectedJointAreas(selectedJointAreas.filter((a) => a !== id));
    } else {
      setSelectedJointAreas([...selectedJointAreas, id]);
    }
  };

  const toggleMeal = (id: string) => {
    if (selectedMeals.includes(id)) {
      if (selectedMeals.length > 1) {
        setSelectedMeals(selectedMeals.filter((m) => m !== id));
      }
    } else {
      setSelectedMeals([...selectedMeals, id]);
    }
  };

  const renderWorkoutIcon = (iconName: string) => {
    switch (iconName) {
      case "footprints":
        return <Footprints className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "home":
        return <Home className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "dumbbell":
        return <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "flame":
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "shield-check":
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const renderMealIcon = (iconName: string) => {
    switch (iconName) {
      case "salad":
        return <Salad className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "zap":
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "utensils":
        return <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "beef":
        return <Beef className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "coins":
        return <Coins className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "clock":
        return <Clock className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Salad className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const selectedWorkoutTitles = workoutStyles
    .filter((w) => selectedWorkouts.includes(w.id))
    .map((w) => {
      if (w.id === "joint-friendly" && selectedJointAreas.length > 0) {
        const areaLabels = jointAreas
          .filter((a) => selectedJointAreas.includes(a.id))
          .map((a) => a.label)
          .join("/");
        return `${w.title} (${areaLabels} 보호)`;
      }
      return w.title;
    })
    .join(", ");

  const selectedMealTitles = mealPreferences
    .filter((m) => selectedMeals.includes(m.id))
    .map((m) => m.title)
    .join(", ");

  return (
    <section id="plan-builder" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Title & Image Mockup */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Dashboard Mockup Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] bg-gray-50 group">
              <Image
                src="/images/dashboard-mockup.jpg"
                alt="FitMate AI 다이어트 대시보드 및 맞춤 플랜 시뮬레이션"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Interactive Plan Builder Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] space-y-7">
              
              {/* 1. Duration */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-bold text-gray-800">
                    다이어트 기간
                  </label>
                  {selectedDuration === 0 && (
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      직접 설정: {effectiveDuration}주
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {durations.map((dur) => {
                    const isSelected = selectedDuration === dur.value;
                    return (
                      <button
                        key={dur.label}
                        type="button"
                        onClick={() => setSelectedDuration(dur.value)}
                        className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center cursor-pointer ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/50 text-[#064e3b] ring-1 ring-emerald-600"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {dur.label}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Weeks Input */}
                {selectedDuration === 0 && (
                  <div className="mt-3.5 p-3.5 rounded-2xl bg-[#f8faf9] border border-emerald-100 flex items-center gap-3 animate-in fade-in duration-200">
                    <label htmlFor="custom-weeks" className="text-xs font-bold text-gray-700 shrink-0">
                      희망 기간 설정:
                    </label>
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        id="custom-weeks"
                        type="number"
                        min="1"
                        max="52"
                        value={customWeeks}
                        onChange={(e) => setCustomWeeks(e.target.value)}
                        placeholder="예: 6"
                        className="w-24 px-3 py-1.5 text-sm font-bold text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064e3b]"
                      />
                      <span className="text-xs font-semibold text-gray-600">주</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Weight Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="current-weight" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    현재 체중 (kg)
                  </label>
                  <input
                    id="current-weight"
                    type="number"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
                    placeholder="예: 65"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064e3b] focus:border-transparent text-sm font-medium text-gray-900 bg-gray-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="target-weight" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    목표 체중 (kg)
                  </label>
                  <input
                    id="target-weight"
                    type="number"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(e.target.value)}
                    placeholder="예: 58"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064e3b] focus:border-transparent text-sm font-medium text-gray-900 bg-gray-50/50"
                  />
                </div>
              </div>

              {/* 3. Workout Style (6 Items, 3 Cols Desktop / 2 Cols Mobile, Multi-select) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-gray-700">
                    선호하는 운동 스타일
                    <span className="text-[11px] font-normal text-emerald-700 ml-1.5">
                      (복수 선택 가능)
                    </span>
                  </label>
                  <span className="text-[11px] font-bold text-gray-500">
                    {selectedWorkouts.length}개 선택됨
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {workoutStyles.map((item) => {
                    const isSelected = selectedWorkouts.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleWorkout(item.id)}
                        className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[92px] ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/50 text-[#064e3b] ring-1 ring-emerald-600 shadow-xs"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-white text-[#064e3b] shadow-xs" : "bg-gray-100 text-gray-600"
                          }`}>
                            {renderWorkoutIcon(item.icon)}
                          </div>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold truncate leading-tight">{item.title}</div>
                          <div className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Sub-options for '관절에 무리 없게' (허리, 무릎) */}
                {selectedWorkouts.includes("joint-friendly") && (
                  <div className="mt-3 p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-200/70 flex flex-wrap items-center justify-between gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <span className="text-xs font-bold text-[#064e3b] flex items-center gap-1.5 shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      부담을 줄일 관절 부위:
                    </span>
                    <div className="flex items-center gap-2">
                      {jointAreas.map((area) => {
                        const isAreaSelected = selectedJointAreas.includes(area.id);
                        return (
                          <button
                            key={area.id}
                            type="button"
                            onClick={() => toggleJointArea(area.id)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                              isAreaSelected
                                ? "bg-[#064e3b] text-white shadow-xs ring-1 ring-[#064e3b]"
                                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {isAreaSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />}
                            {area.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Meal Preference (6 Items, 3 Cols Desktop / 2 Cols Mobile, Multi-select) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-gray-700">
                    식단 스타일
                    <span className="text-[11px] font-normal text-emerald-700 ml-1.5">
                      (복수 선택 가능)
                    </span>
                  </label>
                  <span className="text-[11px] font-bold text-gray-500">
                    {selectedMeals.length}개 선택됨
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {mealPreferences.map((item) => {
                    const isSelected = selectedMeals.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleMeal(item.id)}
                        className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[92px] ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/50 text-[#064e3b] ring-1 ring-emerald-600 shadow-xs"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-white text-[#064e3b] shadow-xs" : "bg-gray-100 text-gray-600"
                          }`}>
                            {renderMealIcon(item.icon)}
                          </div>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold truncate leading-tight">{item.title}</div>
                          <div className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Submit Button */}
              <button
                type="button"
                onClick={() => setIsGenerated(true)}
                className="w-full py-4 px-6 rounded-2xl text-base font-semibold text-white bg-[#064e3b] hover:bg-[#033628] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="generate-plan-btn"
              >
                <Sparkles className="w-5 h-5 text-emerald-300" />
                AI 맞춤 플랜 생성하기
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Generated Result Modal */}
      {isGenerated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 space-y-6 relative animate-in zoom-in-95 duration-200">
            
            <button
              type="button"
              onClick={() => setIsGenerated(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#064e3b] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">AI 맞춤 플랜 완성</span>
                <h3 className="text-xl font-black text-gray-900">당신만을 위한 {effectiveDuration}주 건강 플랜</h3>
              </div>
            </div>

            <div className="bg-[#f4faf7] rounded-2xl p-5 border border-emerald-100 space-y-3.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">총 감량 목표</span>
                <span className="font-bold text-gray-900">{currentWeight}kg → {targetWeight}kg ({lossStats.totalLoss}kg 감량)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">주당 권장 감량치</span>
                <span className="font-bold text-emerald-700">주당 -{lossStats.weeklyLoss}kg (건강한 속도)</span>
              </div>
              <div className="flex items-start justify-between text-sm gap-2">
                <span className="text-gray-600 shrink-0">선택 식단 스타일</span>
                <span className="font-bold text-gray-900 text-right">{selectedMealTitles || "맞춤 건강 식단"}</span>
              </div>
              <div className="flex items-start justify-between text-sm gap-2">
                <span className="text-gray-600 shrink-0">선택 운동 스타일</span>
                <span className="font-bold text-gray-900 text-right">{selectedWorkoutTitles || "맞춤 운동 루틴"}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsGenerated(false);
                  const pricingElem = document.getElementById("pricing");
                  if (pricingElem) pricingElem.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#064e3b] hover:bg-[#033628] shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                이 플랜으로 무료 시작하기 <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export interface MetricItem {
  id: string;
  icon: string;
  value: string;
  label: string;
  isMockData?: boolean;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: string;
  priceYearly: string;
  periodMonthly: string;
  periodYearly: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  ctaText: string;
  ctaVariant: 'primary' | 'outline';
}

export interface StepItem {
  id: string;
  step: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const landingData = {
  header: {
    brand: "IreFit",
    navLinks: [
      { label: "기능", href: "#features" },
      { label: "요금제", href: "#pricing" },
      { label: "로그인", href: "#login" },
    ],
    ctaButton: {
      label: "무료로 시작하기",
      href: "#plan-builder",
    },
  },

  hero: {
    headline: "무리한 다이어트 말고,\n나에게 맞는 플랜으로",
    subtitle: "다이어트 기간, 목표 체중, 운동 스타일, 식단 취향을 입력하면 AI가 나에게 맞는 맞춤 다이어트 플랜을 만들어줘요.",
    primaryCta: {
      label: "무료로 내 플랜 만들기",
      href: "#plan-builder",
    },
    secondaryCta: {
      label: "서비스 둘러보기",
      href: "#features",
    },
    previewCard: {
      badge: "12주",
      targetText: "목표",
      weightProgress: "65kg → 58kg",
      items: [
        {
          id: "goal",
          title: "주간 목표",
          subtitle: "-0.6kg",
          icon: "target",
        },
        {
          id: "meal",
          title: "오늘의 식단",
          subtitle: "고단백, 1400kcal",
          icon: "utensils",
        },
        {
          id: "exercise",
          title: "오늘의 운동",
          subtitle: "홈트레이닝, 45분",
          icon: "activity",
        },
      ],
    },
  },

  metrics: [
    {
      id: "personal-data",
      icon: "clipboard-list",
      value: "개인 데이터 4가지 분석",
      label: "기간·체중·운동·식단",
    },
    {
      id: "workout-types",
      icon: "dumbbell",
      value: "운동 유형 7종 추천",
      label: "걷기부터 근력운동까지",
    },
    {
      id: "meal-styles",
      icon: "salad",
      value: "식단 스타일 6종 선택",
      label: "건강식부터 초간단 식단까지",
    },
  ],

  featuresSection: {
    title: "당신만을 위한 스마트한 변화",
    subtitle: "AI가 분석하고 제안하는 체계적인 다이어트 솔루션",
    features: [
      {
        id: "goal-design",
        icon: "flag",
        title: "AI 목표 설계",
        description: "현실적이고 달성 가능한 최적의 체중 감량 목표와 타임라인을 AI가 제안합니다.",
      },
      {
        id: "meal-recommend",
        icon: "utensils",
        title: "맞춤 식단 추천",
        description: "개인의 취향과 알레르기를 고려하여 질리지 않는 맞춤 영양 식단을 구성해 드립니다.",
      },
      {
        id: "workout-plan",
        icon: "dumbbell",
        title: "맞춤 운동 플랜",
        description: "홈트레이닝부터 헬스장까지, 선호하는 운동 방식에 맞춘 루틴을 제공합니다.",
      },
      {
        id: "weekly-plan",
        icon: "calendar",
        title: "주간 다이어트 플랜",
        description: "매주 달성도를 바탕으로 다음 주의 식단과 운동 강도를 유연하게 조절합니다.",
      },
      {
        id: "progress-report",
        icon: "chart",
        title: "변화 리포트",
        description: "시각화된 데이터로 체중과 체지방의 변화를 한눈에 파악하고 동기를 부여받으세요.",
      },
      {
        id: "ai-coach",
        icon: "bot",
        title: "AI 다이어트 코치",
        description: "궁금한 점이 있다면 언제든 질문하세요. 24시간 대기 중인 AI 코치가 답변해 드립니다.",
      },
    ],
  },

  planBuilder: {
    title: "나만의 다이어트 플랜 만들기",
    subtitle: "간단한 정보 입력만으로 당신에게 꼭 맞는 건강한 다이어트 여정을 설계해 드립니다.",
    durations: [
      { label: "4주", value: 4 },
      { label: "8주", value: 8 },
      { label: "12주", value: 12 },
      { label: "직접 설정", value: 0 },
    ],
    workoutStyles: [
      { id: "walk", title: "걷기", desc: "일상 속 가볍게", icon: "footprints" },
      { id: "stretching", title: "스트레칭", desc: "몸을 부드럽게", icon: "sparkles" },
      { id: "home", title: "홈트", desc: "집에서 맨몸으로", icon: "home" },
      { id: "strength", title: "근력운동", desc: "근육량 늘리기", icon: "dumbbell" },
      { id: "cardio", title: "유산소", desc: "체지방 태우기", icon: "flame" },
      { id: "joint-friendly", title: "관절에 무리 없게", desc: "부담 부위 선택", icon: "shield-check" },
    ],
    jointAreas: [
      { id: "waist", label: "허리" },
      { id: "knee", label: "무릎" },
    ],
    mealPreferences: [
      { id: "healthy", title: "건강식", desc: "균형 잡힌 영양", icon: "salad" },
      { id: "quick-meal", title: "간편식", desc: "빠르고 손쉽게", icon: "zap" },
      { id: "home-cooked", title: "집밥", desc: "익숙한 한식 위주", icon: "utensils" },
      { id: "high-protein", title: "고단백 식단", desc: "근육량 유지", icon: "beef" },
      { id: "budget", title: "가성비 식단", desc: "부담 없는 재료로", icon: "coins" },
      { id: "ultra-simple", title: "초간단 식단", desc: "조리 최소화", icon: "clock" },
    ],
  },

  pricingSection: {
    title: "합리적인 플랜 선택하기",
    subtitle: "나에게 꼭 맞는 기능을 제공하는 플랜을 찾아보세요.",
    monthlyLabel: "월간 결제",
    yearlyLabel: "연간 결제",
    yearlyDiscountText: "2개월 무료",
    plans: [
      {
        id: "free",
        name: "Free",
        priceMonthly: "$0",
        priceYearly: "$0",
        periodMonthly: "/월",
        periodYearly: "/년",
        description: "다이어트 플랜의 기초를 세워보세요",
        features: [
          { text: "기본 칼로리 계산", included: true },
          { text: "기본 식단 추천", included: true },
          { text: "체중 기록", included: true },
          { text: "제한된 주간 플랜", included: true },
        ],
        ctaText: "무료로 시작하기",
        ctaVariant: "outline" as const,
      },
      {
        id: "pro",
        name: "Pro",
        badge: "가장 인기",
        isPopular: true,
        priceMonthly: "$14.90",
        priceYearly: "$149",
        periodMonthly: "/월",
        periodYearly: "/년",
        description: "더 체계적이고 세밀한 관리가 필요하다면",
        features: [
          { text: "무제한 AI 맞춤 식단", included: true },
          { text: "맞춤 운동 플랜", included: true },
          { text: "AI 다이어트 코칭", included: true },
          { text: "체중 변화 분석", included: true },
          { text: "주간 다이어트 리포트", included: true },
          { text: "개인 식단 취향 설정", included: true },
          { text: "주간 식단·운동 계획", included: true },
        ],
        ctaText: "Pro 시작하기",
        ctaVariant: "primary" as const,
      },
      {
        id: "premium",
        name: "Premium",
        priceMonthly: "$29.90",
        priceYearly: "$299",
        periodMonthly: "/월",
        periodYearly: "/년",
        description: "완벽한 건강 관리를 위한 최고의 선택",
        features: [
          { text: "Pro 전체 기능", included: true },
          { text: "고급 맞춤 AI 코칭", included: true },
          { text: "식단 자동 조정", included: true },
          { text: "상세 변화 리포트", included: true },
          { text: "개인별 운동 강도 조절", included: true },
          { text: "우선 지원", included: true },
        ],
        ctaText: "Premium 시작하기",
        ctaVariant: "outline" as const,
      },
    ],
  },

  stepsSection: {
    title: "이렇게 시작하세요",
    subtitle: "세 단계면 나에게 맞는 플랜이 완성됩니다",
    steps: [
      {
        id: "step-1",
        step: "1단계",
        stepNumber: "01",
        icon: "clipboard-list",
        title: "내 조건 입력하기",
        description: "다이어트 기간, 현재 체중과 목표 체중, 선호하는 운동과 식단 스타일을 선택합니다.",
      },
      {
        id: "step-2",
        step: "2단계",
        stepNumber: "02",
        icon: "sparkles",
        title: "AI가 플랜 설계",
        description: "입력한 조건을 분석해 무리하지 않는 주간 목표와 식단·운동 계획을 만들어 드립니다.",
      },
      {
        id: "step-3",
        step: "3단계",
        stepNumber: "03",
        icon: "calendar-check",
        title: "기록하며 조정하기",
        description: "매일의 기록을 바탕으로 다음 주 계획을 조정하고 변화를 확인할 수 있습니다.",
      },
    ],
    notice: "IreFit는 현재 서비스 출시를 준비 중입니다. 화면의 수치와 예시는 서비스 소개를 위한 것입니다.",
  },

  faqSection: {
    title: "자주 묻는 질문",
    subtitle: "궁금하신 점을 빠르게 해결해 드립니다.",
    faqs: [
      {
        id: "faq-1",
        question: "무료 플랜은 어떻게 이용할 수 있나요?",
        answer: "회원가입 후 별도의 결제 없이 바로 무료 플랜을 이용하실 수 있습니다. 기본 칼로리 계산, 식단 추천, 체중 기록, 제한된 주간 플랜 등 핵심 기능을 무료로 경험해 보실 수 있습니다. 더 체계적인 AI 맞춤 플랜이 필요하다면 Pro 플랜으로 언제든 업그레이드할 수 있습니다.",
      },
      {
        id: "faq-2",
        question: "다이어트 기간과 목표 체중을 직접 설정할 수 있나요?",
        answer: "네, 4주·8주·12주 중 원하는 기간을 선택하거나, '직접 설정' 버튼으로 원하는 주차를 직접 입력할 수 있습니다. 현재 체중과 목표 체중도 직접 입력하면 AI가 주당 권장 감량치와 맞춤 플랜을 자동으로 계산해 드립니다.",
      },
      {
        id: "faq-3",
        question: "건강식이나 간편식 등 원하는 식단을 선택할 수 있나요?",
        answer: "건강식, 간편식, 집밥, 고단백 식단, 가성비 식단, 초간단 식단 등 6가지 스타일 중 원하는 항목을 복수로 선택할 수 있습니다. 선택한 식단 스타일을 바탕으로 AI가 개인의 취향에 맞는 식단 계획을 제안해 드립니다.",
      },
      {
        id: "faq-4",
        question: "운동 종류를 직접 선택할 수 있나요?",
        answer: "걷기, 스트레칭, 홈트, 근력운동, 유산소 중 원하는 운동 스타일을 복수로 선택할 수 있습니다. 관절에 부담이 있는 경우 '관절에 무리 없게' 옵션을 선택한 뒤 허리·무릎 중 해당 부위를 추가로 지정하면, 해당 조건을 고려한 운동 루틴이 제안됩니다.",
      },
      {
        id: "faq-5",
        question: "언제든지 구독을 취소할 수 있나요?",
        answer: "네, 별도의 위약금이나 복잡한 절차 없이 마이페이지에서 언제든지 구독을 해지하거나 플랜을 변경할 수 있습니다. 구독을 해지하더라도 남은 결제 주기 동안에는 해당 플랜의 기능을 계속 이용하실 수 있습니다.",
      },
      {
        id: "faq-6",
        question: "내 건강 데이터는 안전하게 관리되나요?",
        answer: "IreFit는 사용자의 신체 정보와 건강 기록을 암호화해 보관하고, 동의 없이 제3자에게 제공하지 않을 예정입니다. 현재 서비스 출시를 준비 중이며, 정식 오픈 시 데이터 보호 정책을 별도로 안내해 드릴 예정입니다.",
      },
    ],
  },

  trustSection: {
    title: "안전하고 신뢰할 수 있는 헬스케어",
    subtitle: "사용자의 건강과 데이터를 최우선으로 생각합니다.",
    items: [
      {
        id: "trust-1",
        icon: "shield",
        title: "데이터 보호",
        description: "국제 표준 보안 프로토콜 적용",
      },
      {
        id: "trust-2",
        icon: "heart",
        title: "안전한 관리",
        description: "무리 가지 않는 건강한 감량",
      },
      {
        id: "trust-3",
        icon: "sparkles",
        title: "맞춤형 추천",
        description: "개인 신체 조건에 맞춘 알고리즘",
      },
      {
        id: "trust-4",
        icon: "target",
        title: "현실적 목표",
        description: "지속 가능한 웰니스 라이프 지향",
      },
    ],
    medicalDisclaimer: "* Medical Disclaimer: IreFit는 건강 관리 및 웰니스 보조 목적으로 설계된 서비스로, 의료진의 진단, 치료 또는 의학적 조언을 대체하지 않습니다. 특정 질환이 있거나 건강상 우려가 있는 경우 반드시 전문 의료진과 상담 후 이용하시기 바랍니다.",
  },

  ctaBanner: {
    title: "나에게 맞는 다이어트, 오늘부터 시작해보세요",
    subtitle: "식단부터 운동까지, IreFit가 매일의 실천을 함께합니다.",
    buttonText: "무료로 내 플랜 만들기",
    buttonHref: "#plan-builder",
    subtext: "신용카드 필요 없음 · 언제든지 취소 가능",
  },

  footer: {
    brand: "IreFit",
    links: [
      { label: "서비스", href: "#features" },
      { label: "요금제", href: "#pricing" },
      { label: "자주 묻는 질문", href: "#faq" },
      { label: "문의하기", href: "#contact" },
      { label: "이용약관", href: "#terms" },
      { label: "개인정보처리방침", href: "#privacy" },
    ],
    copyright: "© 2026 이레핏(IreFit). All rights reserved.",
  },
};

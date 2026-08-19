import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "이레핏 - 맞춤형 다이어트 플랜",
  description: "다이어트 기간, 목표 체중, 운동 스타일, 식단 취향을 입력하면 AI가 나에게 맞는 맞춤 다이어트 플랜을 만들어줘요.",
  keywords: ["다이어트", "AI 식단", "맞춤 운동", "건강관리", "IreFit", "헬스케어"],
  authors: [{ name: "IreFit AI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-zinc-900 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}

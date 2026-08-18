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
  title: "FitMate - AI 맞춤 다이어트·건강관리 솔루션",
  description: "무리한 다이어트 말고, 나에게 맞는 플랜으로. AI가 분석하고 제안하는 나만의 맞춤 다이어트 & 건강관리 SaaS 솔루션 FitMate.",
  keywords: ["다이어트", "AI 식단", "맞춤 운동", "건강관리", "FitMate", "헬스케어"],
  authors: [{ name: "FitMate AI" }],
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

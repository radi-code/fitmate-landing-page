"use client";

import Link from "next/link";
import { landingData } from "@/data/landingData";

export default function Footer() {
  const { brand, links, copyright } = landingData.footer;

  return (
    <footer className="bg-[#183931] text-white pt-14 pb-12 border-t border-[#122e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#294c44]">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-white hover:opacity-90 transition-opacity">
              {brand}
            </Link>
            <p className="text-[11px] leading-relaxed text-emerald-200/50 max-w-xs text-center md:text-left">
              &apos;이레&apos;는 7일을 뜻하는 우리말입니다. 일주일 단위로 나에게 맞는 플랜을 만들어갑니다.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-emerald-100/70">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/50">
          <div>{copyright}</div>
          <div className="text-[11px] text-emerald-200/40">
            Designed for health & wellness empowerment.
          </div>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navLinks, ctaButton } = landingData.header;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4faf7]/90 backdrop-blur-md border-b border-[#e2ece6]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-baseline gap-2.5">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#064e3b] hover:opacity-90 transition-opacity"
              id="brand-logo"
            >
              <span className="font-extrabold text-2xl tracking-tight text-[#064e3b]">
                {brand}
              </span>
            </Link>
            <span className="hidden sm:inline text-xs font-medium text-[#064e3b]/50">
              7일 맞춤 플랜
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#064e3b] transition-colors py-1"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={ctaButton.href}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#033628] shadow-sm transition-all duration-200 hover:shadow"
              id="nav-cta-button"
            >
              {ctaButton.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#064e3b] hover:bg-[#e2ece6]/50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e2ece6] bg-[#f4faf7] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#064e3b] hover:bg-[#e2ece6]/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={ctaButton.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-5 py-3 rounded-full text-base font-semibold text-white bg-[#064e3b] hover:bg-[#033628] shadow transition-all"
              >
                {ctaButton.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

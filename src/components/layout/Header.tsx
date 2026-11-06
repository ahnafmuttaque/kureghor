"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { Heart, Menu, X, Users, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/works", label: "মূল স্তম্ভ ও কার্যক্রম" },
    { href: "/transparency", label: "প্রভাব ও নিরীক্ষা প্রতিবেদন" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/contact", label: "যোগাযোগ ও প্রশ্নাবলি" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Announcement Ribbon */}
      <div className="bg-primary text-on-primary py-1.5 px-3 sm:px-4 text-center text-xs flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap leading-tight">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-semibold uppercase tracking-wide text-[10px] shrink-0">
          জরুরি আবেদন
        </span>
        <span className="font-medium text-[11px] sm:text-xs">
          শীতবস্ত্র ও শিক্ষা সহায়তা — ১০০% শিক্ষার্থী স্বেচ্ছাসেবক ও শূন্য
          প্রশাসনিক ব্যয়
        </span>
        <Link
          href="/donation"
          className="underline font-semibold hover:text-primary-fixed ml-1 transition-colors inline-flex items-center gap-1 text-[11px] sm:text-xs shrink-0"
        >
          সরাসরি অনুদান দিন <ArrowRight className="w-3 h-3 inline" />
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="h-16 md:h-20 bg-surface/95 backdrop-blur-xl border-b border-surface-container-high/40">
        <div className="h-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0">
              কুঁ
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-lg sm:text-xl md:text-2xl text-primary tracking-tight font-bold leading-tight">
                {FOUNDATION_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-on-surface-variant tracking-wide hidden sm:block">
                অলাভজনক ও অরাজনৈতিক শিক্ষার্থী উদ্যোগ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-primary bg-surface-container-low hover:bg-surface-container hover:text-primary transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>স্বেচ্ছাসেবক হোন</span>
            </Link>

            {/* Donation button: hidden on smaller/mobile screens (<640px), visible on sm and up */}
            <Link
              href="/donation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-on-secondary bg-secondary hover:bg-on-secondary-fixed-variant shadow-[0_4px_16px_rgba(144,77,0,0.2)] hover:shadow-[0_8px_24px_rgba(144,77,0,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>অনুদান দিন</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container shadow-xl">
          <div className="px-4 py-6 space-y-4 max-w-[1280px] mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-semibold transition-colors ${
                    isActive
                      ? "text-primary font-bold pl-2 border-l-4 border-primary"
                      : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-surface-container flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-primary bg-surface-container-low hover:bg-surface-container transition-colors"
              >
                স্বেচ্ছাসেবক হিসেবে যোগ দিন
              </Link>
              <Link
                href="/donation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full text-sm font-bold text-on-secondary bg-secondary hover:bg-on-secondary-fixed-variant shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>সরাসরি অনুদান দিন</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

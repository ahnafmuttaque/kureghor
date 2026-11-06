import { Metadata } from "next";
import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import {
  ShieldCheck,
  FileText,
  Landmark,
  Download,
  Eye,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "আর্থিক স্বচ্ছতা ও অডিট লেজার | কুঁড়েঘর ফাউন্ডেশন",
  description:
    "কুঁড়েঘর ফাউন্ডেশনের উন্মুক্ত আর্থিক নিরীক্ষা প্রতিবেদন, ভাউচার যাচাই নীতিমালা এবং শতভাগ স্বচ্ছতা কাঠামোর বিস্তারিত বিবরণ।",
  alternates: {
    canonical: "/transparency",
  },
};

export default function TransparencyPage() {
  const fin = FOUNDATION_INFO.financialTransparency;

  const pastAudits = [
    {
      period: "অর্থবছর ২০২৪–২৫ (বার্ষিক প্রতিবেদন)",
      auditor: "শিক্ষার্থী নিরীক্ষা প্যানেল ও উপদেষ্টা পরিষদ",
      status: "সম্পূর্ণ নিরীক্ষিত",
      beneficiaries: "৯৩টি পরিবার ও ১৫৫ শিক্ষার্থী",
      totalSpent: "৳১,৪৮,০০,০০০",
    },
    {
      period: "অক্টোবর ২০২৫ (অলিম্পিয়াড ও পাবলিকিয়ান সংবর্ধনা)",
      auditor: "ধুবনী কঞ্চিবাড়ি অডিট কমিটি",
      status: "ভাউচার প্রকাশিত",
      beneficiaries: "২৩ জন সংবর্ধিত",
      totalSpent: "৳১,৯৪০",
    },
    {
      period: "রমজান ১৪৪৬ / ২০২৫ (ঈদসামগ্রী বিতরণ)",
      auditor: "ইউনিয়ন সমন্বয় কমিটি",
      status: "ভাউচার প্রকাশিত",
      beneficiaries: "৯৩টি পরিবার",
      totalSpent: "৳২৩,৪০৫",
    },
    {
      period: "রমজান ১৪৪৫ / ২০২৪ (ঈদসামগ্রী বিতরণ)",
      auditor: "ফিল্ড অডিট সেল",
      status: "ভাউচার প্রকাশিত",
      beneficiaries: "৪৪টি পরিবার",
      totalSpent: "৳১২,৫০০",
    },
  ];

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>আস-সুন্নাহ ও জাগো ফাউন্ডেশন মডেল দ্বারা অনুপ্রাণিত</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            আমল ও আমানতের সর্বোচ্চ স্বচ্ছতা
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            আমরা বিশ্বাস করি, দাতাদের প্রতিটি পয়সা আল্লাহর পক্ষ থেকে এক পবিত্র আমানত। তাই কুঁড়েঘর ফাউন্ডেশনের প্রতিটি লেনদেনের ভাউচার, ক্রয় রসিদ ও বিতরণ তালিকার ছবি উন্মুক্ত রাখা হয়।
          </p>
        </div>

        {/* 0% Administrative Cost Pledge Banner */}
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs">
              <span className="font-headline text-4xl font-extrabold text-secondary-fixed block">
                {fin.fieldPrograms}
              </span>
              <span className="text-xs font-semibold text-primary-fixed mt-1 block">
                সরাসরি মাঠপর্যায়ে সামগ্রী ও সেবায়
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs">
              <span className="font-headline text-4xl font-extrabold text-secondary-fixed block">
                {fin.logistics}
              </span>
              <span className="text-xs font-semibold text-primary-fixed mt-1 block">
                শিক্ষার্থী পরিবহন ও মাঠ সমন্বয় ব্যয়
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs">
              <span className="font-headline text-4xl font-extrabold text-secondary-fixed block">
                ০%
              </span>
              <span className="text-xs font-semibold text-secondary-fixed mt-1 block">
                নির্বাহী বেতন বা রাজনৈতিক অপচয়
              </span>
            </div>
          </div>
        </div>

        {/* Audit Ledgers Table */}
        <div className="space-y-6">
          <div className="border-b border-surface-container pb-4">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              নিরীক্ষিত প্রতিবেদন ও ভাউচার আর্কাইভ
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1">
              যেকোনো দাতা বা শুভাকাঙ্ক্ষী সরাসরি প্রতিটি আয় ও ব্যয়ের হিসাব যাচাই করতে পারেন
            </p>
          </div>

          <div className="space-y-3">
            {pastAudits.map((a, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest rounded-2xl p-5 md:p-6 border border-surface-container flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-xs font-bold">
                      {a.status}
                    </span>
                    <h3 className="font-headline text-base md:text-lg font-bold text-on-surface">
                      {a.period}
                    </h3>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    নিরীক্ষক: {a.auditor} • সুবিধাভোগী: {a.beneficiaries}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-primary font-mono">
                    মোট ব্যয়: {a.totalSpent}
                  </span>
                  <Link
                    href="/works"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>ভাউচার লগ</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Accountability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-3xl p-6 border border-surface-container space-y-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-on-surface text-base">১. গণসম্মুখ সিদ্ধান্ত গ্রহণ</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              ক্যাম্পাসে অনুষ্ঠিত প্রকাশ্য সভায় সকল সদস্য ও ভলান্টিয়ারদের উপস্থিতিতে বাজেট অনুমোদন করা হয়।
            </p>
          </div>
          <div className="bg-surface-container-low rounded-3xl p-6 border border-surface-container space-y-2">
            <Lock className="w-6 h-6 text-secondary" />
            <h4 className="font-bold text-on-surface text-base">২. ব্যাংক টু ভাউচার ট্র্যাকিং</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              ব্যাংক এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিসের প্রতিটি স্টেটমেন্ট মিলিয়ে পাই-পাই হিসাব রাখা হয়।
            </p>
          </div>
          <div className="bg-surface-container-low rounded-3xl p-6 border border-surface-container space-y-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-on-surface text-base">৩. উন্মুক্ত অডিট অনুসন্ধান</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              যেকেউ যেকোনো লেনদেনের ভাউচার বা বিতরণকৃত পণ্যের ফটো প্রমাণ দেখতে চাইলে সরাসরি সরবরাহ করা হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

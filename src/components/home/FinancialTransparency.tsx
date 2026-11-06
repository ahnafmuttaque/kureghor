import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { ShieldCheck, FileText, Landmark, Download, Eye } from "lucide-react";

export default function FinancialTransparency() {
  const fin = FOUNDATION_INFO.financialTransparency;

  return (
    <section className="w-full py-16 md:py-20 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs mb-2 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>প্রাতিষ্ঠানিক স্বচ্ছতা ও দায়বদ্ধতা কাঠামো</span>
          </div>
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface mb-3">
            প্রতিটি টাকার হিসাব উন্মুক্ত, প্রতিটি ভাউচার প্রকাশিত
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant">
            আস-সুন্নাহ ফাউন্ডেশনের মতো স্বচ্ছতাভিত্তিক পথিকৃৎ উদ্যোগসমূহ থেকে
            অনুপ্রাণিত হয়ে, আমরা প্রতিটি দাতার আমানতকে সর্বোচ্চ ধর্মীয় ও নৈতিক
            দায়িত্ববোধের সাথে পরিচালনা করি।
          </p>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Donut Chart Representation */}
          <div className="lg:col-span-5 bg-surface-container-low rounded-3xl p-6 md:p-8 flex flex-col items-center text-center border border-surface-container">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">
              তহবিল বণ্টন অনুপাত (অর্থবছর ২০২৪–২৫)
            </h3>

            {/* SVG Donut Chart */}
            <div className="relative w-52 h-52 my-3">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                  className="text-surface-container"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                />
                {/* 92% Program Execution (Primary Green) */}
                <path
                  className="text-primary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="92, 100"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
                {/* 5% Logistics (Secondary Amber) */}
                <path
                  className="text-secondary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="5, 100"
                  strokeDashoffset="-92"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
                {/* 3% Platform Hosting */}
                <path
                  className="text-on-surface-variant"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="3, 100"
                  strokeDashoffset="-97"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-headline text-3xl font-extrabold text-primary">
                  {fin.fieldPrograms}
                </span>
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  সরাসরি মাঠে
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="w-full space-y-2.5 mt-4 text-left">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
                  <span className="text-on-surface font-semibold">
                    {fin.fieldPrograms} সরাসরি মাঠপর্যায়ে সেবা ও খাদ্যসামগ্রী
                  </span>
                </div>
                <span className="text-on-surface-variant font-bold">
                  {fin.fieldProgramsAmount}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary shrink-0"></span>
                  <span className="text-on-surface font-semibold">
                    {fin.logistics} শিক্ষার্থী পরিবহন ও মাঠ সমন্বয়
                  </span>
                </div>
                <span className="text-on-surface-variant font-bold">
                  {fin.logisticsAmount}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-on-surface-variant shrink-0"></span>
                  <span className="text-on-surface font-semibold">
                    {fin.itGateway} আইটি ও ডোমেইন/হোস্টিং ব্যয়
                  </span>
                </div>
                <span className="text-on-surface-variant font-bold">
                  {fin.itGatewayAmount}
                </span>
              </div>

              <div className="pt-2 text-center border-t border-surface-container">
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  ০% নির্বাহী বেতন • ০% রাজনৈতিক চাঁদা
                </span>
              </div>
            </div>
          </div>

          {/* Right: Real-time Statements & Downloadable Ledgers */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    স্বতন্ত্র বার্ষিক নিরীক্ষা প্রতিবেদন ২০২৪–২৫
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    প্রতিটি আয়-ব্যয়ের বিস্তারিত রশিদ ও ইনভয়েস লগসহ
                    প্রস্তুতকৃত প্রতিবেদন।
                  </p>
                </div>
              </div>
              <Link
                href="/transparency"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary text-xs font-bold shadow-xs transition-colors shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>রিপোর্ট দেখুন</span>
              </Link>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs shrink-0">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    সাম্প্রতিক অনুদান লেজার ও ব্যাংক স্টেটমেন্ট
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    সম্পূর্ণ অপরিবর্তিত ব্যাংক স্টেটমেন্ট ভাউচার ও ক্রয় ইনভয়েস
                    লগ।
                  </p>
                </div>
              </div>
              <Link
                href="/transparency"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary text-xs font-bold shadow-xs transition-colors shrink-0"
              >
                <Eye className="w-4 h-4" />
                <span>অনলাইন লেজার</span>
              </Link>
            </div>

            <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-primary">
                    উন্মুক্ত উপকারভোগী যাচাই নীতিমালা
                  </h5>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    প্রতিটি দাতা একটি নির্দিষ্ট ভেরিফিকেশন ভাউচার আইডি পান, যার
                    মাধ্যমে তারা আমাদের উন্মুক্ত অনলাইন অনুসন্ধান পোর্টালে
                    মাঠপর্যায়ে সামগ্রী বিতরণের ছবি, চিকিৎসাপ্রাপ্ত রোগীর তথ্য ও
                    বৃক্ষরোপণের জিপিএস ট্যাগ করা মানচিত্র সরাসরি যাচাই করতে
                    পারেন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

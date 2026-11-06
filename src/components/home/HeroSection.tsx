import Link from "next/link";
import DonationWidget from "./DonationWidget";
import { Shield, Sparkles, CheckCircle, Heart, School } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface-bright overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Ambient organic gradient background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vision & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 z-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-xs">
                <Shield className="w-3.5 h-3.5 fill-current" />
                <span>শিক্ষার্থী পরিচালিত মানবিক সংস্থা</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                <span>শীতকালীন খাদ্য ও শিক্ষা সহায়তা চলমান</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.2]">
              তারুণ্যের শক্তিতে সম্ভাবনার বিকাশ।
              <br />
              <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-8">
                নিঃস্বার্থ সেবায়
              </span>
              <br />
              আগামীর বাংলাদেশ।
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পরিচালিত ১০০% অরাজনৈতিক ও স্বেচ্ছাসেবী মানবিক উদ্যোগ। গাইবান্ধার সুন্দরগঞ্জ ও চরাঞ্চলে বিনামূল্যে প্রাথমিক চিকিৎসা, গণিত অলিম্পিয়াড, বৃক্ষরোপণ এবং যেকোনো দুর্যোগে সাধারণ মানুষের পাশে নিবেদিত।
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 py-1 text-on-surface-variant text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>১০০% শিক্ষার্থী স্বেচ্ছাসেবী</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>দলীয় রাজনীতিমুক্ত সনদ</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>উন্মুক্ত স্বচ্ছ অডিট লেজার</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/donation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>চলমান কার্যক্রমে অনুদান দিন</span>
              </Link>
              <a
                href="#varsity-chapters"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary text-sm font-bold transition-all"
              >
                <School className="w-4 h-4" />
                <span>ক্যাম্পাস চ্যাপ্টারসমূহ</span>
              </a>
            </div>

            {/* Micro Badge / Proof */}
            <div className="flex items-center gap-3 pt-2 text-on-surface-variant text-xs">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-[10px] shadow-sm">
                  ঢাবি
                </div>
                <div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary font-bold flex items-center justify-center text-[10px] shadow-sm">
                  বুয়েট
                </div>
                <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center text-[10px] shadow-sm">
                  রাবি
                </div>
                <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface font-bold flex items-center justify-center text-[10px] shadow-sm">
                  +৮
                </div>
              </div>
              <span className="font-medium">
                ১২টি জেলায় ১,৪০০+ শিক্ষার্থী ও ভলান্টিয়ার সরাসরি মাঠপর্যায়ে নিবেদিত।
              </span>
            </div>
          </div>

          {/* Right Column: Live Donation Box */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <DonationWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

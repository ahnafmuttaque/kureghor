import { Metadata } from "next";
import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import {
  ShieldCheck,
  Target,
  Sparkles,
  Users,
  MapPin,
  Building2,
  GraduationCap,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | কুঁড়েঘর ফাউন্ডেশন",
  description:
    "কুঁড়েঘর ফাউন্ডেশন (কুঁড়েঘর অ্যাসোসিয়েশন)-এর জন্ম, প্রেক্ষাপট, লক্ষ্য, মূল্যবোধ ও পাবলিক বিশ্ববিদ্যালয় শিক্ষার্থীদের স্বেচ্ছাসেবী নেটওয়ার্ক সম্পর্কে বিস্তারিত জানুন।",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "সম্পূর্ণ অরাজনৈতিক চেতনা",
      desc: "আমাদের সনদানুযায়ী কোনো রাজনৈতিক দলের লেজুড়বৃত্তি সম্পূর্ণ নিষিদ্ধ। ক্যাম্পাসের উন্মুক্ত সাধারণ সভায় শিক্ষার্থীদের সমমতের ভিত্তিতে সকল সিদ্ধান্ত গৃহীত হয়।",
      icon: ShieldCheck,
    },
    {
      title: "শূন্য প্রশাসনিক অপচয় (0% Salary)",
      desc: "আমাদের কোনো সদস্য, সংগঠক বা সমন্বয়ক কোনো সম্মানী বা প্রশাসনিক বেতন গ্রহণ করেন না। অনুদানের ৯২% অর্থ সরাসরি মাঠপর্যায়ে সামগ্রী ও সেবায় ব্যয়িত হয়।",
      icon: Target,
    },
    {
      title: "উন্মুক্ত অডিট ও পাবলিক লেজার",
      desc: "প্রতিটি টাকার জমা ও খরচের রশিদ, ভাউচার ও ব্যাংক স্টেটমেন্ট অনলাইন পোর্টালে উন্মুক্ত। যেকেউ যেকোনো সময় নিরীক্ষা করতে পারেন।",
      icon: Sparkles,
    },
    {
      title: "স্থানীয় স্বনির্ভরতা ও মেধা বিকাশ",
      desc: "শুধু ত্রাণ নয়, বরং গণিত অলিম্পিয়াড, ব্যবহারিক বিজ্ঞান কিট ও পাবলিক বিশ্ববিদ্যালয় মেন্টরশিপের মাধ্যমে গ্রামীণ শিক্ষার আমূল রূপান্তরে আমরা বিশ্বাসী।",
      icon: GraduationCap,
    },
  ];

  const unions = [
    { name: "কঞ্চিবাড়ি", role: "প্রাথমিক কেন্দ্র ও মূল ভলান্টিয়ার হাব" },
    { name: "পাচপীর", role: "নদীভাঙন ও চর সহায়তা সেল" },
    { name: "বেলকা", role: "চরাঞ্চল ও জরুরি ত্রাণ সেল" },
    { name: "মজুমদার", role: "কৃষি ও পরিবেশ বনায়ন শাখা" },
    { name: "শোভাগঞ্জ", role: "শিক্ষা ও মেন্টরশিপ কেন্দ্র" },
  ];

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>আমাদের পরিবর্তনের গল্প • ২০২১ থেকে নিরলস সেবায়</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            তারুণ্যের বিবেক ও দায়বদ্ধতায় গড়ে ওঠা এক আলোকবর্তিকা
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            {FOUNDATION_INFO.description} উত্তরবঙ্গের সুবিধাবঞ্চিত ও তিস্তা-ব্রহ্মপুত্র চর এলাকার মানুষের মৌলিক অধিকার ও শিক্ষাব্যবস্থার আধুনিকায়নে আমাদের এই পথচলা।
          </p>
        </div>

        {/* Milestone Impact Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-surface-container-low rounded-3xl p-6 md:p-8 border border-surface-container">
          <div className="text-center p-3">
            <span className="font-headline text-3xl md:text-4xl font-extrabold text-primary">
              {FOUNDATION_INFO.historicalMetrics.beneficiaries}
            </span>
            <span className="text-xs font-bold text-on-surface-variant block mt-1">
              উপকৃত মানুষ
            </span>
          </div>
          <div className="text-center p-3">
            <span className="font-headline text-3xl md:text-4xl font-extrabold text-secondary">
              {FOUNDATION_INFO.historicalMetrics.members}
            </span>
            <span className="text-xs font-bold text-on-surface-variant block mt-1">
              সদস্য ও সহযোগী
            </span>
          </div>
          <div className="text-center p-3">
            <span className="font-headline text-3xl md:text-4xl font-extrabold text-primary">
              {FOUNDATION_INFO.historicalMetrics.fundsRaised}
            </span>
            <span className="text-xs font-bold text-on-surface-variant block mt-1">
              সংগৃহীত অনুদান
            </span>
          </div>
          <div className="text-center p-3">
            <span className="font-headline text-3xl md:text-4xl font-extrabold text-secondary">
              {FOUNDATION_INFO.historicalMetrics.eventsCompleted}
            </span>
            <span className="text-xs font-bold text-on-surface-variant block mt-1">
              ইভেন্ট ও কার্যক্রম
            </span>
          </div>
        </div>

        {/* The Story & Genesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
              আমাদের সূচনা
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
              ২০২১ সালের এক সোনালী প্রত্যুষে যার শুরু
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              করোনাত্তোর ২০২১ সালে গাইবান্ধার সুন্দরগঞ্জের প্রত্যন্ত কঞ্চিবাড়ি ইউনিয়নের মাত্র ১১টি পরিবারের ঘরে ঈদের আনন্দ ভাগাভাগির সামান্য ১,১০০ টাকার বাজেট নিয়ে কুঁড়েঘরের প্রথম যাত্রা শুরু হয়েছিল। সেই বীজ আজ মহীরুহে পরিণত হয়ে দেশের ১২টি শীর্ষ পাবলিক বিশ্ববিদ্যালয়ের ১,৪০০+ শিক্ষার্থীর এক সমন্বিত শক্তিতে রূপ নিয়েছে।
            </p>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              আমরা উপলব্ধি করেছি, গ্রামীণ জনপদে শুধু মৌসুমি ত্রাণের চেয়ে বড় প্রয়োজন তরুণ প্রজন্মের আত্মবিশ্বাস জাগিয়ে তোলা, বিজ্ঞান ও গণিত শিক্ষার আলো ছড়িয়ে দেওয়া এবং দুর্যোগে নিজেদের পায়ে দাঁড়ানোর শক্তি যোগানো।
            </p>
          </div>

          <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-surface-container space-y-4">
            <h3 className="font-headline text-xl font-bold text-on-surface flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>মূল কর্ম এলাকা (গাইবান্ধা অঞ্চল)</span>
            </h3>
            <p className="text-xs md:text-sm text-on-surface-variant">
              প্রধান কার্যালয়: সুন্দরগঞ্জ (পোস্ট কোড: ৫৭২০), গাইবান্ধা। তিস্তা ও ব্রহ্মপুত্র অববাহিকার নদীভাঙন কবলিত যে ৫টি ইউনিয়নে আমাদের টিম সর্বদা সরাসরি কর্মরত:
            </p>
            <div className="space-y-2.5 pt-2">
              {unions.map((u) => (
                <div
                  key={u.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low text-xs border border-surface-container/60"
                >
                  <span className="font-bold text-primary flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    {u.name} ইউনিয়ন
                  </span>
                  <span className="text-on-surface-variant font-medium">{u.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Bento */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
              আমাদের আপসহীন মূল্যবোধ
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
              যে নীতিতে অবিচল থেকে কাজ করে কুঁড়েঘর
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-surface-container shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Institutional Partnership Policy */}
        <div className="bg-primary/5 rounded-3xl p-6 md:p-10 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold">
                <Building2 className="w-4 h-4" />
                <span>প্রাতিষ্ঠানিক সহযোগিতা ও অংশীদারিত্ব</span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface">
                শিক্ষা প্রতিষ্ঠান, সামাজিক সংস্থা ও কর্পোরেট অংশীদারদের সাথে যৌথ কার্যক্রম
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                কুঁড়েঘর ফাউন্ডেশন যেসকল প্রতিষ্ঠান ও সংগঠন নিঃস্বার্থ সমাজসেবা ও শিক্ষার মানোন্নয়নে বিশ্বাসী, তাদের সাথে যৌথ সমঝোতা স্মারকের ভিত্তিতে মাঠপর্যায়ে টেকসই প্রকল্প বাস্তবায়নে সদা প্রস্তুত।
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3 px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold text-center shadow-sm transition-all"
              >
                প্রাতিষ্ঠানিক যোগাযোগের আবেদন
              </Link>
              <Link
                href="/transparency"
                className="w-full py-3 px-5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary text-xs font-bold text-center border border-surface-container transition-all"
              >
                নিরীক্ষা প্রতিবেদন যাচাই করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

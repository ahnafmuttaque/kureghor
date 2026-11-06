"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/faqs";
import {
  MessageSquare,
  Newspaper,
  ChevronDown,
  HelpCircle,
  Quote,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function TestimonialsNews() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [faqCategory, setFaqCategory] = useState<string>("all");

  const testimonials = [
    {
      name: "মোঃ মাসুদুর রহমান",
      role: "প্রধান শিক্ষক, ধুবনী কঞ্চিবাড়ি উচ্চ বিদ্যালয়",
      text: "কুঁড়েঘর ফাউন্ডেশনের তরুণরা যেভাবে সুন্দরগঞ্জের সুবিধাবঞ্চিত চরাঞ্চলের শিক্ষার্থীদের মেধা বিকাশে অলিম্পিয়াড ও গণিত কর্মশালার আয়োজন করেছে, তা গ্রামীণ শিক্ষা প্রসারে অনন্য ভূমিকা রাখছে।",
    },
    {
      name: "মোঃ মাহবুব আলম",
      role: "অধ্যক্ষ, ধুবনী কঞ্চিবাড়ি ডিগ্রী কলেজ",
      text: "কোনো প্রকার দলীয় রাজনীতি ছাড়া সম্পূর্ণ শিক্ষার্থীদের নিজস্ব মেধা ও সততায় পরিচালিত এমন স্বচ্ছ মানবিক উদ্যোগ উত্তরবঙ্গে বিরল। তাদের প্রতিটি আয়োজনে সততার ছাপ স্পষ্ট।",
    },
    {
      name: "মোজাম্মেল হক",
      role: "সুবিধাভোগী অভিভাবক, কঞ্চিবাড়ি",
      text: "ঈদের আগে যখন সবার ঘরে আনন্দ থাকে, তখন আমাদের মতো দিনমজুর পরিবারের জন্য কুঁড়েঘরের দেওয়া ঈদের চাল-ডাল-তেলের প্যাকেট ছিল পরম আশীর্বাদ। আল্লাহ এই তরুণদের ভালো করুন।",
    },
  ];

  const newsItems = [
    {
      title: "সুন্দরগঞ্জে কুঁড়েঘর অ্যাসোসিয়েশনের ড্রিমার্স হান্ট স্কুল অলিম্পিয়াড ২০২৫ অনুষ্ঠিত",
      source: "দৈনিক শিক্ষা বার্তা • ০৫ অক্টোবর ২০২৫",
      summary: "১৫৫ জন শিক্ষার্থীর অংশগ্রহণে মেধা অন্বেষণ ও পাবলিক বিশ্ববিদ্যালয়ে চান্সপ্রাপ্ত ১৫ কৃতি শিক্ষার্থীকে বিশেষ সম্মাননা প্রদান।",
    },
    {
      title: "তিস্তা ও ব্রহ্মপুত্র অববাহিকায় কুঁড়েঘরের ঈদসামগ্রী বিতরণ কর্মসূচি সম্পন্ন",
      source: "উত্তরাঞ্চল সংবাদ • রমজান ১৪৪৬",
      summary: "সুন্দরগঞ্জের ৫টি ইউনিয়নের ৯৩টি অসচ্ছল পরিবারে খাদ্যপ্যাকেজ পৌঁছে দিল বিশ্ববিদ্যালয় শিক্ষার্থী দল।",
    },
    {
      title: "চরাঞ্চলের অসহায় মানুষের সেবায় কুঁড়েঘর ফাউন্ডেশনের ফ্রি মেডিকেল ক্যাম্প ২০২৬",
      source: "স্বাস্থ্য প্রতিদিন • বিশেষ প্রতিবেদন",
      summary: "সুন্দরগঞ্জের দুর্গম চর এলাকায় বিনামূল্যে স্বাস্থ্য পরীক্ষা ও বিশেষজ্ঞ চিকিৎসকের ব্যবস্থাপত্রসহ ওষুধ বিতরণ পরিকল্পনা।",
    },
  ];

  const filteredFaqs =
    faqCategory === "all" ? FAQS : FAQS.filter((f) => f.category === faqCategory);

  return (
    <section className="w-full py-16 md:py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-16">
        {/* Testimonials & Community Feedback */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs mb-2 font-bold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>মতামত ও জনমত</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                কুঁড়েঘর নিয়ে মানুষের অভিমত
              </h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant max-w-sm">
              স্থানীয় শিক্ষক, সুধীজন ও উপকারভোগীদের মুখে কুঁড়েঘরের নিঃস্বার্থ কাজের মূল্যায়ন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container flex flex-col justify-between hover:border-primary/40 transition-all group"
              >
                <Quote className="w-7 h-7 text-secondary fill-current opacity-60 mb-3" />
                <p className="text-xs md:text-sm text-on-surface leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-surface-container">
                  <h4 className="text-sm font-bold text-primary">{t.name}</h4>
                  <span className="text-[11px] text-on-surface-variant">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media & Press Coverage */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs mb-2 font-bold">
                <Newspaper className="w-3.5 h-3.5" />
                <span>নিউজ ও স্টোরিজ</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                আলোচনায় কুঁড়েঘর
              </h2>
            </div>
            <Link
              href="/works"
              className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>সকল কার্যক্রম ও প্রেস রিলিজ দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <div
                key={i}
                className="bg-surface-container-low rounded-2xl p-6 border border-surface-container hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-2">
                    {n.source}
                  </span>
                  <h3 className="font-headline text-base font-bold text-on-surface mb-2 hover:text-primary transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {n.summary}
                  </p>
                </div>
                <Link
                  href="/works"
                  className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline"
                >
                  <span>বিস্তারিত পড়ুন</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div className="bg-surface-container-low rounded-3xl p-6 md:p-10 border border-surface-container">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs mb-2 font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>জিজ্ঞাসিত প্রশ্নাবলি</span>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
              সচরাচর জিজ্ঞাসিত কিছু প্রশ্ন
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant">
              কুঁড়েঘর ফাউন্ডেশনের লক্ষ্য, কার্যক্রম ও অংশীদারিত্ব সম্পর্কিত উত্তর।
            </p>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <button
                type="button"
                onClick={() => setFaqCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  faqCategory === "all"
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                }`}
              >
                সকল প্রশ্ন
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("donation")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  faqCategory === "donation"
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                }`}
              >
                অনুদানের প্রশ্নাবলি
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("volunteer")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  faqCategory === "volunteer"
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                }`}
              >
                স্বেচ্ছাসেবক ও অংশগ্রহণ
              </button>
            </div>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "bg-surface-container-lowest border-primary/30 shadow-xs"
                      : "bg-surface-container-lowest/80 border-surface-container hover:border-surface-container-high"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-headline text-sm md:text-base font-bold text-on-surface"
                  >
                    <span>
                      {faq.id}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 md:px-5 md:pb-6 text-xs md:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
            >
              <span>আরো বিস্তারিত কোনো প্রশ্ন থাকলে যোগাযোগ পেজ দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

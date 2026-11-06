"use client";

import Link from "next/link";
import Image from "next/image";
import { CAMPAIGNS } from "@/data/campaigns";
import { toBanglaDigits } from "@/utils/formatters";
import { AlertCircle, ArrowRight, Heart } from "lucide-react";

export default function ActiveCampaigns() {
  const activeAndUpcoming = CAMPAIGNS.filter(
    (c) => c.status === "active" || c.status === "upcoming",
  ).slice(0, 4);

  return (
    <section
      className="w-full py-16 md:py-20 bg-surface-container-low"
      id="active-campaigns"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs mb-2 font-bold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>সক্রিয় ও আসন্ন তহবিল সংগ্রহ কার্যক্রম</span>
            </div>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface">
              জরুরি ও চলমান ক্যাম্পেইনসমূহ
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-on-surface-variant">
              আজকের লাইভ অডিট লেজার হালনাগাদকৃত
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeAndUpcoming.map((c) => {
            const raised = c.raisedAmount || 0;
            const target = c.targetAmount || 1;
            const progress =
              c.progressPercent || Math.round((raised / target) * 100);

            return (
              <div
                key={c.id}
                className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col border border-surface-container-high/40 group"
              >
                {/* Image Header with Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={c.image}
                    alt={c.altText || c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold shadow-xs">
                      {c.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-xs font-semibold shadow-xs">
                      {c.targetInfo}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-sm text-primary text-xs font-bold shadow-xs">
                    {c.stageInfo}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-2.5 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                      {c.description}
                    </p>

                    {/* Progress Bar & Amount */}
                    <div className="space-y-2 mb-6 bg-surface-container-low p-3.5 rounded-xl border border-surface-container/50">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-on-surface">
                          সংগৃহীত: ৳{toBanglaDigits(raised)}
                        </span>
                        <span className="text-on-surface-variant">
                          লক্ষ্যমাত্রা: ৳{toBanglaDigits(target)} (
                          {toBanglaDigits(progress)}%)
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 gap-3 flex-wrap border-t border-surface-container">
                    <div className="flex items-center gap-1.5">
                      <Link
                        href={`/donation?amount=500&cause=${encodeURIComponent(c.category)}`}
                        className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-colors"
                      >
                        +৳৫০০
                      </Link>
                      <Link
                        href={`/donation?amount=1000&cause=${encodeURIComponent(c.category)}`}
                        className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-colors"
                      >
                        +৳১,০০০
                      </Link>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/works/${c.slug}`}
                        className="px-4 py-2 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-colors"
                      >
                        বিস্তারিত
                      </Link>
                      <Link
                        href={`/donation?cause=${encodeURIComponent(c.category)}`}
                        className="px-4 py-2 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span>অনুদান দিন</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest hover:bg-surface-container border border-surface-container text-primary text-sm font-bold shadow-sm transition-all"
          >
            <span>সম্পন্ন ও পূর্ববর্তী সকল কার্যক্রমের আর্কাইভ দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

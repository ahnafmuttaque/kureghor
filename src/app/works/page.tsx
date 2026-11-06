import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CAMPAIGNS } from "@/data/campaigns";
import { toBanglaDigits } from "@/utils/formatters";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের কার্যক্রম ও প্রজেক্টসমূহ | কুঁড়েঘর ফাউন্ডেশন",
  description:
    "কুঁড়েঘর ফাউন্ডেশনের সকল শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ ও ঈদ খাদ্যসামগ্রী বিতরণ কর্মসূচির পূর্ণাঙ্গ তালিকা, বাজেট বিবরণী ও উপকারভোগীর সংখ্যা।",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage() {
  const upcomingCampaigns = CAMPAIGNS.filter((c) => c.status === "upcoming");
  const completedCampaigns = CAMPAIGNS.filter(
    (c) => c.status === "completed" || c.status === "active",
  );

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>কার্যক্রম আর্কাইভ • ২০২১ থেকে চলমান</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            মাঠপর্যায়ে আমাদের প্রতিটি উদ্যোগের স্বচ্ছ দলিল
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            কুঁড়েঘর ফাউন্ডেশন যেসকল বিষয়ে কাজ করে—শিক্ষা ও গণিত অলিম্পিয়াড,
            বিনামূল্যে চিকিৎসা সেবা, নদীভাঙন রক্ষা বনায়ন এবং অবহেলিত মানুষের
            সাথে উৎসবের আনন্দ ভাগাভাগি করার কর্মসূচি।
          </p>
        </div>

        {/* Upcoming Section (2026) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-surface-container pb-3">
            <Clock className="w-5 h-5 text-secondary" />
            <h2 className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              আসন্ন কার্যক্রমসমূহ (২০২৬)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingCampaigns.map((c) => (
              <div
                key={c.id}
                className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-surface-container">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold">
                        {c.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-on-surface text-xs font-semibold">
                        {c.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container flex items-center justify-between gap-3">
                  <Link
                    href={`/works/${c.slug}`}
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>পরিকল্পনা বিস্তারিত</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/donation?cause=${encodeURIComponent(c.category)}`}
                    className="px-4 py-2 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>অগ্রিম অনুদান দিন</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects Archive */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-surface-container pb-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <h2 className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              পূর্বের সফল কার্যক্রমসমূহ (২০২১–২০২৫)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCampaigns.map((c) => (
              <div
                key={c.id}
                className="bg-surface-container-lowest rounded-2xl border border-surface-container shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
              >
                <div className="relative h-48 w-full bg-surface-container">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[11px] font-bold">
                      {c.year}
                    </span>
                  </div>
                  {c.beneficiariesCount && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-[11px] font-bold">
                      {toBanglaDigits(c.beneficiariesCount)} টি পরিবার /
                      অংশগ্রাহক
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-1">
                      {c.category}
                    </div>
                    <h3 className="font-headline text-base font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                    <span className="text-on-surface-variant font-medium">
                      স্ট্যাটাস:{" "}
                      <strong className="text-primary font-bold">
                        {c.badge}
                      </strong>
                    </span>
                    <Link
                      href={`/works/${c.slug}`}
                      className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>বিস্তারিত রিপোর্ট</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

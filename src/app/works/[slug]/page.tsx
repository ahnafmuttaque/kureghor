import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CAMPAIGNS } from "@/data/campaigns";
import { toBanglaDigits } from "@/utils/formatters";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Receipt,
  Heart,
  ArrowLeft,
  Share2,
  PackageCheck,
  UserCheck,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const campaign = CAMPAIGNS.find((c) => c.slug === params.slug);
  if (!campaign) {
    return { title: "কার্যক্রম পাওয়া যায়নি" };
  }

  return {
    title: `${campaign.title} | কুঁড়েঘর ফাউন্ডেশন`,
    description: campaign.description,
    openGraph: {
      title: `${campaign.title} | কুঁড়েঘর ফাউন্ডেশন`,
      description: campaign.description,
      images: [{ url: campaign.image }],
    },
  };
}

export default function CampaignDetailPage({ params }: Props) {
  const campaign = CAMPAIGNS.find((c) => c.slug === params.slug);

  if (!campaign) {
    notFound();
  }

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-10">
        {/* Breadcrumb Back */}
        <div>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>সকল কার্যক্রমে ফিরে যান</span>
          </Link>
        </div>

        {/* Title & Metadata Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold">
              {campaign.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface text-xs font-semibold">
              বছর: {campaign.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
              {campaign.badge}
            </span>
          </div>

          <h1 className="font-headline text-2xl md:text-4xl font-extrabold text-on-surface leading-snug">
            {campaign.title}
          </h1>

          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {campaign.description}
          </p>

          {(campaign.date || campaign.venue) && (
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-primary pt-2">
              {campaign.date && (
                <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>তারিখ: {campaign.date}</span>
                </div>
              )}
              {campaign.venue && (
                <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>স্থান: {campaign.venue}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="relative h-72 md:h-96 w-full rounded-3xl overflow-hidden shadow-md bg-surface-container">
          <Image
            src={campaign.image}
            alt={campaign.altText || campaign.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>

        {/* Breakdown of Beneficiaries by Union/Area if present */}
        {campaign.beneficiariesBreakdown && (
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-surface-container space-y-4">
            <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              <span>সুবিধাভোগী এলাকাভিত্তিক তালিকা</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {campaign.beneficiariesBreakdown.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-lowest text-xs font-semibold border border-surface-container"
                >
                  <span className="text-on-surface">{b.area}</span>
                  <span className="text-primary font-bold">{b.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Distributed Goods Package if present */}
        {campaign.goodsDistributed && (
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 border border-surface-container space-y-4 shadow-xs">
            <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-primary" />
              <span>প্রতিটি পরিবারে প্রদত্ত খাদ্যসামগ্রী প্যাকেজ</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {campaign.goodsDistributed.map((g, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-surface-container-low text-center border border-surface-container/60"
                >
                  <span className="text-xs font-semibold text-on-surface block mb-0.5">
                    {g.name}
                  </span>
                  <span className="text-xs font-bold text-secondary">
                    {g.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget & Accounts Ledger if present */}
        {campaign.budgetSummary && (
          <div className="bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/20 space-y-4">
            <h3 className="font-headline text-lg md:text-xl font-bold text-primary flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              <span>বাজেট ও আয়-ব্যয় বিবরণী</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container">
                <span className="text-xs text-on-surface-variant font-medium block mb-1">
                  বিভিন্ন মাধ্যমে মোট আয়
                </span>
                <span className="font-headline text-xl font-bold text-primary">
                  {campaign.budgetSummary.income}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container">
                <span className="text-xs text-on-surface-variant font-medium block mb-1">
                  বিভিন্ন খাতে মোট ব্যয়
                </span>
                <span className="font-headline text-xl font-bold text-secondary">
                  {campaign.budgetSummary.expense}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container">
                <span className="text-xs text-on-surface-variant font-medium block mb-1">
                  অবশিষ্ট তহবিল
                </span>
                <span className="font-headline text-xl font-bold text-on-surface">
                  {campaign.budgetSummary.remaining}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Honorable Guests if present */}
        {campaign.guests && (
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-surface-container space-y-4">
            <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-secondary" />
              <span>আমন্ত্রিত সুধীজন ও অতিথিবৃন্দ</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {campaign.guests.map((guest, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-surface-container-lowest text-xs border border-surface-container flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                    {toBanglaDigits(i + 1)}
                  </span>
                  <div>
                    <h5 className="font-bold text-on-surface text-sm">
                      {guest.name}
                    </h5>
                    <span className="text-on-surface-variant">
                      {guest.designation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Call to Action */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 border border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="font-headline text-lg font-bold text-on-surface mb-1">
              আগামী কার্যক্রমে অংশীদার হতে চান?
            </h4>
            <p className="text-xs text-on-surface-variant">
              আপনার সামান্য অনুদান বা স্বেচ্ছাসেবক হিসেবে যোগদান সুবিধাবঞ্চিতদের
              জীবন বদলে দিতে পারে।
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/donation"
              className="px-6 py-3 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-xs font-bold shadow-sm transition-all flex items-center gap-2 hover:scale-105"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>অনুদান প্রদান করুন</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

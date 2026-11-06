"use client";

import { useState } from "react";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { toBanglaDigits } from "@/utils/formatters";
import {
  Heart,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  Receipt,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function DonationPage() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [selectedCause, setSelectedCause] = useState<string>("শিক্ষা সহায়তা");
  const [amount, setAmount] = useState<number>(1000);

  const causes = [
    "শিশু শিক্ষা ও অলিম্পিয়াড",
    "ফ্রি মেডিকেল ক্যাম্প ও ওষুধ",
    "উপকূলীয় বৃক্ষরোপণ অভিযান",
    "ঈদ সামগ্রী ও খাদ্য বিতরণ",
    "সাধারণ কল্যাণ তহবিল",
  ];

  const predefined = [500, 1000, 2500, 5000, 10000];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি কুঁড়েঘর ফাউন্ডেশনে ৳${amount} অনুদান পাঠিয়েছি।\nখাত: ${selectedCause}\nট্রানজেকশন আইডি / স্ক্রিনশট সংযুক্ত করছি।`,
  );

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>সরাসরি মানবিক অনুদান পোর্টাল</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            কুঁড়েঘর ফাউন্ডেশনকে অনুদান দিন
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            আপনার সহায়তায় কুঁড়েঘর ফাউন্ডেশন শিক্ষা, স্বাস্থ্যসেবা, মানবিক সহায়তা
            ও পরিবেশ উন্নয়নে সর্বদা অগ্রগামী ভূমিকা পালন করে। আসুন, আপনার
            সহমর্মিতার হাত বাড়িয়ে দিয়ে, একসাথে গড়ে তুলি আরও সুন্দর ও মানবিক
            সমাজ।
          </p>
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-surface-container-low rounded-3xl p-6 md:p-8 border border-surface-container text-center">
          <div>
            <span className="font-headline text-2xl md:text-3xl font-extrabold text-primary">
              {FOUNDATION_INFO.historicalMetrics.beneficiaries}
            </span>
            <span className="text-xs font-semibold text-on-surface-variant block mt-1">
              উপকৃত মানুষ
            </span>
          </div>
          <div>
            <span className="font-headline text-2xl md:text-3xl font-extrabold text-secondary">
              {FOUNDATION_INFO.historicalMetrics.members}
            </span>
            <span className="text-xs font-semibold text-on-surface-variant block mt-1">
              সদস্য ও সহযোগী
            </span>
          </div>
          <div>
            <span className="font-headline text-2xl md:text-3xl font-extrabold text-primary">
              {FOUNDATION_INFO.historicalMetrics.fundsRaised}
            </span>
            <span className="text-xs font-semibold text-on-surface-variant block mt-1">
              সংগৃহীত অনুদান
            </span>
          </div>
          <div>
            <span className="font-headline text-2xl md:text-3xl font-extrabold text-secondary">
              {FOUNDATION_INFO.historicalMetrics.eventsCompleted}
            </span>
            <span className="text-xs font-semibold text-on-surface-variant block mt-1">
              ইভেন্ট ও কার্যক্রম
            </span>
          </div>
        </div>

        {/* Step-by-Step Payment Instructions Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-surface-container shadow-sm space-y-8">
          <div className="border-b border-surface-container pb-4">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              অনুদানের নিয়মাবলি (Payment Methods)
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1">
              বিকাশ, নগদ বা রকেট অ্যাকাউন্ট থেকে সহজে সেন্ড মানি করুন
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shrink-0">
                ১
              </span>
              <div>
                <h4 className="text-sm md:text-base font-bold text-on-surface">
                  বিকাশ / নগদ / রকেট অ্যাপ বা ইউএসএসডি কোড ডায়াল করুন
                </h4>
                <p className="text-xs md:text-sm text-on-surface-variant mt-0.5">
                  মেনু থেকে{" "}
                  <strong className="text-primary font-bold">
                    Send Money (সেন্ড মানি)
                  </strong>{" "}
                  অপশন সিলেক্ট করুন।
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shrink-0">
                ২
              </span>
              <div className="w-full space-y-2">
                <h4 className="text-sm md:text-base font-bold text-on-surface">
                  সঠিকভাবে নিম্নোক্ত অফিশিয়াল নম্বরটি তুলুন:
                </h4>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-surface-container max-w-md">
                  <div>
                    <span className="text-xs text-on-surface-variant block">
                      bKash / Nagad / Rocket (Personal)
                    </span>
                    <span className="font-mono text-xl font-bold text-primary tracking-wider">
                      {FOUNDATION_INFO.donationAccounts.bkash}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(FOUNDATION_INFO.donationAccounts.bkash)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-colors shadow-xs"
                  >
                    {copiedNumber === FOUNDATION_INFO.donationAccounts.bkash ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>কপি হয়েছে</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>কপি করুন</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shrink-0">
                ৩
              </span>
              <div>
                <h4 className="text-sm md:text-base font-bold text-on-surface">
                  রেফারেন্স বক্সে প্রদান করুন (খুব গুরুত্বপূর্ণ)
                </h4>
                <div className="mt-1.5 p-3 rounded-xl bg-surface-container-low border border-surface-container/60 inline-block text-xs font-semibold">
                  <span>ফরম্যাট: </span>
                  <code className="text-primary font-mono font-bold bg-surface-container px-2 py-0.5 rounded">
                    ডাকনাম&lt;space&gt;জন্মসাল
                  </code>
                  <span className="text-on-surface-variant ml-2">
                    (উদাহরণ: <strong>Raju 2003</strong>)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Verification Notice */}
          <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-on-surface leading-relaxed">
              <strong>💡 ঐচ্ছিক বিষয়:</strong> নিম্নোক্ত বাটনটিতে ক্লিক করে
              বিকাশ/নগদ/রকেট থেকে অনুদান প্রদানের স্ক্রিনশট অথবা ট্রানজেকশন আইডি
              পাঠিয়ে আপনার অনুদান তৎক্ষণাৎ নিশ্চিত করতে পারেন।
            </div>
          </div>

          {/* Direct WhatsApp Confirmation Button */}
          <div className="pt-2">
            <a
              href={`https://wa.me/8801903444717?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#1fb355] text-white text-sm font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>হোয়াটসঅ্যাপে অনুদান নিশ্চিত করুন ও রসিদ পান</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Security & Audit Pledge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-5 border border-surface-container">
            <ShieldCheck className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-bold text-on-surface text-sm mb-1">
              ১০০% আমানত রক্ষা
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              আপনার দেওয়া প্রতিটি পয়সা সরাসরি মাঠপর্যায়ে নির্ধারিত খাতেই ব্যয়
              করা হয়।
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-5 border border-surface-container">
            <Receipt className="w-6 h-6 text-secondary mb-2" />
            <h4 className="font-bold text-on-surface text-sm mb-1">
              স্বচ্ছ অডিট ট্র্যাকিং
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              অনলাইনেই আয় ও ব্যয়ের সম্পূর্ণ লেজার প্রতিমাসে সবার জন্য উন্মুক্ত
              থাকে।
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-5 border border-surface-container">
            <Smartphone className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-bold text-on-surface text-sm mb-1">
              সরাসরি সাহায্য হেল্পলাইন
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              যেকোনো জিজ্ঞাসা বা কনফার্মেশনে ফোন করুন:{" "}
              {FOUNDATION_INFO.primaryPhone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

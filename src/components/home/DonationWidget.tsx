"use client";

import { useState } from "react";
import Link from "next/link";
import { toBanglaDigits } from "@/utils/formatters";
import {
  Heart,
  PiggyBank,
  BookOpen,
  Stethoscope,
  Trees,
  Handshake,
  Lock,
  Receipt,
  CheckCircle2,
} from "lucide-react";

export default function DonationWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [cause, setCause] = useState<string>("শিশু শিক্ষা");
  const [amount, setAmount] = useState<number>(1000);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const predefinedAmounts = [500, 1000, 2500, 5000];

  const causes = [
    { id: "education", name: "শিশু শিক্ষা", icon: BookOpen },
    { id: "medical", name: "বিনামূল্যে চিকিৎসা", icon: Stethoscope },
    { id: "tree", name: "বৃক্ষরোপণ", icon: Trees },
    { id: "general", name: "সাধারণ তহবিল", icon: Handshake },
  ];

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setIsCustom(false);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setAmount(val);
    setIsCustom(true);
  };

  return (
    <div className="relative bg-surface-container-lowest rounded-2xl shadow-xl p-6 md:p-8 border border-surface-container-high/50">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
        <div className="flex items-center gap-2">
          <PiggyBank className="w-6 h-6 text-secondary" />
          <h3 className="text-xl font-bold text-on-surface">
            দ্রুত অনুদান পোর্টাল
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary-fixed text-on-primary-fixed px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          ০% প্রশাসনিক খরচ
        </span>
      </div>

      {/* Frequency Switcher */}
      <div className="grid grid-cols-2 p-1 bg-surface-container-low rounded-xl mb-4 text-center">
        <button
          type="button"
          onClick={() => setFrequency("once")}
          className={`py-2 rounded-lg text-sm font-semibold transition-all ${
            frequency === "once"
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          এককালীন অনুদান
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`py-2 rounded-lg text-sm font-semibold transition-all ${
            frequency === "monthly"
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          মাসিক অনুদান
        </button>
      </div>

      {/* Cause Selector */}
      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
        অনুদান খাত নির্বাচন করুন
      </label>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {causes.map((c) => {
          const Icon = c.icon;
          const isSelected = cause === c.name;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setCause(c.name)}
              className={`text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                isSelected
                  ? "bg-surface-container text-primary ring-2 ring-primary shadow-xs"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <Icon className="w-4 h-4 text-primary shrink-0" />
              <span>{c.name}</span>
            </button>
          );
        })}
      </div>

      {/* Predefined Amounts */}
      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
        অনুদানের পরিমাণ (টাকা)
      </label>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {predefinedAmounts.map((amt) => {
          const isSelected = !isCustom && amount === amt;
          return (
            <button
              key={amt}
              type="button"
              onClick={() => handleAmountClick(amt)}
              className={`py-2 text-center rounded-xl text-sm font-bold transition-all ${
                isSelected
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              ৳{toBanglaDigits(amt)}
            </button>
          );
        })}
      </div>

      {/* Custom Amount Input */}
      <div className="relative mb-4">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-base">
          ৳
        </span>
        <input
          type="number"
          value={amount || ""}
          onChange={handleCustomChange}
          placeholder="নিজের পছন্দের পরিমাণ লিখুন"
          className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm font-semibold focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
        />
      </div>

      {/* Instant Payment Channels Preview */}
      <div className="mb-4">
        <div className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 flex justify-between items-center">
          <span>তাত্ক্ষণিক পেমেন্ট মাধ্যম</span>
          <span className="text-primary font-bold inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-primary" /> সরাসরি বিকাশ / নগদ
            / রকেট
          </span>
        </div>
        <div className="flex items-center justify-between gap-1.5 p-2 rounded-xl bg-surface-container-low">
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-bold text-[#D12053] shadow-xs">
            বিকাশ
          </span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-bold text-[#F7921E] shadow-xs">
            নগদ
          </span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-bold text-[#8C3494] shadow-xs">
            রকেট
          </span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-bold text-[#1A1F71] shadow-xs">
            কার্ড
          </span>
          <span className="px-2 py-1 rounded bg-surface-container-lowest text-[11px] font-bold text-primary shadow-xs">
            ব্যাংক
          </span>
        </div>
      </div>

      {/* Submit CTA */}
      <Link
        href={`/donation?amount=${amount}&cause=${encodeURIComponent(cause)}&freq=${frequency}`}
        className="w-full py-3.5 px-4 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
      >
        <Lock className="w-4 h-4" />
        <span>৳{toBanglaDigits(amount || 0)} অনুদান প্রদান করুন</span>
      </Link>

      <p className="text-center text-[11px] text-on-surface-variant mt-2.5 flex items-center justify-center gap-1">
        <Receipt className="w-3.5 h-3.5 text-primary" />
        <span>মানি রিসিট ও অডিট ট্র্যাকিং আইডি সাথে সাথে নিশ্চিত করা হয়।</span>
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { FAQS } from "@/data/faqs";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  UserPlus,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [faqCategory, setFaqCategory] = useState<string>("all");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    institution: "",
    interest: "ভলান্টিয়ার হিসেবে যোগ দিতে চাই",
    message: "",
  });

  const filteredFaqs =
    faqCategory === "all" ? FAQS : FAQS.filter((f) => f.category === faqCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-surface py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>আমাদের সঙ্গে যুক্ত হোন</span>
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            যোগাযোগ ও স্বেচ্ছাসেবক নিবন্ধন
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            নিচের ফর্মটি পূরণ করুন এবং আমাদের কেন্দ্রীয় টিম আপনার সাথে ১-২ কার্যদিবসের মধ্যে সরাসরি যোগাযোগ করবেন।
          </p>
        </div>

        {/* 4 Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container shadow-xs hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-headline text-base font-bold text-on-surface mb-1">
              🏢 প্রধান কার্যালয়
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              সুন্দরগঞ্জ (পোস্ট কোড: ৫৭২০), গাইবান্ধা, বাংলাদেশ।
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container shadow-xs hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container text-secondary flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-headline text-base font-bold text-on-surface mb-1">
              📞 সরাসরি মোবাইল
            </h4>
            <div className="text-xs text-on-surface-variant space-y-1">
              <p>
                <a href={`tel:${FOUNDATION_INFO.phones[0]}`} className="hover:text-primary font-semibold">
                  {FOUNDATION_INFO.phones[0]}
                </a>
              </p>
              <p>
                <a href={`tel:${FOUNDATION_INFO.phones[1]}`} className="hover:text-primary font-semibold">
                  {FOUNDATION_INFO.phones[1]}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container shadow-xs hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-headline text-base font-bold text-on-surface mb-1">
              📧 অফিশিয়াল ইমেইল
            </h4>
            <p className="text-xs text-on-surface-variant">
              <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-primary font-semibold break-all">
                {FOUNDATION_INFO.email}
              </a>
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container shadow-xs hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container text-secondary flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-headline text-base font-bold text-on-surface mb-1">
              ⌛ নিয়মিত কর্মঘণ্টা
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              সকাল ৮:০০টা — রাত ১২:০০টা (প্রতিদিন সরাসরি অ্যাক্টিভ হেল্পলাইন)
            </p>
          </div>
        </div>

        {/* Social & Direct Messaging Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Facebook */}
          <div className="bg-[#1877F2]/5 rounded-3xl p-6 md:p-8 border border-[#1877F2]/20 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold text-[#1877F2] uppercase tracking-wider block mb-1">
                সামাজিক যোগাযোগ মাধ্যম
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                আমাদের ফেসবুক পেইজ
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                আমাদের সাম্প্রতিক মাঠপর্যায়ের কার্যক্রম, ছবি, ভিডিও ও লাইভ আপডেট জানতে অফিসিয়াল ফেসবুক পেজে যুক্ত থাকুন।
              </p>
            </div>
            <a
              href={FOUNDATION_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1877F2] hover:bg-[#1567d3] text-white text-xs font-bold shadow-sm transition-all self-start"
            >
              <span>Follow on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#25D366]/5 rounded-3xl p-6 md:p-8 border border-[#25D366]/20 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider block mb-1">
                সরাসরি মেসেজিং
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                আমাদের অফিশিয়াল হোয়াটসঅ্যাপ
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                জরুরি রক্তের আবেদন, অনুদান ভেরিফিকেশন অথবা যেকোনো তথ্যের জন্য আমাদের সাথে সরাসরি হোয়াটসঅ্যাপে বার্তা পাঠান।
              </p>
            </div>
            <a
              href={FOUNDATION_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1fb355] text-white text-xs font-bold shadow-sm transition-all self-start"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Message on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Volunteer Application & Interactive Form */}
        <div className="bg-surface-container-low rounded-3xl p-6 md:p-12 border border-surface-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Volunteer Pitch */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                <UserPlus className="w-3.5 h-3.5" />
                <span>তরুণদের পদচারণায় আগামীর বাংলাদেশ</span>
              </div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface leading-tight">
                স্বেচ্ছাসেবক হিসেবে যোগ দিন
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                সামাজিক কাজে আগ্রহী যেকোনো স্কুল, কলেজ বা বিশ্ববিদ্যালয়ের শিক্ষার্থী আমাদের স্বেচ্ছাসেবী নেটওয়ার্কে যুক্ত হতে পারেন। এছাড়াও আপনি গুগল ফর্মের মাধ্যমেও সরাসরি আবেদন করতে পারেন।
              </p>

              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container space-y-2">
                <span className="text-xs font-bold text-primary block">গুগল ফর্ম লিংক:</span>
                <a
                  href={FOUNDATION_INFO.volunteerFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:underline"
                >
                  <span>অফিশিয়াল গুগল ফর্ম খুলুন</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2 text-xs text-on-surface-variant space-y-1">
                <p>• কোনো ধরনের রেজিস্ট্রেশন বা সদস্য ফি নেই।</p>
                <p>• ক্যাম্পাস চ্যাপ্টারের মাধ্যমে সার্টিফিকেট ও অভিজ্ঞতা অর্জনের সুযোগ।</p>
                <p>• সরাসরি চরাঞ্চল ও গ্রামীণ সুবিধাবঞ্চিতদের মুখে হাসি ফোটানোর তৃপ্তি।</p>
              </div>
            </div>

            {/* Right Column: Submission Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-6 md:p-8 border border-surface-container shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    ধন্যবাদ! আপনার আবেদন গৃহীত হয়েছে
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto">
                    কুঁড়েঘর ফাউন্ডেশনের সংশ্লিষ্ট চ্যাপ্টার সমন্বয়ক আগামী ১–২ কার্যদিবসের মধ্যে আপনার দেওয়া নম্বরে যোগাযোগ করবেন।
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-colors"
                  >
                    আরেকটি আবেদন পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    দ্রুত আবেদন বা বার্তা পাঠান
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                        আপনার পুরো নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="যেমন: তানভীর আহমেদ"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="যেমন: 01700-000000"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                        ইমেইল ঠিকানা
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mail@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                        শিক্ষাপ্রতিষ্ঠান / পেশা *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="যেমন: ঢাবি / গাইবান্ধা কলেজ"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      সম্পৃক্ততার ধরণ
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                    >
                      <option value="ভলান্টিয়ার হিসেবে যোগ দিতে চাই">ভলান্টিয়ার হিসেবে যোগ দিতে চাই</option>
                      <option value="প্রাতিষ্ঠানিক পার্টনারশিপ বা CSR সহায়তা">প্রাতিষ্ঠানিক পার্টনারশিপ বা CSR সহায়তা</option>
                      <option value="সাধারণ অনুদান বা পরামর্শ">সাধারণ অনুদান বা পরামর্শ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      আপনার বার্তা বা আগ্রহের ক্ষেত্র
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="আপনার জেলা, উপজেলা ও আগ্রহের কথা সংক্ষেপে লিখুন..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:outline-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>আবেদন সম্পন্ন করুন</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Complete 9 FAQs Section */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-surface-container">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs mb-2 font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>পূর্ণাঙ্গ প্রশ্নোত্তর</span>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
              সচরাচর জিজ্ঞাসিত প্রশ্নাবলি (FAQ)
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant">
              কুঁড়েঘর ফাউন্ডেশনের পরিচয়, স্বেচ্ছাসেবক নিয়মাবলী ও অনুদান সম্পর্কে যেকোনো প্রশ্নের পরিষ্কার উত্তর।
            </p>

            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <button
                type="button"
                onClick={() => setFaqCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  faqCategory === "all"
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                সকল প্রশ্ন (৯টি)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("donation")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  faqCategory === "donation"
                    ? "bg-primary text-on-primary shadow-xs"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
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
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                স্বেচ্ছাসেবক ও যোগদান
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "bg-surface-container-low border-primary/30 shadow-xs"
                      : "bg-surface-container-low/60 border-surface-container hover:border-surface-container-high"
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
        </div>

        {/* Closing Thank You Banner */}
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 text-center space-y-4 shadow-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
            <span>ধন্যবাদ আমাদের সাথে থাকার জন্য</span>
          </div>
          <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-on-primary">
            আমাদের ওয়েবসাইটটি পড়ার জন্য আন্তরিক ধন্যবাদ!
          </h2>
          <p className="text-xs md:text-sm text-primary-fixed max-w-xl mx-auto leading-relaxed">
            কুঁড়েঘর অ্যাসোসিয়েশন সবসময় মানুষের কল্যাণে কাজ করে যাচ্ছে। আপনার একটি ছোট সহযোগিতা বা অংশগ্রহণ কারো জীবনে ফুটিয়ে তুলতে পারে নতুন হাসি।
          </p>
          <div className="pt-2">
            <Link
              href="/donation"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>অসহায়দের পাশে দাঁড়ান</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

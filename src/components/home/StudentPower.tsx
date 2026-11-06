import Image from "next/image";
import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { ShieldCheck, Quote, ArrowRight } from "lucide-react";

export default function StudentPower() {
  return (
    <section className="w-full py-16 md:py-20 bg-surface" id="varsity-chapters">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">
              গণতান্ত্রিক ও বিকেন্দ্রীভূত
            </span>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface">
              পাবলিক বিশ্ববিদ্যালয় শিক্ষার্থীদের সম্মিলিত প্রয়াস
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              আমরা কোনো নির্বাহী বেতনে চালিত চিরাচরিত সংস্থা নই। আমরা ঢাকা বিশ্ববিদ্যালয়, বুয়েট, রাজশাহী বিশ্ববিদ্যালয়, চট্টগ্রাম বিশ্ববিদ্যালয়, শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় এবং জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের সেই শিক্ষার্থীরা—যারা বিশ্বাস করি আমাদের অর্জিত জ্ঞান ও মেধা দেশের গ্রামীণ গণমানুষের মৌলিক অধিকার নিশ্চিতকরণে ভূমিকা রাখবে।
            </p>

            <div className="p-4 rounded-2xl bg-surface-container-low flex items-start gap-4 border border-surface-container/60">
              <ShieldCheck className="w-7 h-7 text-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-on-surface mb-1">
                  দলীয় রাজনীতিমুক্ত সনদের অঙ্গীকার
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  আমাদের সংবিধিবদ্ধ সনদানুযায়ী কোনো সদস্যের কোনো রাজনৈতিক দলের সাথে সম্পৃক্ততা থাকে না। প্রতিটি সিদ্ধান্ত ক্যাম্পাসের প্রকাশ্য সাধারণ সভায় শিক্ষার্থীদের প্রত্যক্ষ ভোটাধিকার ও অংশগ্রহণে গৃহীত হয়।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Chapter Badges */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {FOUNDATION_INFO.universityChapters.map((ch) => (
              <div
                key={ch.name}
                className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-surface-container"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold font-headline text-base flex items-center justify-center mb-2">
                  {ch.shortName}
                </div>
                <span className="text-sm font-bold text-on-surface">{ch.name}</span>
                <span className="text-[11px] font-semibold text-secondary mt-0.5">{ch.role}</span>
                <span className="text-[11px] text-on-surface-variant mt-1">{ch.volunteers}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Testimonial Bento Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-surface-container-low rounded-3xl p-6 md:p-8 border border-surface-container">
          <div className="md:col-span-4 relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm bg-surface-container">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClh87GYMpCoevtIKehLWeGVNY7MTLu_1SoMPjSws7MjNX6YN7W0vrOwRQlntjBZBEEuL9FVXTgH5oW4sAxYnVXrXx1aC3sX2G2Qe7zvAggt_72lM-_ik53j5u8r8CnVv2suuwWI5nRU48TNeILdPl1P3EVP5vcCtG9e81ob5wsn-IVDxC64yHJd0TDaECUbtdCTXUsnIBakU0h9yxXJsGtCD1Xz91ZFtAgY0-_5Ro"
              alt="স্বেচ্ছাসেবক সমন্বয়ক"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm text-on-surface text-xs font-bold">
              নুসরাত জাহান • প্রধান সমন্বয়ক, ঢাবি উইং
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between h-full pl-0 md:pl-4 space-y-4">
            <Quote className="w-8 h-8 text-secondary fill-current opacity-80" />
            <p className="text-base md:text-lg text-on-surface font-normal italic leading-relaxed">
              &ldquo;যখন আমরা সুন্দরগঞ্জের দুর্গম চরে বিনামূল্যে ওষুধের বাক্স নিয়ে পৌঁছালাম, চরের মানুষ জিজ্ঞেস করেছিলেন কোন রাজনৈতিক দল আমাদের পাঠিয়েছে। যখন বললাম—&apos;কোনো দল না, আপনাদের নুন-ভাতের ট্যাক্সের টাকায় বিশ্ববিদ্যালয়ে পড়াশোনা করা আপনাদের সন্তান আমরা&apos;—তাদের চোখের সেই কৃতজ্ঞতা আমার জীবনের দৃষ্টিভঙ্গি চিরতরে বদলে দিয়েছে।&rdquo;
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-surface-container">
              <div>
                <h5 className="text-sm font-bold text-on-surface">
                  নুসরাত জাহান (সিএসই, ৪র্থ বর্ষ, ঢাবি)
                </h5>
                <span className="text-xs text-on-surface-variant">
                  ফিল্ড ডিরেক্টর, গ্রামীণ আউটরিচ সেল
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>আপনার ক্যাম্পাসে উইং শুরু করুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { UserPlus, Heart, Sparkles } from "lucide-react";

export default function CommunityBanner() {
  return (
    <section className="w-full py-16 md:py-20 bg-primary text-on-primary relative overflow-hidden">
      {/* Organic glowing gradient blobs */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary/25 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-secondary-fixed text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>আসন্ন কার্যক্রমে অংশগ্রহণ করুন</span>
              </span>
              <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-on-primary tracking-tight">
                আসুন, দেশের প্রত্যন্ত জনপদের মুখে হাসি ফোটাতে এগিয়ে আসি
              </h2>
              <p className="text-sm md:text-base text-primary-fixed max-w-xl leading-relaxed">
                আপনি দূরবর্তী চরে বিজ্ঞানের পাঠ পৌঁছে দিতে আগ্রহী শিক্ষার্থী হোন, স্বেচ্ছায় ফ্রি স্বাস্থ্যসেবা প্রদানকারী তরুণ চিকিৎসক হোন, কিংবা আমাদের মাঠপর্যায়ের সামগ্রী বিতরণে সহায়তাকারী শুভানুধ্যায়ী হোন—আপনার সহানুভূতিই আমাদের এগিয়ে চলার শক্তি।
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary text-sm font-bold text-center shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <UserPlus className="w-4 h-4" />
                <span>শিক্ষার্থী ভলান্টিয়ার হিসেবে নিবন্ধন করুন</span>
              </Link>
              <Link
                href="/donation"
                className="w-full py-3 px-6 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container-high text-sm font-bold text-center transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Heart className="w-4 h-4 fill-current text-secondary" />
                <span>আমাদের মাঠপর্যায়ের কার্যক্রমে সহায়তা করুন</span>
              </Link>
              <span className="text-center text-[11px] text-primary-fixed/80">
                কোনো নিবন্ধন ফি নেই। স্থানীয় সমন্বয়কগণ দ্রুত যোগাযোগ করবেন।
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

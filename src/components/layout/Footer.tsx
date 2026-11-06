import Link from "next/link";
import { FOUNDATION_INFO } from "@/data/foundationInfo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Identity & Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-lg shadow-sm">
                কুঁ
              </div>
              <span className="font-headline text-2xl text-primary font-bold">
                {FOUNDATION_INFO.name}
              </span>
            </Link>

            <p className="text-sm text-on-surface-variant leading-relaxed">
              পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের উদ্যোগে গড়ে ওঠা সম্পূর্ণ অরাজনৈতিক মানবিক প্রতিষ্ঠান। যুব উন্নয়ন, মানসম্মত শিক্ষা বিস্তার, জনস্বাস্থ্য সেবা ও পরিবেশ সুরক্ষায় নিবেদিতপ্রাণ।
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-primary text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>শূন্য প্রশাসনিক ব্যয় • শিক্ষার্থী দ্বারা নিরীক্ষিত</span>
            </div>

            <div className="pt-2 text-xs text-on-surface-variant space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{FOUNDATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{FOUNDATION_INFO.phones.join(" , ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{FOUNDATION_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{FOUNDATION_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Pillars & Programs (2 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              মূল স্তম্ভ ও কার্যক্রম
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="/works/olympiad-publician2025" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" />
                  <span>গণিত অলিম্পিয়াড ও সংবর্ধনা</span>
                </Link>
              </li>
              <li>
                <Link href="/works/free-medical2026" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" />
                  <span>ফ্রি মেডিকেল ক্যাম্প ২০২৬</span>
                </Link>
              </li>
              <li>
                <Link href="/works/tree-plantation-campaign" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" />
                  <span>উপকূলীয় বৃক্ষরোপণ কর্মসূচি</span>
                </Link>
              </li>
              <li>
                <Link href="/works/eid2026" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" />
                  <span>ঈদ সামগ্রী বিতরণ ২০২৬</span>
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" />
                  <span>সকল কার্যক্রমের আর্কাইভ (২০২১–২৫)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: University Chapters (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              ক্যাম্পাস উইং
            </h4>
            <p className="text-xs text-on-surface-variant">
              সক্রিয় শিক্ষার্থী প্রতিনিধি শাখা:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {FOUNDATION_INFO.universityChapters.map((ch) => (
                <span
                  key={ch.name}
                  className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface text-xs font-medium shadow-xs"
                >
                  {ch.name}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>আমাদের গঠনতন্ত্র দেখুন</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Col 4: Audit & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              উন্মুক্ত অডিট লেজার
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              প্রতি মাসের পূর্ণাঙ্গ আয়-ব্যয় হিসাব ও ব্যাংক স্টেটমেন্ট সরাসরি উন্মুক্ত রাখা হয়।
            </p>
            <div className="p-3 bg-surface-container-lowest rounded-xl border border-surface-container space-y-2">
              <div className="text-xs font-semibold text-primary flex items-center justify-between">
                <span>অর্থবছর ২০২৪–২৫ হিসাব</span>
                <span className="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full font-bold">
                  নিরীক্ষিত
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                ৯২% অনুদান সরাসরি উপকারভোগীর হাতে পৌঁছেছে। ০% নির্বাহী বেতন।
              </p>
              <Link
                href="/transparency"
                className="w-full text-center py-2 px-3 rounded-lg text-xs font-bold text-on-primary bg-primary hover:bg-primary-container transition-colors block"
              >
                অডিট লেজার পর্যালোচনা করুন
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>
            © ২০২৬ কুঁড়েঘর ফাউন্ডেশন (কুঁড়েঘর অ্যাসোসিয়েশন)। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/transparency" className="hover:text-primary transition-colors">
              ত্রৈমাসিক নিরীক্ষা
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              শিক্ষার্থী আচরণবিধি
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              দাতা গোপনীয়তা নীতি
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

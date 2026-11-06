import { Trees, GraduationCap, HeartPulse, Users2, ShieldCheck } from "lucide-react";

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: Trees,
      value: "১৮,৫০০+",
      label: "১২টি জেলায় রোপিত বৃক্ষ",
    },
    {
      icon: GraduationCap,
      value: "৪,২০০+",
      label: "মেন্টরশিপপ্রাপ্ত শিক্ষার্থী",
    },
    {
      icon: HeartPulse,
      value: "৯,৮০০+",
      label: "বিনামূল্যে সেবাগ্রহীতা রোগী",
    },
    {
      icon: Users2,
      value: "১,৪০০+",
      label: "সক্রিয় বিশ্ববিদ্যালয় ভলান্টিয়ার",
    },
    {
      icon: ShieldCheck,
      value: "১০০%",
      label: "উন্মুক্ত পাবলিক অডিট লেজার",
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-primary text-on-primary py-8 md:py-10 shadow-sm relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center ${
                  idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-6 h-6 text-secondary-fixed shrink-0" />
                  <span className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-primary">
                    {m.value}
                  </span>
                </div>
                <span
                  className={`text-xs font-semibold ${
                    m.highlight ? "text-secondary-fixed" : "text-primary-fixed"
                  }`}
                >
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

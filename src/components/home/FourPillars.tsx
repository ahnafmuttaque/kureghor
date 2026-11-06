import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { GraduationCap, HeartPulse, Leaf, PersonStanding } from "lucide-react";

export default function FourPillars() {
  const iconMap: Record<string, any> = {
    school: GraduationCap,
    medical_services: HeartPulse,
    eco: Leaf,
    directions_run: PersonStanding,
  };

  return (
    <section className="w-full py-16 md:py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
              আমাদের মূল অঙ্গীকার
            </span>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface">
              চারটি আপসহীন স্তম্ভের ওপর প্রতিষ্ঠিত
            </h2>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
            আমাদের প্রতিটি কার্যক্রম বিশ্ববিদ্যালয়ের শিক্ষার্থীদের মাধ্যমে পরিকল্পিত, নিরীক্ষিত ও পরিচালিত—কোনো দলীয় সম্পৃক্ততা বা প্রশাসনিক অপচয় ব্যতিরেকে।
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDATION_INFO.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || GraduationCap;
            return (
              <div
                key={pillar.id}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-surface-container-high/40 group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-secondary text-xs uppercase tracking-wider font-bold">
                    {pillar.number}
                  </span>
                  <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface mt-1 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 bg-surface-container-low rounded-xl p-3 border border-surface-container/60">
                  <span className="text-xs font-bold text-primary block mb-1.5">
                    মূল কার্যক্রম:
                  </span>
                  <ul className="text-xs text-on-surface-variant space-y-1">
                    {pillar.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';
import { ArrowDown, X, GraduationCap, Briefcase, Building2, Star } from 'lucide-react';

export function Graduates() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ink-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.graduates.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.graduates.heading}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {t.graduates.list.map((grad, i) => (
            <Reveal key={grad.name} delay={((i % 2) + 1) as 1 | 2}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-ink-100 hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-[1fr_1.5fr] gap-0">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={grad.image} alt={grad.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  {/* Content */}
                  <div className="p-5 lg:p-6 flex flex-col">
                    <h3 className="font-display text-xl text-ink-900 font-medium leading-tight">{grad.name}</h3>
                    <div className="text-sm text-ink-400 mt-1">{grad.year}</div>

                    {/* Journey */}
                    <div className="mt-4 space-y-2.5">
                      {[
                        { icon: GraduationCap, label: t.schoolInfo.shortName },
                        { icon: Building2, label: grad.university },
                        { icon: Briefcase, label: grad.profession },
                      ].map((step, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-ink-100 flex items-center justify-center">
                            <step.icon className="w-3.5 h-3.5 text-ink-600" strokeWidth={1.5} />
                          </div>
                          <span className="text-sm text-ink-600">{step.label}</span>
                          {j < 2 && <ArrowDown className="w-3 h-3 text-ink-300 ml-auto" />}
                        </div>
                      ))}
                    </div>

                    {/* Story */}
                    <div className="mt-4 pt-4 border-t border-ink-100">
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5 fill-accent-400" />
                        <p className="text-sm text-ink-500 italic leading-relaxed">{grad.story}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FutureMe() {
  const { t } = useLanguage();
  const [activeCareerIndex, setActiveCareerIndex] = useState<number | null>(null);

  const careers = t.futureCareers.careers;
  const active = activeCareerIndex !== null ? careers[activeCareerIndex] : null;

  return (
    <section className="relative bg-ink-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03]" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <Reveal className="text-center mb-16">
          <div className="section-label justify-center mb-4 text-accent-400">
            <span className="w-8 h-px bg-accent-400" />
            {t.futureCareers.label}
            <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
            {t.futureCareers.heading}
          </h2>
        </Reveal>

        {/* Career buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {careers.map((career, idx) => {
            const Icon = (Icons as never)[career.icon] as Icons.LucideIcon | undefined;
            const isActive = activeCareerIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCareerIndex(isActive ? null : idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30 scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                {career.name}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        {active && (
          <div className="max-w-2xl mx-auto bg-ink-900 rounded-3xl p-8 lg:p-10 border border-white/10 animate-scale-in">
            <button
              onClick={() => setActiveCareerIndex(null)}
              className="float-right w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
            <h3 className="font-display text-3xl text-white font-light tracking-tight mb-3">{active.name}</h3>
            <p className="text-white/70 leading-relaxed mb-6">{active.desc}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-2">{t.futureCareers.subjectsLabel}</div>
                <div className="text-sm text-white/80">{active.subjects}</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-2">{t.futureCareers.skillsLabel}</div>
                <div className="text-sm text-white/80">{active.skills}</div>
              </div>
            </div>

            <div className="p-5 bg-accent-500/10 border border-accent-500/20 rounded-2xl">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5 fill-accent-400" />
                <p className="text-white/90 italic leading-relaxed">{active.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

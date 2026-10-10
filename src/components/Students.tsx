import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';
import { Award, Star } from 'lucide-react';

export function Students() {
  const { t } = useLanguage();

  return (
    <section id="students" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.students.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.students.heading}
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
            {t.students.description}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.students.categories.map((cat, i) => {
            const Icon = (Icons as never)[cat.icon] as Icons.LucideIcon | undefined;
            return (
              <Reveal key={cat.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-white font-light tracking-tight mb-2">{cat.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Stars() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="relative bg-ink-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03]" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <Reveal className="text-center mb-16 lg:mb-20">
          <div className="section-label justify-center mb-4 text-accent-400">
            <span className="w-8 h-px bg-accent-400" />
            {t.students.starsLabel}
            <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
            {t.students.starsHeading}
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {t.students.starsSub}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.students.stars.map((star, i) => (
            <Reveal key={star.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group relative bg-ink-900 rounded-3xl overflow-hidden border border-white/5 hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={star.image}
                    alt={star.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-gold-500/90 backdrop-blur-sm rounded-full">
                    <Award className="w-4 h-4 text-ink-950" strokeWidth={2} />
                    <span className="text-xs font-bold text-ink-950 uppercase tracking-wider">{star.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-white font-medium">{star.name}</h3>
                  <div className="mt-1 text-sm text-white/50">{star.grade}</div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0 fill-accent-400" />
                      <div>
                        <div className="text-sm font-semibold text-white">{star.achievement}</div>
                        <div className="text-xs text-white/50 mt-0.5">{star.competition}</div>
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

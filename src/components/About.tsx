import { IMAGES } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { useReveal, useCountUp } from '@/hooks/useScroll';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Heart, Eye, Sparkles, LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  Heart,
  Eye,
  Sparkles,
};

function StatItem({ stat, index }: { stat: { value: number; suffix: string; label: string }; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(stat.value, 2000, visible);

  return (
    <div
      ref={ref}
      className="flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className="font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-tightest text-ink-900">
        {count.toLocaleString()}<span className="text-accent-500">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-ink-400">{stat.label}</div>
    </div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* About section */}
      <section id="about" className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <Reveal className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img src={IMAGES.schoolBuilding} alt={t.schoolInfo.name} className="w-full h-full object-cover" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-ink-900 text-white p-6 lg:p-8 rounded-2xl shadow-2xl max-w-xs">
                <div className="font-display text-5xl font-light text-accent-400">1998</div>
                <div className="mt-1 text-sm text-white/70">{t.about.estLabel}</div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm text-white/80">{t.schoolInfo.director}</div>
                  <div className="text-xs text-white/50 mt-0.5">{t.about.directorLabel}</div>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <div>
              <Reveal>
                <div className="section-label mb-4">
                  <span className="w-8 h-px bg-accent-500" />
                  {t.about.label}
                </div>
                <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl mb-6">
                  {t.about.heading}
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-lg text-ink-500 leading-relaxed mb-6">
                  {t.about.desc1}
                </p>
                <p className="text-lg text-ink-500 leading-relaxed mb-8">
                  {t.about.desc2}
                </p>
              </Reveal>

              {/* Values */}
              <div className="grid sm:grid-cols-2 gap-4">
                {t.about.values.map((v, i) => {
                  const Icon = ICON_MAP[v.iconName] || Target;
                  return (
                    <Reveal key={v.title} delay={((i % 2) + 1) as 1 | 2}>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-ink-50 hover:bg-ink-100 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="font-semibold text-ink-900 text-sm">{v.title}</div>
                          <div className="text-sm text-ink-500 mt-0.5">{v.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School in Numbers */}
      <section className="relative bg-ink-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03]" />
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
          <Reveal className="text-center mb-16 lg:mb-20">
            <div className="section-label justify-center mb-4 text-accent-400">
              <span className="w-8 h-px bg-accent-400" />
              {t.about.statsLabel}
              <span className="w-8 h-px bg-accent-400" />
            </div>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
              {t.about.statsHeading}
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {t.about.stats.map((stat, i) => (
              <StatItem key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

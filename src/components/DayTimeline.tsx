import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';

export function DayTimeline() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const schedule = t.dayTimeline.schedule;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { threshold: 0.7 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [schedule]);

  const active = schedule[activeIndex] || schedule[0];

  return (
    <section className="relative bg-ink-50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16 lg:mb-20">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.dayTimeline.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.dayTimeline.heading}
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
            {t.dayTimeline.description}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16">
          {/* Timeline list */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-ink-200 hidden sm:block" />

            <div className="space-y-2">
              {schedule.map((item, i) => {
                const Icon = (Icons as never)[item.icon] as Icons.LucideIcon | undefined;
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    onClick={() => setActiveIndex(i)}
                    className="relative flex items-center gap-4 sm:gap-5 w-full text-left group"
                  >
                    {/* Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all duration-500 hidden sm:flex items-center justify-center ${
                      isActive ? 'bg-accent-500 border-accent-500 scale-125' : 'bg-ink-50 border-ink-300 group-hover:border-ink-400'
                    }`}>
                      {isActive && <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-30" />}
                    </div>

                    <div className={`flex-1 flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                      isActive ? 'bg-white shadow-lg' : 'hover:bg-white/50'
                    }`}>
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-ink-900' : 'bg-ink-100'
                      }`}>
                        {Icon && <Icon className={`w-5 h-5 ${isActive ? 'text-accent-400' : 'text-ink-500'}`} strokeWidth={1.5} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-display text-2xl font-light tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-ink-900' : 'text-ink-400'
                        }`}>
                          {item.time}
                        </div>
                        <div className={`text-sm font-medium transition-colors duration-500 ${
                          isActive ? 'text-ink-700' : 'text-ink-400'
                        }`}>
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active content */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
              {schedule.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <div key={activeIndex} style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent-500 text-white text-sm font-bold rounded-full">{active.time}</span>
                    <span className="text-white/60 text-sm uppercase tracking-widest">{active.title}</span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed max-w-md">{active.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

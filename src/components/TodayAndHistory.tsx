import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { Clock } from 'lucide-react';

export function TodayAtSchool() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.todayAndHistory.todayLabel}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.todayAndHistory.todayHeading}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {t.todayAndHistory.todayEvents.map((event, i) => (
            <Reveal key={event.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                    {event.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-accent-400 text-sm font-semibold mb-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <h3 className="font-display text-xl text-white font-semibold mb-2">{event.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HistoryTimeline() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ink-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03]" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <Reveal className="text-center mb-16 lg:mb-20">
          <div className="section-label justify-center mb-4 text-accent-400">
            <span className="w-8 h-px bg-accent-400" />
            {t.todayAndHistory.historyLabel}
            <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
            {t.todayAndHistory.historyHeading}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {t.todayAndHistory.historyTimeline.map((item, i) => (
              <Reveal key={item.year} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="relative bg-ink-900 rounded-3xl p-6 border border-white/5 hover:border-accent-500/30 transition-all duration-500 group">
                  <div className="font-display text-4xl text-accent-400 font-light mb-4">{item.year}</div>
                  <h3 className="font-display text-lg text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

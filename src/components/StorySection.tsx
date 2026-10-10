import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export function StorySection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const conceptRefs = useRef<(HTMLDivElement | null)[]>([]);

  const concepts = t.story.concepts;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    conceptRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [concepts]);

  const active = concepts[activeIndex] || concepts[0];

  return (
    <section id="story" ref={sectionRef} className="relative bg-ink-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16 lg:mb-24">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.story.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.story.heading}
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-2xl">
            {t.story.description}
          </p>
        </Reveal>

        {/* Desktop: sticky image + scrolling concepts */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          {/* Sticky image */}
          <div className="sticky top-0 h-screen flex items-center">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              {concepts.map((concept, i) => (
                <img
                  key={i}
                  src={concept.image}
                  alt={concept.word}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="overflow-hidden">
                  <h3
                    key={activeIndex}
                    className="font-display text-6xl text-white font-light tracking-tightest"
                    style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards' }}
                  >
                    {active.word}
                  </h3>
                </div>
                <p
                  key={`desc-${activeIndex}`}
                  className="mt-3 text-white/80 text-lg leading-relaxed max-w-md"
                  style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards' }}
                >
                  {active.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling concepts */}
          <div className="flex flex-col">
            {concepts.map((concept, i) => (
              <div
                key={i}
                ref={(el) => { conceptRefs.current[i] = el; }}
                className="min-h-screen flex items-center"
              >
                <div className={`transition-all duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="text-7xl font-display font-light text-ink-200 mb-4">
                    0{i + 1}
                  </div>
                  <h3 className={`font-display text-5xl font-light tracking-tightest mb-4 transition-colors duration-500 ${i === activeIndex ? 'text-ink-900' : 'text-ink-400'}`}>
                    {concept.word}
                  </h3>
                  <p className="text-lg text-ink-500 leading-relaxed max-w-md">
                    {concept.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-8">
          {concepts.map((concept, i) => (
            <Reveal key={i} delay={(i % 3 + 1) as 1 | 2 | 3}>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <img src={concept.image} alt={concept.word} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-3xl font-display font-light text-white/40 mb-1">0{i + 1}</div>
                  <h3 className="font-display text-4xl text-white font-light tracking-tightest mb-2">{concept.word}</h3>
                  <p className="text-white/80 leading-relaxed">{concept.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

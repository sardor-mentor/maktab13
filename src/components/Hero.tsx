import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToAbout = () => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout2 = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${scrollY * 0.4}px) scale(${1.1 + scrollY * 0.0002})` }}
      >
        <img
          src={IMAGES.heroClassroom}
          alt={t.hero.badge}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="max-w-4xl">
          <div
            className="flex items-center gap-3 mb-6 opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s forwards' }}
          >
            <div className="w-12 h-px bg-accent-400" />
            <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </div>

          <h1
            className="display-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] opacity-0"
            style={{ animation: 'fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.4s forwards' }}
          >
            {t.hero.headingLine1}
            <br />
            <span className="text-accent-400 italic font-normal">{t.hero.headingLine2}</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s forwards' }}
          >
            {t.hero.description}
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.9s forwards' }}
          >
            <button
              onClick={scrollToAbout2}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-900 font-semibold rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-white" />
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        style={{ animation: 'fadeIn 1s ease 1.5s forwards', opacity: 0 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">{t.hero.scrollDown}</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white animate-scroll-dot" />
        </div>
        <ChevronDown className="w-4 h-4 -mt-1" />
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-50 to-transparent pointer-events-none" />
    </section>
  );
}

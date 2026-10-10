import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { IMAGES } from '@/data/content';
import { Play, Plus, Minus, Quote, X } from 'lucide-react';

export function StudentVoices() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.studentVoices.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.studentVoices.heading}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.studentVoices.voices.map((voice, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group relative bg-ink-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-500 border border-ink-100">
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <img src={voice.image} alt={voice.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900">{voice.name}</div>
                      <div className="text-xs text-accent-600 font-medium uppercase tracking-wider">{voice.topic}</div>
                    </div>
                  </div>
                  <Quote className="w-7 h-7 text-accent-300 mb-2" />
                  <p className="text-ink-600 leading-relaxed italic">"{voice.quote}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoIntro() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative bg-ink-950 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="text-center mb-12">
          <div className="section-label justify-center mb-4 text-accent-400">
            <span className="w-8 h-px bg-accent-400" />
            {t.videoIntro.label}
            <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
            {t.videoIntro.heading}
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            <img
              src={IMAGES.studentsGroup}
              alt="13-maktab"
              className={`w-full h-full object-cover transition-all duration-700 ${playing ? 'scale-110 blur-sm' : 'group-hover:scale-105'}`}
            />
            <div className="absolute inset-0 bg-ink-950/40" />

            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-20" />
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-ink-900 fill-ink-900 ml-1" />
                  </div>
                </div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/80">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-white/20 border-t-accent-500 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-white/70 text-sm">{t.videoIntro.buttonText}...</p>
                  <button
                    onClick={() => setPlaying(false)}
                    className="mt-4 flex items-center gap-2 text-white/50 hover:text-white text-sm"
                  >
                    <X className="w-4 h-4" /> Close
                  </button>
                </div>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-ink-950/90 to-transparent">
              <p className="text-white/80 text-lg max-w-xl">
                {t.videoIntro.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-ink-50 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-10">
        <Reveal className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.faq.label}
            <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'bg-white border-ink-200 shadow-sm' : 'bg-white border-ink-100 hover:border-ink-200'
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span className={`flex-1 font-display text-lg font-medium transition-colors ${isOpen ? 'text-ink-900' : 'text-ink-700'}`}>
                      {item.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-ink-900 rotate-180' : 'bg-ink-100'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-ink-600" />}
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="px-5 pb-5 pl-5">
                      <p className="text-ink-600 leading-relaxed">{item.a}</p>
                    </div>
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

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';
import { Plus, Minus } from 'lucide-react';

export function Parents() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="section-label mb-4">
                <span className="w-8 h-px bg-accent-500" />
                {t.parents.label}
              </div>
              <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
                {t.parents.heading}
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                {t.parents.description}
              </p>
              <div className="mt-8 p-6 bg-ink-50 rounded-2xl border border-ink-100">
                <div className="text-sm font-semibold text-ink-900 mb-2">{t.schoolInfo.directorTitle}</div>
                <div className="text-ink-600 text-sm">{t.schoolInfo.director}</div>
                <div className="mt-3 pt-3 border-t border-ink-200 text-sm text-ink-600">
                  {t.contact.phoneTitle}: <span className="font-semibold text-ink-900">{t.schoolInfo.phone}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {t.parents.infoList.map((item, i) => {
              const Icon = (Icons as never)[item.icon] as Icons.LucideIcon | undefined;
              const isOpen = openIndex === i;
              return (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className={`rounded-2xl border transition-all duration-300 ${
                    isOpen ? 'bg-ink-50 border-ink-200' : 'bg-white border-ink-100 hover:border-ink-200'
                  }`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 p-5 text-left"
                    >
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-ink-900' : 'bg-ink-100'
                      }`}>
                        {Icon && <Icon className={`w-5 h-5 ${isOpen ? 'text-accent-400' : 'text-ink-500'}`} strokeWidth={1.5} />}
                      </div>
                      <span className={`flex-1 font-display text-lg font-medium transition-colors ${isOpen ? 'text-ink-900' : 'text-ink-700'}`}>
                        {item.title}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-ink-900 rotate-180' : 'bg-ink-100'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-ink-600" />}
                      </div>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="px-5 pb-5 pl-20">
                        <p className="text-ink-600 leading-relaxed whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

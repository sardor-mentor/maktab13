import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';

export function Teachers() {
  const { t } = useLanguage();

  return (
    <section id="teachers" className="relative bg-ink-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.teachers.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.teachers.heading}
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
            {t.teachers.description}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.teachers.teachersList.map((teacher, i) => (
            <Reveal key={teacher.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-ink-100 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900 leading-snug">{teacher.name}</h3>
                      <div className="text-sm font-semibold text-accent-600 mt-0.5">{teacher.subject}</div>
                      <div className="text-xs text-ink-400 mt-0.5">{teacher.position}</div>
                    </div>
                  </div>
                  <div className="relative pt-4 border-t border-ink-100">
                    <Quote className="w-6 h-6 text-accent-400/40 mb-2" />
                    <p className="text-ink-600 text-sm leading-relaxed italic">
                      "{teacher.quote}"
                    </p>
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

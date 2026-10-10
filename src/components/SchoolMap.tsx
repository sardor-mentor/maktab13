import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import * as Icons from 'lucide-react';
import { MapPin, X } from 'lucide-react';

export function SchoolMap() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const locations = t.schoolMap.locations;
  const active = locations.find((l) => l.id === activeId);

  return (
    <section className="relative bg-ink-950 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03]" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4 text-accent-400">
            <span className="w-8 h-px bg-accent-400" />
            {t.schoolMap.label}
          </div>
          <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-white">
            {t.schoolMap.heading}
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            {t.schoolMap.description}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
          {/* Map */}
          <Reveal>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-ink-900 border border-white/10">
              {/* Stylized floor plan */}
              <div className="absolute inset-0 p-8">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <rect x="5" y="5" width="90" height="90" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                  <line x1="25" y1="5" x2="25" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
                  <line x1="75" y1="50" x2="75" y2="95" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
                  <text x="15" y="30" fill="rgba(255,255,255,0.15)" fontSize="3" fontFamily="monospace">FLOOR 1</text>
                  <text x="60" y="75" fill="rgba(255,255,255,0.15)" fontSize="3" fontFamily="monospace">FLOOR 2</text>
                </svg>
              </div>

              {/* Location pins */}
              {locations.map((loc) => {
                const Icon = (Icons as never)[loc.icon] as Icons.LucideIcon | undefined;
                const isActive = activeId === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(isActive ? null : loc.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  >
                    {/* Pulse ring */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-30" />
                    )}
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-accent-500 scale-110 shadow-lg shadow-accent-500/50'
                        : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20'
                    }`}>
                      {Icon && <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/80'}`} strokeWidth={1.5} />}
                    </div>
                    {/* Label */}
                    <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                      isActive ? 'text-accent-400 opacity-100' : 'text-white/50 opacity-0 group-hover:opacity-100'
                    }`}>
                      {loc.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Info panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {active ? (
              <div className="bg-ink-900 rounded-3xl overflow-hidden border border-white/10 animate-scale-in">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setActiveId(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink-950/50 backdrop-blur-md hover:bg-ink-950/70 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-accent-400 text-sm font-semibold uppercase tracking-widest mb-3">
                    <MapPin className="w-4 h-4" />
                    {t.schoolMap.label}
                  </div>
                  <h3 className="font-display text-3xl text-white font-light tracking-tight mb-3">{active.name}</h3>
                  <p className="text-white/70 leading-relaxed">{active.desc}</p>
                </div>
              </div>
            ) : (
              <div className="bg-ink-900/50 rounded-3xl border border-dashed border-white/10 p-10 flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-white/30" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white/80 mb-2">{t.schoolMap.heading}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  {t.schoolMap.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

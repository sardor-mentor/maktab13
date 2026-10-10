import { useEffect, useState } from 'react';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { LANGUAGES, LanguageCode } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollProgress, useActiveSection } from '@/hooks/useScroll';

export function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(t.navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink-50/85 backdrop-blur-xl border-b border-ink-200/60' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 lg:h-24'}`}>
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group text-left">
              <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-500 overflow-hidden ${scrolled ? 'bg-ink-900 shadow-md ring-1 ring-white/10' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
                <img src="/school-logo.png" alt="13-Maktab Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-display text-lg lg:text-xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-ink-900' : 'text-white'}`}>
                  {t.schoolInfo.shortName}
                </span>
                <span className={`text-[10px] lg:text-[11px] font-medium tracking-wide uppercase transition-colors duration-500 ${scrolled ? 'text-ink-400' : 'text-white/60'}`}>
                  Yunusobod • Toshkent
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {t.navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    scrolled
                      ? activeSection === link.id
                        ? 'text-ink-900'
                        : 'text-ink-500 hover:text-ink-900'
                      : activeSection === link.id
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? 'bg-accent-500' : 'bg-accent-400'}`} />
                  )}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language selector */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled ? 'text-ink-700 hover:bg-ink-100' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <Globe className="w-4 h-4" strokeWidth={1.5} />
                  <span className="uppercase">{lang}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-2xl shadow-xl border border-ink-200 py-1.5 z-50 animate-fade-in">
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code as LanguageCode); setLangOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${l.code === lang ? 'text-accent-600 font-semibold' : 'text-ink-600 hover:bg-ink-50'}`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() => handleNav('about')}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-full hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 group"
              >
                {t.ctaNav}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all ${scrolled ? 'text-ink-900 hover:bg-ink-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent-500 transition-all duration-150" style={{ width: `${progress}%` }} />
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ink-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-20 px-5 border-b border-ink-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ink-900 overflow-hidden flex items-center justify-center p-1">
                <img src="/school-logo.png" alt="13-Maktab Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-lg font-bold text-ink-900">{t.schoolInfo.shortName}</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-xl text-ink-700 hover:bg-ink-100"
              aria-label="Close"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col p-5 gap-1 overflow-y-auto h-[calc(100vh-5rem)]">
            {t.navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="flex items-center justify-between px-4 py-4 text-left text-lg font-medium text-ink-800 hover:bg-ink-100 rounded-2xl transition-all duration-300"
                style={{
                  animation: mobileOpen ? `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.05 + 0.1}s both` : 'none',
                }}
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-ink-300" />
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-ink-200">
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-3 px-4">Language</div>
              <div className="flex gap-2 px-4">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as LanguageCode)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${l.code === lang ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-600'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNav('about')}
              className="mt-6 btn-accent w-full"
            >
              {t.ctaNav}
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-auto pt-6 text-sm text-ink-400 px-4">
              <p className="font-medium text-ink-600">{t.schoolInfo.address}</p>
              <p className="mt-1">{t.schoolInfo.phone}</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

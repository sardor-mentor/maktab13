import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES, LanguageCode } from '@/data/translations';
import { ArrowRight, Send, Instagram, Youtube, MapPin, Phone, Mail, Clock, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function News() {
  const { t } = useLanguage();

  return (
    <section id="news" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" />
              {t.news.label}
            </div>
            <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
              {t.news.heading}
            </h2>
          </div>
          <a
            href={`https://${t.schoolInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group self-start lg:self-auto"
          >
            <Send className="w-4 h-4" />
            Telegram
          </a>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.news.items.map((news, i) => (
            <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-ink-900">{news.category}</span>
                  </div>
                </div>
                <div className="text-xs text-ink-400 mb-2">{news.date}</div>
                <h3 className="font-display text-lg text-ink-900 font-medium leading-tight mb-2 group-hover:text-accent-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{news.excerpt}</p>
                <div className="flex items-center gap-2 mt-3 text-accent-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.news.readMore} <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative bg-ink-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.contact.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.contact.heading}
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: t.contact.addressTitle, value: t.schoolInfo.address },
                { icon: Phone, label: t.contact.phoneTitle, value: `${t.schoolInfo.phone} • ${t.schoolInfo.phone2}` },
                { icon: Mail, label: t.contact.emailTitle, value: t.schoolInfo.email },
                { icon: Clock, label: t.contact.hoursTitle, value: t.schoolInfo.hours },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ink-100 hover:border-ink-200 transition-colors">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-ink-900 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-1">{item.label}</div>
                    <div className="text-ink-800 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="flex gap-3 pt-2">
                <a href={`https://${t.schoolInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-ink-900 hover:bg-accent-500 transition-colors group">
                  <Send className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href={`https://${t.schoolInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-ink-900 hover:bg-accent-500 transition-colors group">
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href={`https://${t.schoolInfo.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-ink-900 hover:bg-accent-500 transition-colors group">
                  <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-ink-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent-500 mb-4 animate-bounce" />
                  <h3 className="font-display text-2xl text-ink-900 font-bold mb-2">{t.contact.successMsg}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-ink-600 mb-1.5">{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:bg-white focus:border-accent-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-ink-600 mb-1.5">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:bg-white focus:border-accent-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-ink-600 mb-1.5">{t.contact.messageLabel}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:bg-white focus:border-accent-500 focus:outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-accent w-full py-4 justify-center"
                  >
                    {t.contact.submitBtn}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ink-950 py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative text-center">
        <Reveal>
          <h2 className="display-heading text-white text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-[1.05]">
            {t.finalCta.heading}
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-8 mb-10 flex justify-center">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <img src="/school-logo.png" alt="13-Maktab Logo" className="w-8 h-8 rounded-lg object-cover" />
              <div className="font-display text-xl text-white font-bold tracking-[0.2em]">{t.schoolInfo.shortName}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent-500 text-white text-lg font-semibold rounded-full hover:bg-accent-600 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-1"
          >
            {t.finalCta.buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const currentLang = LANGUAGES.find((l) => l.code === lang);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-950 text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 overflow-hidden ring-1 ring-white/10 p-0.5">
                <img src="/school-logo.png" alt="13-Maktab Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">{t.schoolInfo.shortName}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-wide">Yunusobod • Toshkent</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{t.footer.exploreTitle}</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {t.navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-sm text-white/60 hover:text-accent-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{t.footer.contactsTitle}</div>
            <div className="space-y-3 text-sm text-white/60">
              <p className="leading-relaxed">{t.schoolInfo.address}</p>
              <p>{t.schoolInfo.phone}</p>
              <p>{t.schoolInfo.email}</p>
              <p>{t.schoolInfo.hours}</p>
            </div>
          </div>

          {/* Social + Language */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Social</div>
            <div className="flex gap-3 mb-6">
              <a href={`https://${t.schoolInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 transition-colors">
                <Send className="w-4 h-4 text-white" />
              </a>
              <a href={`https://${t.schoolInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href={`https://${t.schoolInfo.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Language */}
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Language</div>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-sm text-white/80 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {currentLang?.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute bottom-full mb-2 left-0 w-36 bg-ink-900 rounded-2xl border border-white/10 py-1.5 z-50 animate-fade-in">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code as LanguageCode); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${l.code === lang ? 'text-accent-400 font-semibold' : 'text-white/70 hover:bg-white/5'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 • {t.schoolInfo.name}. {t.footer.rights}</p>
          <p>Yunusobod • Toshkent</p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useMemo, useCallback, useEffect } from 'react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export function Gallery() {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = t.gallery.categories;
  const images = t.gallery.images;

  const filtered = useMemo(() => {
    if (activeCategoryIndex === 0) return images;
    const selectedCategoryLabel = categories[activeCategoryIndex];
    return images.filter((img) => img.category === selectedCategoryLabel);
  }, [images, categories, activeCategoryIndex]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const spanClass = (span: string) => {
    switch (span) {
      case 'tall': return 'row-span-2';
      case 'wide': return 'col-span-2';
      default: return '';
    }
  };

  return (
    <section id="gallery" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <Reveal className="max-w-3xl mb-12">
          <div className="section-label mb-4">
            <span className="w-8 h-px bg-accent-500" />
            {t.gallery.label}
          </div>
          <h2 className="display-heading text-ink-900 text-4xl md:text-5xl lg:text-6xl">
            {t.gallery.heading}
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
            {t.gallery.description}
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={1} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategoryIndex === idx
                  ? 'bg-ink-900 text-white'
                  : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-4">
          {filtered.map((img, i) => (
            <Reveal
              key={`${activeCategoryIndex}-${i}`}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${spanClass(img.span)}`}
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="absolute inset-0 w-full h-full text-left"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-xs text-accent-400 font-semibold uppercase tracking-wider">{img.category}</div>
                  <div className="text-white font-medium text-sm mt-0.5">{img.title}</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <div className="text-xs text-accent-400 font-semibold uppercase tracking-wider">{filtered[lightboxIndex].category}</div>
              <div className="text-white text-lg font-medium mt-1">{filtered[lightboxIndex].title}</div>
              <div className="text-white/40 text-sm mt-1">{lightboxIndex + 1} / {filtered.length}</div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}

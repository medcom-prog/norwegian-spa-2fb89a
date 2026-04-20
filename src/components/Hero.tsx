import { motion } from 'framer-motion';
import { site } from '../site.config';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

// Stats strip under hero
const stats = [
  { value: '30', label: 'år i Norge' },
  { value: '7-lags', label: 'thermoisolering' },
  { value: 'Fra 49.900', label: 'kr jubileumspris' },
  { value: '10 år', label: 'konstruksjonsgaranti' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end bg-ocean-900 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85&fit=crop"
          alt="Utendørs spabad om kvelden"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay — lighter through midpoint for image visibility, heavy only at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/55 to-ocean-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 pb-20 pt-32">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 mb-5"
        >
          {site.hero.eyebrow}
        </motion.p>

        {/* Headline — max-w-2xl avoids awkward orphan */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-display-xl text-white max-w-2xl mb-6 leading-[1.02]"
          style={{ textShadow: '0 2px 24px rgba(11,31,46,0.5)' }}
        >
          {site.hero.headline}
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-sans text-lg text-stone-200 max-w-xl mb-10 leading-relaxed"
          style={{ textShadow: '0 1px 12px rgba(11,31,46,0.6)' }}
        >
          {site.hero.subhead}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={site.hero.primary_cta.href}
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-ocean-900 font-sans font-semibold text-base px-7 py-3.5 rounded-full transition-colors shadow-glow"
          >
            {site.hero.primary_cta.label}
          </a>
          {site.hero.secondary_cta && (
            <a
              href={site.hero.secondary_cta.href}
              className="inline-flex items-center justify-center border border-white/35 hover:border-white/60 text-white font-sans font-medium text-base px-7 py-3.5 rounded-full transition-colors backdrop-blur-sm"
            >
              {site.hero.secondary_cta.label}
            </a>
          )}
        </motion.div>
      </div>

      {/* Stats bar — larger, more readable */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="relative z-10 border-t border-white/10 bg-ocean-900/85 backdrop-blur-sm"
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 md:px-8 py-6">
                <p className="font-display text-2xl md:text-3xl text-gold-400 leading-none mb-1.5">
                  {s.value}
                </p>
                <p className="font-sans text-xs md:text-sm text-stone-400 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

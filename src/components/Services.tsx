import { motion } from 'framer-motion';
import { site } from '../site.config';

export function Services() {
  return (
    <section id="tjenester" className="bg-stone-100 py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
            (03) Alt vi tilbyr
          </p>
          <h2 className="font-display text-display-lg text-ink-900 max-w-xl">
            Fire ting vi gjør bra.<br />Ingenting vi ikke gjør bra.
          </h2>
        </motion.div>

        {/* Services grid — 2-col with taller photo area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.services.map((svc, i) => (
            <motion.article
              key={svc.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lifted transition-shadow group"
            >
              {/* Photo — taller for impact */}
              {svc.image && (
                <div className="overflow-hidden h-56 md:h-64">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-sans font-semibold text-ink-900 text-lg">{svc.title}</h3>
                  <span className="font-mono text-xs text-gold-500 shrink-0 ml-3 mt-1">{svc.n}</span>
                </div>
                <p className="font-sans text-sm text-ink-500 leading-relaxed mb-4">{svc.lead}</p>
                <ul className="space-y-1.5">
                  {svc.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-ink-600">
                      <span className="text-gold-500 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

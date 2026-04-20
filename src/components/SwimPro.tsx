import { motion } from 'framer-motion';
import { site } from '../site.config';

function formatKr(n: number) {
  return n.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 });
}

const features = [
  { n: '01', title: 'Ekstrem isolasjon', body: '7-lags polyuretaanisolering med 10–15 cm PUR. Norges laveste driftskostnader.' },
  { n: '02', title: 'High-performance pumper', body: '60 mm pumper for kraftig motstrøm. Justerbar hastighet, stille drift.' },
  { n: '03', title: 'Klorfritt renseanlegg', body: 'Ag+ sølvionrensing og CD3 Ozon holder vannet rent — uten kjemikalielukt.' },
  { n: '04', title: 'Motoflex massasje + LED', body: 'Flerfarget LED lysterapi og Motoflex rygg- og nakkemassasje.' },
];

export function SwimPro() {
  const models = site.swimpro ?? [];

  return (
    <section id="swimpro" className="bg-ocean-900 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500 mb-3">
            (02) SwimPro motstrømsbasseng
          </p>
          <h2 className="font-display text-display-lg text-white max-w-2xl mb-4">
            Svøm mot strømmen.<br />Betal ikke for mye strøm.
          </h2>
          <p className="font-sans text-lg text-stone-400 max-w-xl">
            SwimPro motstrømsbassenget er bedre isolert enn noe annet på det norske markedet. Lave driftskostnader. Alltid klart til bruk.
          </p>
        </motion.div>

        {/* Image — placed BEFORE the two-col on large screens for visual impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1531256436229-b4e3c16d23af?w=1400&q=85&fit=crop"
            alt="SwimPro motstrømsbasseng — svøm i ditt eget basseng"
            className="w-full h-56 md:h-80 object-cover object-center"
            loading="lazy"
          />
        </motion.div>

        {/* Two-col layout: features + models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Features */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="flex gap-5"
              >
                <span className="font-mono text-xs text-gold-600 shrink-0 mt-1">{f.n}</span>
                <div>
                  <h3 className="font-sans font-semibold text-white mb-1">{f.title}</h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Model cards */}
          <div className="space-y-3">
            {models.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between bg-ocean-800 hover:bg-ocean-700 border border-white/8 rounded-xl px-5 py-4 transition-colors group"
              >
                <div>
                  <p className="font-sans font-semibold text-white text-sm">{m.model}</p>
                  {m.tag && (
                    <span className="font-mono text-xs text-gold-400">{m.tag}</span>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-display text-xl text-gold-400">{formatKr(m.price)}</p>
                  <a
                    href="#kontakt"
                    className="font-sans text-xs text-stone-400 group-hover:text-gold-400 transition-colors"
                  >
                    Avtal prøvebading →
                  </a>
                </div>
              </motion.div>
            ))}

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-2"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-glow"
              >
                Avtal prøvebading av SwimPro
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * WEIRD THING — Interactive spa model picker
 * Lets the visitor filter spabad by number of persons, see price,
 * was-price (discount %), and a CTA per card.
 * This is the distinctive interactive section unique to this site.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../site.config';

const personOptions = [0, 4, 5, 6, 7, 8]; // 0 = vis alle

function formatKr(n: number) {
  return n.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 });
}

function discountPct(price: number, was: number) {
  return Math.round((1 - price / was) * 100);
}

export function SpaModelPicker() {
  const [filter, setFilter] = useState(0);

  const models = site.spabad ?? [];
  const visible = filter === 0 ? models : models.filter((m) => m.persons === filter);

  return (
    <section id="spabad" className="bg-stone-50 py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500 mb-3">
            (01) Spabad
          </p>
          <h2 className="font-display text-display-lg text-ink-900 max-w-2xl mb-4">
            Designet for det norske klimaet.
          </h2>
          <p className="font-sans text-lg text-ink-500 max-w-xl">
            Alle modeller er isolert med 7-lags thermoteknologi. Ekstremt lavt strømforbruk — og over-dimensjonert renseanlegg som bare virker.
          </p>
        </motion.div>

        {/* Person filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {personOptions.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`font-sans text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                filter === p
                  ? 'bg-ocean-900 text-white border-ocean-900'
                  : 'bg-white text-ink-600 border-stone-200 hover:border-ink-400'
              }`}
            >
              {p === 0 ? 'Vis alle' : `${p} personer`}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((model, i) => (
              <motion.div
                key={model.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-soft hover:shadow-lifted transition-shadow"
              >
                {/* Discount badge */}
                <div className="relative bg-ocean-900 px-4 py-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                    {model.size}
                  </span>
                  <span className="bg-gold-500 text-ocean-900 font-sans font-bold text-xs px-2 py-0.5 rounded-full">
                    -{discountPct(model.price, model.was)}%
                  </span>
                </div>

                <div className="p-4">
                  {/* Persons */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {Array.from({ length: model.persons }).map((_, j) => (
                      <span key={j} className="text-gold-400 text-sm" aria-hidden>●</span>
                    ))}
                    <span className="font-sans text-xs text-ink-400 ml-1">{model.persons} personer</span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="font-display text-2xl text-ink-900 leading-none mb-1">
                      {formatKr(model.price)}
                    </p>
                    <p className="font-sans text-sm text-stone-400 line-through">
                      Normalpris {formatKr(model.was)}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mb-4 space-y-1 text-sm text-ink-500 font-sans">
                    <li className="flex items-center gap-1.5">
                      <span className="text-gold-500 text-xs">✓</span> 7-lags thermoisolering
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-gold-500 text-xs">✓</span> Klorfritt renseanlegg
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-gold-500 text-xs">✓</span> 10 års garanti
                    </li>
                  </ul>

                  <a
                    href="#kontakt"
                    className="block text-center font-sans font-semibold text-sm bg-ocean-900 hover:bg-ocean-700 text-white py-2.5 rounded-xl transition-colors"
                  >
                    Få tilbud
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Sub-note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 font-sans text-sm text-ink-400 text-center"
        >
          De fleste bad er utstyrt med 3 vannfontener med lys, Bluetooth Stereo eller WiFi.
          Alle priser inkl. mva. — jubileumstilbud, gjelder til lageret er tomt.
        </motion.p>
      </div>
    </section>
  );
}

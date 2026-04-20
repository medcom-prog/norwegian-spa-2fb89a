import { useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '../site.config';

const interests = ['Spabad', 'SwimPro motstrøm', 'Chilltub', 'Prøvebading', 'Annet'];

export function Contact() {
  const [interest, setInterest] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, submit to an API / email handler
    setSent(true);
  }

  return (
    <section id="kontakt" className="bg-ocean-900 py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              (06) Kontakt
            </p>
            <h2 className="font-display text-display-lg text-white mb-4">
              {site.contact.heading}
            </h2>
            <p className="font-sans text-lg text-stone-400 mb-10 leading-relaxed">
              {site.contact.subhead}
            </p>

            {/* Contact details */}
            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-1">Telefon</dt>
                <dd>
                  <a
                    href={`tel:${site.company.phone}`}
                    className="font-sans text-xl font-medium text-white hover:text-gold-300 transition-colors"
                  >
                    {site.company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-1">E-post</dt>
                <dd>
                  <a
                    href={`mailto:${site.company.email}`}
                    className="font-sans text-base text-stone-300 hover:text-white transition-colors"
                  >
                    {site.company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-1">Åpningstider</dt>
                <dd className="font-sans text-sm text-stone-400">{site.contact.opening_hours}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-1">Butikker</dt>
                <dd className="font-sans text-sm text-stone-400">{site.contact.service_area}</dd>
              </div>
            </dl>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {sent ? (
              <div className="bg-ocean-800 border border-gold-500/30 rounded-2xl p-8 text-center">
                <p className="font-display text-2xl text-white mb-3">Takk!</p>
                <p className="font-sans text-stone-400">
                  Vi tar kontakt snart. Du kan også ringe oss direkte på{' '}
                  <a href={`tel:${site.company.phone}`} className="text-gold-400 hover:underline">
                    {site.company.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-ocean-800 border border-white/8 rounded-2xl p-6 md:p-8 space-y-5"
              >
                {/* Interest selector */}
                <div>
                  <label className="block font-mono text-xs text-gold-500 uppercase tracking-widest mb-2">
                    Hva er du interessert i?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setInterest(opt)}
                        className={`font-sans text-sm px-3 py-1.5 rounded-full border transition-all ${
                          interest === opt
                            ? 'bg-gold-500 text-ocean-900 border-gold-500 font-semibold'
                            : 'border-white/15 text-stone-400 hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-stone-400 mb-1.5">
                      Navn *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ditt navn"
                      className="w-full bg-ocean-900 border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none transition-colors placeholder:text-stone-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-mono text-xs text-stone-400 mb-1.5">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+47 000 00 000"
                      className="w-full bg-ocean-900 border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none transition-colors placeholder:text-stone-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-stone-400 mb-1.5">
                    E-post *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="du@eksempel.no"
                    className="w-full bg-ocean-900 border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none transition-colors placeholder:text-stone-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-stone-400 mb-1.5">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Fortell oss hva du lurer på, eller ønsker å prøve…"
                    className="w-full bg-ocean-900 border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none transition-colors placeholder:text-stone-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-ocean-900 font-sans font-semibold text-base py-3.5 rounded-xl transition-colors shadow-glow"
                >
                  Send forespørsel
                </button>

                <p className="font-sans text-xs text-stone-500 text-center">
                  Eller ring oss direkte:{' '}
                  <a href={`tel:${site.company.phone}`} className="text-stone-400 hover:text-gold-400 transition-colors">
                    {site.company.phone}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

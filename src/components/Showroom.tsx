import { motion } from 'framer-motion';

const locations = [
  {
    name: 'HotSpring Slependen',
    area: 'Oslo-området',
    hours: 'Man–fre: 10–17 · Lør: 11–15',
    maps: 'https://www.google.com/maps/search/HotSpring+Slependen',
  },
  {
    name: 'HotSpring Trondheim',
    area: 'Trondheim',
    hours: 'Man–fre: 10–17 · Lør: 11–15',
    maps: 'https://www.google.com/maps/search/HotSpring+Trondheim',
  },
  {
    name: 'Montér Kirkenes',
    area: 'Kirkenes',
    hours: 'Man–fre: 07–17 · Lør: 11–15',
    maps: 'https://www.google.com/maps/search/Monter+Kirkenes',
  },
];

export function Showroom() {
  return (
    <section id="utstilling" className="bg-stone-50 py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85&fit=crop&crop=center"
              alt="Norwegian Spa utstilling — prøv alle modeller"
              className="w-full h-72 md:h-[500px] object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
                (05) Utstilling
              </p>
              <h2 className="font-display text-display-lg text-ink-900 mb-4">
                Norges største spabad-utstilling.
              </h2>
              <p className="font-sans text-lg text-ink-500 leading-relaxed mb-8">
                Her kan du prøve alle typer spabad — uten forpliktelse. Snakk med en erfaren rådgiver, kjenn temperaturen, test massasjefunksjonene. Vi har tid til deg.
              </p>
            </motion.div>

            {/* Locations */}
            <div className="space-y-4">
              {locations.map((loc, i) => (
                <motion.a
                  key={loc.name}
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-gold-300 hover:shadow-soft transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold-600 text-sm font-mono font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-ink-800 text-sm group-hover:text-ocean-700 transition-colors">
                      {loc.name}
                    </p>
                    <p className="font-sans text-xs text-ink-400 mb-0.5">{loc.area}</p>
                    <p className="font-mono text-xs text-stone-400">{loc.hours}</p>
                  </div>
                  <span className="ml-auto text-stone-300 group-hover:text-gold-400 transition-colors self-center text-lg">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-ocean-900 hover:bg-ocean-700 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Avtal prøvebading
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

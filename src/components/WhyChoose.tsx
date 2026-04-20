/**
 * Why Choose section — Replaces the generic "Hvorfor velge oss"
 * with concrete, sourced claims from the customer's own site copy.
 */
import { motion } from 'framer-motion';

const pillars = [
  {
    n: '01',
    heading: '30 år med norsk klima-kunnskap.',
    body: 'Vi har vært lengst på markedet. Ingen snarveier — høy kvalitet i alle ledd. Du nyter norske tradisjoner og forståelse av stedene folk bor.',
  },
  {
    n: '02',
    heading: 'Norges laveste strømforbruk.',
    body: 'Vår 7-lags thermoisolering — 40 mm PEF, 15 mm polyuretan og 5 mm «wind shield» — reflekterer varmen tilbake til spabadet. Du betaler ikke for varme du ikke bruker.',
  },
  {
    n: '03',
    heading: 'Enkel installasjon — ingen rørlegger.',
    body: 'Badet leveres komplett og klart til bruk. Fyll med hageslange. Koble til strøm. Etter at ønsket temperatur er nådd, er du klar.',
  },
  {
    n: '04',
    heading: 'Finansiering med BankID på 3 minutter.',
    body: 'Søk om delbetaling opptil 150.000 kr via Svea direkte online. Signer med BankID — ingen spørsmål fra ansatte, ingen kredittkort.',
  },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
            (04) Hvorfor Norwegian Spa
          </p>
          <h2 className="font-display text-display-lg text-ink-900">
            Du vet du har gjort det beste valget<br />når du kjenner forskjellen.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="shrink-0">
                <span className="font-mono text-xs text-gold-500">{p.n}</span>
                <div className="mt-2 w-px h-12 bg-gradient-to-b from-gold-400/40 to-transparent" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-ink-900 text-base mb-2">{p.heading}</h3>
                <p className="font-sans text-sm text-ink-500 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

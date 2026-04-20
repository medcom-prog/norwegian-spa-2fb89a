import { motion } from 'framer-motion';
import { Wordmark } from './Wordmark';
import { site } from '../site.config';

export function Footer() {
  return (
    <footer className="bg-ocean-900 border-t border-white/8 py-16">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand col */}
          <div>
            <Wordmark variant="dark" className="mb-4" />
            <p className="font-sans text-sm text-stone-500 leading-relaxed mb-4">
              {site.footer.tagline}
            </p>
            <a
              href={`tel:${site.company.phone}`}
              className="font-mono text-sm text-gold-500 hover:text-gold-300 transition-colors"
            >
              {site.company.phone}
            </a>
          </div>

          {/* Link columns */}
          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Status line */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-stone-600">
            {site.footer.status_line}
          </p>
          <a
            href="https://hotspring.no"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-stone-600 hover:text-stone-400 transition-colors"
          >
            hotspring.no — Amerikanske HotSpring modeller
          </a>
        </div>
      </div>
    </footer>
  );
}

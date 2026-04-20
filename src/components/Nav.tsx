import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wordmark } from './Wordmark';
import { site } from '../site.config';

const links = [
  { label: 'Spabad',          href: '#spabad' },
  { label: 'SwimPro',         href: '#swimpro' },
  { label: 'Tjenester',       href: '#tjenester' },
  { label: 'Utstilling',      href: '#utstilling' },
  { label: 'Finansiering',    href: 'https://norwegianspa.no/finansiering-northseaspas/' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ocean-900/95 backdrop-blur-md shadow-soft border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-8">
        {/* Wordmark */}
        <Wordmark variant="dark" />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden lg:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          Bestill prøvebading
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-300 hover:text-white"
          aria-label="Åpne meny"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-3 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-ocean-900 border-t border-white/10"
          >
            <ul className="flex flex-col px-5 py-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-sans text-base font-medium text-stone-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-ocean-900 font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                >
                  Bestill prøvebading
                </a>
              </li>
            </ul>
            <div className="px-5 pb-4 flex items-center gap-4 text-stone-500 font-mono text-xs">
              <a href={`tel:${site.company.phone}`}>{site.company.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

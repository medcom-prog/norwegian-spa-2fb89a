import type { Config } from 'tailwindcss';

// Norwegian Spa — Palette: deep ocean + warm gold + stone cream
// Fonts: Instrument Serif (display) + Instrument Sans (body)

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1320px' } },
    extend: {
      colors: {
        ink: {
          50:  '#F4F6F8',
          100: '#E4E8EE',
          200: '#C5CDD8',
          300: '#95A3B4',
          400: '#667485',
          500: '#445060',
          600: '#2E3D4E',
          700: '#1C2B3A',
          800: '#0F1E2D',
          900: '#0B1F2E',
        },
        gold: {
          50:  '#FBF6EC',
          100: '#F5EAD2',
          200: '#EDD5A8',
          300: '#E4BE7E',
          400: '#D9A85A',
          500: '#C8A96E',   // brand gold — primary accent
          600: '#B8903A',
          700: '#9A7528',
          800: '#7A5C1E',
          900: '#5A4416',
        },
        stone: {
          50:  '#FAFAF8',
          100: '#F4F3EF',
          200: '#E9E7E0',
          300: '#D6D3C8',
          400: '#BAB5A8',
          500: '#9A9488',
          600: '#7A7469',
        },
        ocean: {
          900: '#0B1F2E',  // deep nav bg
          800: '#0F2A3D',
          700: '#163348',
          600: '#1E3F59',
        },
      },
      fontFamily: {
        sans:    ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)',  { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.75rem)',    { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 2.8vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft:   '0 1px 3px rgba(11,31,46,0.04), 0 8px 24px rgba(11,31,46,0.07)',
        lifted: '0 2px 4px rgba(11,31,46,0.06), 0 20px 48px rgba(11,31,46,0.12)',
        glow:   '0 0 40px rgba(200,169,110,0.15)',
      },
      keyframes: {
        'ticker-left': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ticker-left': 'ticker-left 30s linear infinite',
        'fade-up':     'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;

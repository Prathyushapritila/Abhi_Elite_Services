import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: '#EA6A1F', // Brand orange (primary accent)
        brandGold: '#FACC15', // Soft gold accent (optional)
        // Neutrals
        background: '#F9F5F0', // Soft warm cream (main page background)
        surface: '#FFFFFF', // Surface / cards
        ink: '#0F172A', // Dark text (slate/navy)
        muted: '#6B7280', // Muted text (slate gray)
        // Deep accent for header/footer
        deep: '#020617', // Very deep navy/charcoal
        // Legacy support (keeping for compatibility)
        brandOrange: '#EA6A1F',
        brandGray: '#6B7280',
        backgroundWarm: '#F9F5F0',
        textMain: '#0F172A',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
}
export default config

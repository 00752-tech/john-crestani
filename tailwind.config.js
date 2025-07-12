// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-gold': '#fbbf24',
      },
      animation: {
        'pulse-gradient': 'pulseGradient 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGradient: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.4)', opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
}

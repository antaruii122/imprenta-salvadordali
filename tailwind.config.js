/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        beige: '#f5f0e8',
        'beige-dark': '#e8ddd0',
        brand: '#8B7355',
        'brand-light': '#a8896a',
        'brand-dark': '#6b5840',
        charcoal: '#1a1a2e',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
        hero: '0 20px 60px rgba(0,0,0,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
    },
  },
  plugins: [],
}

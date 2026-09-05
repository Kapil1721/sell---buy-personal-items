/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#0F172A',
        'brand-accent': '#2563EB',
        'charcoal': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      boxShadow: {
        'pricing-glow': '0 0 40px -10px rgba(37, 99, 235, 0.2)',
      }
    },
  },
  plugins: [],
}

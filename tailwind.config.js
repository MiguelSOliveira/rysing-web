/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rysing: {
          black: '#050505',
          dark: '#0F0F0F', // Slightly lighter than black for cards
          card: '#141414',
          gold: '#FF9500',
          'gold-dim': '#995a00',
          muted: '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'onyx-gradient': 'linear-gradient(to bottom, #050505, #1A1A1A)',
        'gold-glow': 'radial-gradient(circle at center, rgba(255, 149, 0, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-50%, -150%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
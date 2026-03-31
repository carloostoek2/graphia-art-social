/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: {
          DEFAULT: '#12121a',
          light: '#1a1a25',
          elevated: '#22222f',
        },
        primary: {
          DEFAULT: '#8b5cf6',
          glow: 'rgba(139, 92, 246, 0.3)',
        },
        accent: {
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
}

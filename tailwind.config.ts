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
        primary: {
          DEFAULT: '#2B5FA5',
          light: '#4A90E2',
          dark: '#1a3a6b',
          50: '#eff6ff',
          100: '#dbeafe',
        },
        secondary: {
          DEFAULT: '#3B9E6E',
          dark: '#2d7a54',
          light: '#5cbf8a',
        },
        teal: {
          DEFAULT: '#3D8B9E',
          dark: '#2C6E7F',
          light: '#5BAFC2',
        },
        accent: {
          DEFAULT: '#E8A838',
          dark: '#c98a20',
        },
        neutral: {
          50: '#F7F9FC',
          100: '#EEF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2B5FA5 0%, #4A90E2 50%, #5BAFC2 100%)',
        'cta-gradient': 'linear-gradient(135deg, #2B5FA5 0%, #3D8B9E 100%)',
        'card-gradient': 'linear-gradient(135deg, #f0f7ff 0%, #e8f4f8 100%)',
      },
      boxShadow: {
        card: '0 4px 20px rgba(43,95,165,0.08)',
        'card-hover': '0 12px 40px rgba(43,95,165,0.16)',
        nav: '0 2px 20px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'drift': 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 20s ease-in-out infinite reverse',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(18px, -12px) scale(1.04)' },
          '66%': { transform: 'translate(-10px, 8px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F6F5F1', // Primary warm off-white / ivory
          subtle: '#EFECE4',
          muted: '#E6E3DB',
          card: '#FFFFFF',
          dark: '#102042',   // Scholarly deep collegiate blue (warm, not tech-black)
        },
        navy: {
          950: '#102042',    // Rich collegiate Oxford blue (dignified, educational)
          900: '#162E5A',    // Primary institutional blue (approachable, prestigious)
          800: '#1C3B70',
          700: '#234988',
          600: '#2B58A1',
          500: '#376AB8',
          400: '#5282CE',
          100: '#E8EEF8',
          50: '#F3F6FC',
        },
        ink: {
          950: '#12151B',
          900: '#1A1D24',    // Softened near-black for warmer reading comfort
          800: '#2B2F38',
          700: '#424754',
          600: '#5A6070',
          500: '#737A8C',
          400: '#9AA1B2',
          300: '#C5CAD7',
          200: '#E2E5EE',
          100: '#EFF1F6',
        },
        gold: {
          700: '#A37916',
          600: '#BD8D1C',
          500: '#D4A026',    // Warm restrained scholarly gold
          400: '#E2B13C',
          100: '#FBF3DD',
          50: '#FDF9EE',
        },
        apvPurple: {
          900: '#2F1A52',
          800: '#422472',    // Subtle APV purple brand bridge
          700: '#532D8E',
          100: '#F3EDFA',
          50: '#F9F6FD',
        }
      },
      borderRadius: {
        'card-sm': '16px',
        'card': '24px',
        'card-lg': '32px',
        'pill': '9999px',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      }
    },
  },
  plugins: [],
}

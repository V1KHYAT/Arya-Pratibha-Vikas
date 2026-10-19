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
          DEFAULT: '#FAF7F2', // Warm luminous ivory from hero reference
          subtle: '#F2EDE4',
          muted: '#E7E0D3',
          card: '#FFFFFF',
          dark: '#102042',   // Scholarly deep collegiate blue
        },
        terracotta: {
          50: '#FDF7F3',
          100: '#FAEDE6',
          200: '#F5DCB0',
          300: '#ECBE9B',
          400: '#D56E3D',
          500: '#C85A28',    // Primary brand terracotta from hero reference
          600: '#B34C1D',
          700: '#943A14',
          800: '#782F13',
          900: '#642714',
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
          950: '#18181B',
          900: '#27272A',    // Softened near-black for warmer reading comfort
          800: '#3F3F46',
          700: '#52525B',
          600: '#71717A',
          500: '#A1A1AA',
          400: '#D4D4D8',
          300: '#E4E4E7',
          200: '#F4F4F5',
          100: '#FAFAFA',
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

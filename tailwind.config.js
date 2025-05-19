/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1F44',
          50: '#E6EBF4',
          100: '#CCD7E9',
          200: '#99AFD3',
          300: '#6687BD',
          400: '#335FA7',
          500: '#0A1F44',
          600: '#091C3E',
          700: '#071833',
          800: '#051429',
          900: '#03101F',
        },
        slate: {
          DEFAULT: '#2E3B4E',
          50: '#EEF0F3',
          100: '#DCE0E7',
          200: '#B9C2CF',
          300: '#96A3B7',
          400: '#73859F',
          500: '#2E3B4E',
          600: '#293646',
          700: '#232D3B',
          800: '#1D2531',
          900: '#171D26',
        },
        teal: {
          DEFAULT: '#1ABC9C',
          50: '#E6F7F4',
          100: '#CCEFE9',
          200: '#99DFD3',
          300: '#66CFBD',
          400: '#33BFA7',
          500: '#1ABC9C',
          600: '#17A98C',
          700: '#138C73',
          800: '#10705D',
          900: '#0D5346',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'type-cursor': 'type-cursor 1s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'type-cursor': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
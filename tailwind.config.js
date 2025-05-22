/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        'courier': ['Courier Prime', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        accent: {
          50: '#ffffff',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#cccccc',
          500: '#bfbfbf',
          600: '#999999',
          700: '#737373',
          800: '#4d4d4d',
          900: '#262626',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'typewriter': 'typewriter 2s steps(20) forwards',
        'blink': 'blink 1s infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      },
    },
  },
  plugins: [],
};
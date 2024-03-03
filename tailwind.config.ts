import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'cardFadeIn': 'cardFadeIn 700ms ease-in'
      },
      keyframes: {
        cardFadeIn: {
          '0%': { opacity: '0'},
          '60%': { opacity: '0'},
          '100%': { opacity: '1'},
        }
      }
    },
  },
  plugins: [],
};

export default config;


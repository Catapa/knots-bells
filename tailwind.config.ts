import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F1EAE6'
      },
      fontFamily: {
        'kulim_park': 'var(--font-kulim-park)',
        'rockybilly': 'var(--font-rockybilly)',
        'inter': 'var(--font-inter)'
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      }
    },
  },
  plugins: [],
}
export default config;

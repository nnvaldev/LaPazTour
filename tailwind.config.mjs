/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        marino: '#0B1F3A',
        dorado: '#C9A227',
        neon: '#2FFFA0',
        celeste: '#D6EEF8',
        'verde-ok': '#1B8A5A',
        'rojo-paz': '#C1272D',
        rosa: '#E8A0B0',
        amarillo: '#F5C542',
        // aliases usados en el código
        'azul-gob': '#0B1F3A',
        cielo: '#D6EEF8',
        piedra: '#1A2332',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

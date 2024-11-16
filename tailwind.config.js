// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xs':'320px',
        'sm': '640px',
        'md':'870px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
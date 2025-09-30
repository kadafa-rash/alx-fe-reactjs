/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./index.html', './public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // You can set this to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};

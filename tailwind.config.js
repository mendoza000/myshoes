/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background_main: '#DFF6FF',
      fonts_main: '#06283D',
      buttons_main: '#47B5FF',
      fonts_secondary: '#256D85',
      details: '#A85CF9'
    },
    extend: {},
  },
  plugins: [],
};

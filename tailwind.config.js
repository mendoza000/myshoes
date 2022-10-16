/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      background_main: "#e6f7ff",
      background_main_l: "#ebf9ff",
      fonts_main: "#06283D",
      buttons_main: "#47B5FF",
      fonts_secondary: "#256D85",
      details: "#A85CF9",
      black: '#000'
    },
    extend: {},
  },
  plugins: [],
};

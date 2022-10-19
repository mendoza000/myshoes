/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      background_main: "#ebf9ff",
      background_main_l: "#f4fafd",
      fonts_main: "#06283D",
      buttons_main: "#47B5FF",
      fonts_secondary: "#256D85",
      details: "#A85CF9",
      black: '#000',
      gray: '#edf2f4'
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"]
      },
    screens: {
      'tall': {'raw': '(min-height: 760px)'}
    }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      background_main: "#ebf9ff",
      background_main_l: "#f4fafd",
      fonts_main: "#06283D",
      buttons_main: "#47B5FF",
      fonts_secondary: "#256D85",
      details: "#A85CF9",
      black: "#000",
      light_gray: "rgb(202, 202, 202)",
      dark_gray: "rgb(61, 61, 61)",

      bg_dark: "#292b40",
      bg_dark_xl: "#6B728E",
      bg_dark_o: "#1f2133",
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        tall: { raw: "(min-height: 785px)" },
      },
    },
    keyframes: {
      splashBounce: {
        "0%": { transform: "translateY(0%)" },
        "50%": { transform: "translateY(-6%)" },
        "100%": { transform: "translateY(100%)" },
      },
      changeBorder: {
        "0%": {
          "border-radius": "58% 42% 36% 64% / 54% 48% 52% 46%;",
        },
        "100%": {
          "border-radius": "43% 57% 57% 43% / 30% 61% 39% 70%",
        },
      },
    },
    animation: {
      splashBounce: "splashBounce .7s ease-in-out",
      changeBorder: "changeBorder 3s ease-in-out infinite alternate-reverse",
    },
  },
  plugins: [],
};

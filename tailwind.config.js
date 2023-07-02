/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#fff",
        primary: "#4b174b",
        secondary: "#936193",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

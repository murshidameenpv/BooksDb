/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Your Sans Serif Font", "sans-serif"],
      },
    },
  },
  plugins: [],
};

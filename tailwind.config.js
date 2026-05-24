/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryText: "rgba(9, 9, 9, 1)",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

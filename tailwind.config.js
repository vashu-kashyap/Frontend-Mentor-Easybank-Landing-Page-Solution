/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "public-sans": ["var(--font-public-sans)"],
      },
      colors: {
        "light-gray": "#9698A6",
        "dark-blue": "#2D314D",
        "custom-gradient": ["90deg", "#31D35C 0%", "#2BB7DB 100%"],
      },
    },
  },
  plugins: [],
};

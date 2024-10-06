/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#FB01DC",
        purple: "#5C3BE7",
        "dark-blue": "rgb(14, 12, 103)",
      },
    },
  },
  plugins: [],
};

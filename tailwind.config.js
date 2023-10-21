/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#151515",
      },
      fontFamily:{
        "News":"font-family: 'News Cycle', sans-serif"
      }
    },
  },
  plugins: [],
};

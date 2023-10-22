/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#151515",
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        playpen: ["Playpen Sans", "cursive"],
        news: ["News Cycle", "sans-serif"],
      },
    },
  },
  plugins: [],
};

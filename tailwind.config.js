/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#151515",
        "slightly-dark-gray": "#242424",
        "dark-blue": "#0b1120",
      },
      backgroundImage: {
        "pattern":"url('/bg.png')"
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        playpen: ["Playpen Sans", "cursive"],
        News: ["News Cycle", "sans-serif"],
        Posterama: ["Posterama", "sans"],
        Nexa:["Nexa", "sans-serif"]
      },
    },
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "90%": "90%",
    },
    fontFamily: {
      quickSand: ["Quicksand", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      logo: ["Rock Salt", "cursive"],
    },
    extend: {
      backgroundImage: {
        "hero-404": "url('/undraw_Lost_online_re_upmy.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

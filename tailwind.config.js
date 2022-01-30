const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "#0a192f",
      },
    },
  },
  plugins: [],
};

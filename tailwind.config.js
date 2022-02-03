const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#0a192f",
      },
    },
  },
  plugins: [],
};

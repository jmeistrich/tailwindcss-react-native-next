module.exports = {
  //   content: [`${__dirname}/**/*.{js,ts,jsx,tsx}`],
  plugins: [require("tailwindcss-react-native/plugin")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src-rn/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: "html",
};

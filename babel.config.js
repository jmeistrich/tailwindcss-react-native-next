module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["react-native-web", { commonjs: true }],
    [
      "tailwindcss-react-native/babel",
      {
        platform: "web",
        allowModules: ["react-native", "rn/*"],
      }
    ],
  ],
};

// prettier.config.js
// /** @type {import("prettier").Config} */
// module.exports = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };

/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tabWidth: 4,
  useTabs: true,
  singleQuote: true,
};

export default config;

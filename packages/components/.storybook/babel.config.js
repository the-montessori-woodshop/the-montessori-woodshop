const baseConfig = require("@woodshop/builder/babel");

module.exports = {
  presets: baseConfig.presets,
  plugins: ["react-require"]
};

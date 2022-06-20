const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  },
  staticDirs: [path.resolve(__dirname, "./public")],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|js|tsx|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("@linaria/webpack-loader"),
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
            extension: ".css",
            babelOptions: {
              configFile: path.resolve(__dirname, "../babel.config.cjs")
            }
          }
        }
      ]
    });
    return config;
  }
};

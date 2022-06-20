const path = require("path");

const rollup = require("rollup");
const rollupJson = require("@rollup/plugin-json");
const rollupExternals = require("rollup-plugin-node-externals");
const rollupTypescript = require("@rollup/plugin-typescript");
const linaria = require("@linaria/rollup");
const css = require("rollup-plugin-css-only");
const getBaseConfig = require("./rollup.config-base.cjs");

module.exports = function ({ rootDir, srcDirName = "src" }) {
  return rollup.defineConfig({
    ...getBaseConfig({ rootDir, srcDirName }),
    plugins: [
      rollupJson(),
      linaria.default({
        displayName: process.env.NODE_ENV === "production",
        babelOptions: {
          configFile: path.resolve(__dirname, "./babel.config.cjs")
        }
      }),
      css({
        output: "index.css"
      }),
      rollupTypescript({
        tsconfig: path.resolve(rootDir, "./tsconfig.json")
      }),
      rollupExternals.default()
    ]
  });
};

const path = require("path");

const rollup = require("rollup");
const rollupJson = require("@rollup/plugin-json");
const rollupExternals = require("rollup-plugin-node-externals");
const esbuild = require("rollup-plugin-esbuild");
const getBaseConfig = require("./rollup.config-base.cjs");

module.exports = function ({ rootDir, srcDirName = "src" }) {
  return rollup.defineConfig({
    ...getBaseConfig({ rootDir, srcDirName }),
    plugins: [
      rollupJson(),
      esbuild.default({
        sourceMap: true,
        minify: true,
        target: "esnext",
        jsx: "transform",
        tsconfig: path.resolve(rootDir, "./tsconfig.json")
      }),
      rollupExternals.default()
    ]
  });
};

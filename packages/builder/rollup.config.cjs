const path = require("path");

const rollup = require("rollup");
const rollupJson = require("@rollup/plugin-json");
const rollupNodeResolve = require("@rollup/plugin-node-resolve");
const rollupTypescript = require("@rollup/plugin-typescript");
const rollupExternals = require("rollup-plugin-node-externals");
const rollupSummary = require("rollup-plugin-summary");
const rollupScss = require("rollup-plugin-scss");
const autoprefixer = require("autoprefixer");
const sass = require("sass");
const postcss = require("postcss");

module.exports = function ({
  rootDir,
  excludeExternalDependenciesFromBundle = true
}) {
  return rollup.defineConfig({
    input: path.resolve(rootDir, "./src/index.ts"),
    output: [
      {
        file: path.resolve(rootDir, "./dist/cjs/index.cjs"),
        format: "cjs",
        sourcemap: true
      },
      {
        file: path.resolve(rootDir, "./dist/esm/index.mjs"),
        format: "es",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom"],
    plugins: [
      rollupJson(),
      rollupTypescript({
        sourceMap: true,
        outputToFilesystem: true
      }),
      excludeExternalDependenciesFromBundle
        ? rollupExternals()
        : rollupNodeResolve.nodeResolve(),
      rollupSummary(),
      rollupScss({
        output: path.resolve(rootDir, "./dist/styles/index.css"),
        sourceMap: true,
        processor: () => postcss([autoprefixer()]),
        sass,
        outputStyle: "compressed"
      })
    ].filter(Boolean)
  });
};

const path = require("path");

const rollup = require("rollup");
const rollupJson = require("@rollup/plugin-json");
const rollupNodeResolve = require("@rollup/plugin-node-resolve");
const esbuild = require("rollup-plugin-esbuild");
const rollupExternals = require("rollup-plugin-node-externals");
const rollupSummary = require("rollup-plugin-summary");
const rollupScss = require("rollup-plugin-scss");
const autoprefixer = require("autoprefixer");
const sass = require("sass");
const postcss = require("postcss");
const linaria = require("@linaria/rollup");
const css = require("rollup-plugin-css-only");
const babel = require("@rollup/plugin-babel");

module.exports = function ({
  rootDir,
  excludeExternalDependenciesFromBundle = true
}) {
  return rollup.defineConfig({
    input: path.resolve(rootDir, "./src/index.ts"),
    output: [
      {
        file: path.resolve(rootDir, "./dist/index.cjs"),
        format: "cjs",
        sourcemap: true
      },
      {
        dir: path.resolve(rootDir, "./dist"),
        format: "es",
        sourcemap: true,
        preserveModules: true
      }
    ],
    external: ["react", "react-dom"],
    plugins: [
      esbuild.default({
        sourceMap: true,
        minify: true,
        target: "esnext",
        jsx: "transform",
        tsconfig: path.resolve(rootDir, "./tsconfig.json")
      }),
      linaria.default({
        sourceMap: process.env.NODE_ENV !== "production"
      }),
      css({
        output: "dist/linaria.css"
      }),
      babel.default({
        configFile: path.resolve(__dirname, "./babel.config.js")
      }),
      rollupJson(),
      excludeExternalDependenciesFromBundle
        ? rollupExternals.externals()
        : rollupNodeResolve.nodeResolve(),
      rollupSummary(),
      rollupScss({
        output: path.resolve(rootDir, "./css/styles.css"),
        processor: () => postcss([autoprefixer()]),
        sass,
        sourceMap: true,
        outputStyle: "compressed"
      })
    ].filter(Boolean)
  });
};

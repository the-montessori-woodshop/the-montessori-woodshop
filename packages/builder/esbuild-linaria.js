const path = require("path");
const linaria = require("@linaria/esbuild");
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

const prod = process.env.NODE_ENV === "production";

/**
 *
 * @param {rootDir: string; outputFormat: "mjs" | "cjs"}
 */
module.exports = ({ rootDir, outputFormat = "mjs" }) => {
  esbuild
    .build({
      entryPoints: ["src/index.ts"],
      outdir: path.resolve(rootDir, "./dist"),
      outExtension: {
        ".js": `.${outputFormat}`
      },
      bundle: true,
      splitting: prod,
      // minify: prod,
      sourcemap: true,
      format: outputFormat === "mjs" ? "esm" : "cjs",
      target: outputFormat === "mjs" ? "esnext" : "commonjs",
      jsx: "transform",
      tsconfig: path.resolve(rootDir, "./tsconfig.json"),
      plugins: [
        nodeExternalsPlugin(),
        linaria.default({
          sourceMap: prod,
          babelOptions: {
            configFile: path.resolve(__dirname, "./babel.config.js")
          }
        })
      ]
    })
    .catch(() => process.exit(1));
};

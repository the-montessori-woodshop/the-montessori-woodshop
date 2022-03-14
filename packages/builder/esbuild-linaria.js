const path = require("path");
const linaria = require("@linaria/esbuild");
const esbuild = require("esbuild");

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
      minify: prod,
      sourcemap: true,
      target: outputFormat === "mjs" ? "esnext" : "commonjs",
      jsx: "transform",
      tsconfig: path.resolve(rootDir, "./tsconfig.json"),
      plugins: [
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

import path from "path";
import * as url from "url";

import linaria from "@linaria/esbuild";
import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const repoRoot = path.resolve(__dirname, "../");

type OutputFormats = "esm" | "cjs";
const formats: OutputFormats[] = ["esm", "cjs"];

function esbuildConfig({
  outputFormat,
  isProd,
  watch
}: {
  outputFormat: OutputFormats;
  isProd: boolean;
  watch: boolean;
}) {
  esbuild
    .build({
      entryPoints: [path.resolve(repoRoot, "./src/index.ts")],
      outdir: path.resolve(repoRoot, "./dist"),
      outExtension: {
        ".js": outputFormat === "cjs" ? ".cjs" : ".mjs"
      },
      bundle: true,
      /**
       * Code splitting isn't working. It will destroy pure exports
       * https://github.com/evanw/esbuild/issues/16
       */
      // splitting: isProd && outputFormat === "esm",
      /**
       * Minification is unnecessary since the app bundler will
       * minify any code. Minification also strips out PURE
       * statements for dead code elimination
       */
      // minify: isProd,
      watch: watch
        ? {
            onRebuild(error, result) {
              if (error) console.error("watch build failed:", error);
              else console.log("watch build succeeded:", result);
            }
          }
        : false,
      sourcemap: true,
      format: outputFormat === "esm" ? "esm" : "cjs",
      target: "esnext",
      jsx: "transform",
      tsconfig: path.resolve(repoRoot, "./tsconfig.json"),
      allowOverwrite: true,
      plugins: [
        pnpPlugin(),
        nodeExternalsPlugin(),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        linaria.default({
          sourceMap: isProd,
          displayName: !isProd,
          babelOptions: {
            configFile: path.resolve(repoRoot, "./babel.config.cjs")
          }
        })
      ]
    })
    .then(() => {
      console.log(
        `Successfully built "@internal/components" in ${
          outputFormat === "cjs" ? "in cjs" : "in mjs"
        }.`
      );
    })
    .catch((error) => {
      console.log(new Error(error));
      process.exit(1);
    })
    .finally(() => {
      if (watch) {
        console.log("Watching for changes...");
      }
    });
}

export const build = ({
  isProd,
  watch = false
}: {
  isProd: boolean;
  watch?: boolean;
}) => {
  formats.forEach((format) =>
    esbuildConfig({
      outputFormat: format,
      isProd,
      watch
    })
  );
};

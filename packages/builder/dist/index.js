import path from "path";
import * as url from "url";
import linaria from "@linaria/esbuild";
import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const formats = ["esm", "cjs"];
function esbuildConfig({ rootDir, outputFormat, isProd, watch }) {
    esbuild
        .build({
        entryPoints: [path.resolve(rootDir, "./src/index.ts")],
        outdir: path.resolve(rootDir, "./dist"),
        outExtension: {
            ".js": outputFormat === "cjs" ? ".cjs" : ".mjs"
        },
        bundle: true,
        watch: watch
            ? {
                onRebuild(error, result) {
                    if (error)
                        console.error("watch build failed:", error);
                    else
                        console.log("watch build succeeded:", result);
                }
            }
            : false,
        sourcemap: true,
        format: outputFormat === "esm" ? "esm" : "cjs",
        target: "esnext",
        jsx: "transform",
        tsconfig: path.resolve(rootDir, "./tsconfig.json"),
        allowOverwrite: true,
        plugins: [
            pnpPlugin(),
            nodeExternalsPlugin(),
            linaria.default({
                sourceMap: isProd,
                displayName: !isProd,
                babelOptions: {
                    configFile: path.resolve(__dirname, "../babel.config.cjs")
                }
            })
        ]
    })
        .then(() => {
        console.log(`Successfully built "@internal/components" in ${outputFormat === "cjs" ? "in cjs" : "in mjs"}.`);
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
export const build = ({ isProd, rootDir, watch = false }) => {
    formats.forEach((format) => esbuildConfig({
        rootDir,
        outputFormat: format,
        isProd,
        watch
    }));
};

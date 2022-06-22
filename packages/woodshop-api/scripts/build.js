require("./env");

const esbuild = require("esbuild");
// const alias = require("esbuild-plugin-alias");
const {
  NodeModulesPolyfillPlugin
} = require("@esbuild-plugins/node-modules-polyfill");

async function build() {
  const mode = process.env.NODE_ENV?.toLowerCase() ?? "development";

  await esbuild.build({
    entryPoints: ["./src/handler.ts"],
    outfile: "./dist/worker.js",
    bundle: true,
    minify: mode === "production",
    sourcemap: mode !== "production",
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
      __dirname: JSON.stringify(__dirname)
    },
    plugins: [NodeModulesPolyfillPlugin()],
    inject: ["./process-env.shim.js"]
  });
}

build()
  .then(() => {})
  .catch((err) => {
    process.exit(1);
  })
  .finally(() => {
    console.log("Api built successfully.");
  });

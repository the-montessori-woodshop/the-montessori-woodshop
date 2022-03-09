import path, { dirname } from "path";
import { fileURLToPath } from "url";

import esbuild from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mode = process.env.NODE_ENV?.toLowerCase() ?? "development";

async function buildClient() {
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, "../src/client/index.ts")],
    outfile: path.resolve(__dirname, "../dist/client/client.js"),
    minify: mode !== "development",
    sourcemap: mode !== "development",
    bundle: true,
    format: "cjs",
    target: "node",
    watch:
      mode === "development"
        ? {
            onRebuild(error, result) {
              if (error) console.error("watch client build failed:", error);
              else console.log("watch client build succeeded:", result);
            }
          }
        : false,
    target: "",
    tsconfig: path.resolve(__dirname, "../tsconfig.json")
  });
}

buildClient()
  .then(() => {
    if (mode === "development") {
      console.log("watching client...");
    }
  })
  .catch((err) => {
    process.exit(1);
  });

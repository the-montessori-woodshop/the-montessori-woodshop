import path, { dirname } from "path";
import { fileURLToPath } from "url";

import esbuild from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildClient() {
  await esbuild.build({
    entryPoints: [path.resolve(__dirname, "../src/client/index.ts")],
    outdir: path.resolve(__dirname, "../client"),
    minify: true,
    sourcemap: true,
    target: "",
    tsconfig: path.resolve(__dirname, "../tsconfig.json")
  });
}

buildClient()
  .then(() => {})
  .catch((err) => {
    process.exit(1);
  });

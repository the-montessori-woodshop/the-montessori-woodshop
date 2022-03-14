const builder = require("@woodshop/builder/esbuild-linaria");
const path = require("path");

builder({
  rootDir: path.resolve(__dirname, "../"),
  outputFormat: "mjs"
});

const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist")
  },
  // Cloudflare Worker environment is similar to a webworker
  target: "webworker",
  resolve: {
    extensions: [".ts", ".js"],
    // Alias for resolving the Prisma Client properly
    alias: {
      "@prisma/client$": require.resolve("@prisma/client")
      // path: require.resolve("path-browserify")
    }
  },
  // plugins: [new NodePolyfillPlugin()],
  context: __dirname,
  mode: "development",
  // Wrangler doesn't like eval which devtools use in development.
  devtool: "none",
  module: {
    rules: [
      {
        // Compile Typescript code
        test: /\.ts?$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "esnext",
          tsconfigRaw: require("./tsconfig.json")
        }
      }
    ]
  }
};

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist")
  },
  // Cloudflare Worker environment is similar to a webworker
  target: "webworker",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    // Alias for resolving the Prisma Client properly
    alias: {
      "@prisma/client$": require.resolve("@prisma/client")
    }
  },
  context: __dirname,
  mode: "development",
  // Wrangler doesn't like eval which devtools use in development.
  devtool: "none",
  module: {
    rules: [
      {
        // Compile Typescript code
        test: /\.tsx?$/,
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

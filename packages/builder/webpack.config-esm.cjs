const path = require("path");
const { WebpackPnpExternals } = require("webpack-pnp-externals");

module.exports = function ({ rootDir, withExternals = false }) {
  return {
    mode: "production",
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(rootDir, ".webpack-cache")
    },
    experiments: {
      topLevelAwait: true,
      outputModule: true
    },
    output: {
      path: path.resolve(rootDir, "dist/esm"),
      filename: "index.mjs",
      module: true,
      environment: { module: true },
      library: {
        type: "module"
      }
    },
    target: "es2021",
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css"]
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          use: {
            loader: "swc-loader",
            options: {
              minify: true,
              sourceMaps: true,
              jsc: {
                target: "es2021",
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                minify: {
                  compress: true,
                  mangle: true
                },
                transform: {
                  react: {
                    runtime: "automatic"
                  }
                }
              }
            }
          }
        }
      ]
    },
    externals: [
      !withExternals &&
        WebpackPnpExternals({
          importType: "module"
        })
    ].filter(Boolean),
    externalsType: "module"
  };
};

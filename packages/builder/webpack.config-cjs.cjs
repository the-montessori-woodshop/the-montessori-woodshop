const path = require("path");
const { WebpackPnpExternals } = require("webpack-pnp-externals");

module.exports = function ({ rootDir, withExternals = false }) {
  return {
    mode: "production",
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(rootDir, ".webpack-cache")
    },
    output: {
      path: path.resolve(rootDir, "dist/cjs"),
      filename: "index.cjs",
      library: {
        type: "commonjs"
      }
    },
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
                target: "commonjs",
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
    // https://webpack.js.org/configuration/externals/#externalstypenode-commonjs
    experiments: {
      outputModule: true
    },
    externals: [
      !withExternals &&
        WebpackPnpExternals({
          importType: "commonjs"
        })
    ].filter(Boolean),
    externalsType: "commonjs"
  };
};

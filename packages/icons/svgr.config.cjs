module.exports = {
  prettier: true,
  prettierConfig: ".prettierrc",
  svgo: true,
  typescript: true,
  ignoreExisting: false,
  titleProp: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      {
        name: "removeDimensions",
        active: true
      }
    ]
  },
  outDir: "src/generated",
  jsxRuntime: "classic",
  ref: true,
  memo: true
};

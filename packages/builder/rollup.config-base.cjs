const path = require("path");

const { defineConfig } = require("rollup");

const getBaseConfig = ({ rootDir, srcDirName = "src" }) => {
  const { name } = require(path.resolve(rootDir, "./package.json"));
  console.log(`Building "${name}" library...`);

  return defineConfig({
    input: path.resolve(rootDir, `./${srcDirName}/index.ts`),
    output: [
      {
        file: path.resolve(rootDir, "./dist/index.cjs"),
        format: "cjs",
        sourcemap: true,
        compact: true
      },
      {
        dir: path.resolve(rootDir, "./dist"),
        format: "es",
        sourcemap: true,
        preserveModules: true,
        compact: true
      }
    ]
  });
};

module.exports = getBaseConfig;

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const scssFilesGlob = resolve(__dirname, "../app/**/*.scss");
export const scssFilesGlobIgnore = resolve(__dirname, "../app/styles.scss");
export const scssFilesOutputLocation = resolve(__dirname, "../app/styles.scss");

export const getImportStatementFromFilePath = (filePath) => {
  const rootDir = __dirname.split("/scripts")[0];
  const location = filePath.split(`${rootDir}/app`)[1];
  const relLocation = `.${location}`;
  const im = `@import "${relLocation}";\n`;
  return im;
};

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const scssFilesGlob = resolve(__dirname, "../app/**/*.scss");
export const scssFilesOutputLocation = resolve(__dirname, "../app/styles.scss");

export const getImportStatementFromFilePath = (filePath) => {
  const location = filePath.split("woodshop-dashboard/app")[1];
  const relLocation = `.${location}`;
  const im = `@import "${relLocation}";\n`;
  return im;
};

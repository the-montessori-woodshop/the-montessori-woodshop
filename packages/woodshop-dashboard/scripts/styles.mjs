import fs from "fs";

import glob from "glob";

import {
  getImportStatementFromFilePath,
  scssFilesGlob,
  scssFilesOutputLocation,
} from "./styles.utils.mjs";

glob(scssFilesGlob, null, function (err, files) {
  if (err) {
    throw err;
  }
  const file = files.reduce((accum, filePath) => {
    const importName = getImportStatementFromFilePath(filePath);
    return accum.concat(importName);
  }, "");

  fs.writeFileSync(scssFilesOutputLocation, file);
});

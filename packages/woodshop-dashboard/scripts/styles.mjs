import fs from "fs";

import glob from "glob";

import {
  getImportStatementFromFilePath,
  scssFilesGlob,
  scssFilesGlobIgnore,
  scssFilesOutputLocation,
} from "./styles.utils.mjs";

glob(
  scssFilesGlob,
  {
    ignore: scssFilesGlobIgnore,
  },
  function (err, files) {
    if (err) {
      throw err;
    }
    const file = files.reduce((accum, filePath) => {
      const importName = getImportStatementFromFilePath(filePath);
      return accum.concat(importName);
    }, "");

    fs.writeFileSync(scssFilesOutputLocation, file);
  }
);

import fs from "fs";

import watch from "glob-watcher";

import {
  getImportStatementFromFilePath,
  scssFilesGlob,
  scssFilesGlobIgnore,
  scssFilesOutputLocation,
} from "./styles.utils.mjs";

var watcher = watch([scssFilesGlob, scssFilesGlobIgnore]);

// Listen for other events
// No async completion available because this is the raw chokidar instance
watcher.on("add", function (path, stat) {
  fs.appendFileSync(
    scssFilesOutputLocation,
    getImportStatementFromFilePath(path)
  );
  // `path` is the path of the changed file
  // `stat` is an `fs.Stat` object (not always available)
});

import { dirname } from "path";
import { fileURLToPath } from "url";

import createRollupConfig from "@woodshop/builder/linaria";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default createRollupConfig({
  rootDir: __dirname
});

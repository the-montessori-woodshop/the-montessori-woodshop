import { dirname } from "path";
import { fileURLToPath } from "url";

import createRollupConfig from "@woodshop/builder/esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default createRollupConfig({
  rootDir: __dirname
});

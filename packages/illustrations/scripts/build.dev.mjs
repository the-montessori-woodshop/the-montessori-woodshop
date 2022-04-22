import path from "path";
import * as url from "url";

import { build } from "@woodshop/builder";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

build({
  rootDir: path.resolve(__dirname, "../"),
  isProd: false,
  watch: true
});

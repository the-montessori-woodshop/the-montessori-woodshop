import type { ClassValue } from "clsx";
import clsx from "clsx";

export const makeStyles =
  (className: string | undefined) =>
  (...inputs: ClassValue[]) =>
    clsx(className, "d8leh8P", ...inputs);

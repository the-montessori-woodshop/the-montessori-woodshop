import clsx, { ClassDictionary } from "clsx";

export const libPrefix = "v9WS7";

/**
 * Creates a className string that should be used
 * to pass to the `className` prop. Adds a prefix to
 * all of the classNames that are created here
 */
export const makeClass = (
  className: string | undefined,
  element: string,
  variants?: ClassDictionary
) => clsx(className, libPrefix, element, variants);

export type ColorScheme =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "white"
  | "grey1"
  | "grey2"
  | "grey3"
  | "grey4"
  | "grey5"
  | "black"
  | "inherit";

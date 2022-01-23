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

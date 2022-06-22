export const createRouteLinkStyles = (...args: string[]) => {
  return args.map((styles) => {
    return {
      rel: "stylesheet",
      href: styles,
    };
  });
};

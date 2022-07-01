function isNumber(n: string) {
  // @ts-ignore
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
export const parseUrlSearchParams = <T extends Record<string, unknown>>(
  url: string
): Partial<T> => {
  const newUrl = new URL(url);
  const params = new URLSearchParams(newUrl.search);
  const paramObj = Object.entries(Object.fromEntries(params.entries())).reduce<
    Partial<T>
  >((accum, [key, value]) => {
    if (value === "true") {
      return {
        ...accum,
        [key]: true
      };
    }
    if (value === "false") {
      return {
        ...accum,
        [key]: false
      };
    }
    if (isNumber(value)) {
      return {
        ...accum,
        [key]: Number(value)
      };
    }
    return accum;
  }, {});

  return paramObj;
};

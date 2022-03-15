import { ColorScheme, ResponsiveDevices } from "./theme.types";

export const breakpointMap: { [key in ResponsiveDevices]: number } = {
  mobile: 0,
  tablet: 577,
  desktop: 992
};

export function makeClass<T extends string>(classNameValues: T[]) {
  const obj = classNameValues.reduce<Record<T, string>>((accum, key) => {
    return { ...accum, [key]: `.${key}` };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }, {});
  return obj as unknown as Record<T, string>;
}

export const cxColor = makeClass<ColorScheme>([
  "black",
  "white",
  "grey1",
  "grey2",
  "grey3",
  "grey4",
  "grey5",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "inherit"
]);

export const makeRem = (pixel: number): string => `${pixel / 16}rem`;

export const makeResponsiveMedia = (size: ResponsiveDevices) => {
  if (size === "mobile") {
    return `@media only screen and (min-width: 0)`;
  }

  if (size === "tablet") {
    return `@media only screen and (min-width: var(--breakpoint-tablet))`;
  }

  return `@media only screen and (min-width: var(--breakpoint-desktop))`;
};

export const createColorMap = (cxColor: ColorScheme) => ({
  "c-primary": cxColor === "primary",
  "c-secondary": cxColor === "secondary",
  "c-danger": cxColor === "danger",
  "c-warning": cxColor === "warning",
  "c-success": cxColor === "success",
  "c-white": cxColor === "white",
  "c-grey1": cxColor === "grey1",
  "c-grey2": cxColor === "grey2",
  "c-grey3": cxColor === "grey3",
  "c-grey4": cxColor === "grey4",
  "c-grey5": cxColor === "grey5",
  "c-black": cxColor === "black"
});

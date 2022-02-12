import { ColorScheme } from "../theme";

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

import "./Box.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type BoxProps = JSX.IntrinsicElements["div"];

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, ...restProps },
  ref
) {
  return (
    <div className={makeClass(undefined, "b0c9Y3q")} {...restProps} ref={ref}>
      {children}
    </div>
  );
});

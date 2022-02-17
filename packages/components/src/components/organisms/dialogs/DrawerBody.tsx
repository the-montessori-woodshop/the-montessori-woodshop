import "./DrawerBody.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type DrawerBodyProps = JSX.IntrinsicElements["div"];

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  function DrawerBody({ children, className, ...restProps }, ref) {
    return (
      <div {...restProps} className={makeClass(className, "bfIid")} ref={ref}>
        {children}
      </div>
    );
  }
);

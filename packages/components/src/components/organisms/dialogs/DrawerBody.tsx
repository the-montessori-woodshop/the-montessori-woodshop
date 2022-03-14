import "./DrawerBody.scss";

import React, { forwardRef } from "react";

import { makeClass } from "../../../theme/theme.utils";

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

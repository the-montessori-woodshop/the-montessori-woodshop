import React from "react";
import { forwardRef } from "react";

import { TypographyCopy, TypographyCopyProps } from "../../atoms";

export const TabText = forwardRef<HTMLDivElement, TypographyCopyProps>(
  function TabText({ style, children, ...restProps }, ref) {
    return (
      <TypographyCopy
        {...restProps}
        ref={ref}
        style={{
          ...style,
          fontWeight: "inherti",
          fontSize: "inherit",
          color: "inherit"
        }}
      >
        {children}
      </TypographyCopy>
    );
  }
);

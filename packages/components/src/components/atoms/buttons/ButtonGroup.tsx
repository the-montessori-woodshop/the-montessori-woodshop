import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXLayout = "stacked" | "inline" | "inline-fill";
const cxLayout = makeClass<CXLayout>(["inline", "inline-fill", "stacked"]);

const SButtonGroup = styled.div`
  &${cxLayout["stacked"]} {
    & > * {
      &:not(:first-child) {
        margin-top: ${makeRem(16)};
      }
    }
  }

  &${cxLayout["inline"]}, &${cxLayout["inline-fill"]} {
    display: flex;

    & > * {
      &:not(:first-child) {
        margin-left: ${makeRem(16)};
      }
    }
  }

  &${cxLayout["inline-fill"]} {
    & > * {
      flex: 1;
    }
  }

  & + & {
    margin-top: ${makeRem(16)};
  }
`;

export type ButtonGroupProps = JSX.IntrinsicElements["div"] & {
  cxLayout?: CXLayout;
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    { children, className, cxLayout = "stacked", ...restProps },
    ref
  ) {
    return (
      <SButtonGroup
        className={clsx(className, cxLayout)}
        {...restProps}
        ref={ref}
      >
        {children}
      </SButtonGroup>
    );
  }
);

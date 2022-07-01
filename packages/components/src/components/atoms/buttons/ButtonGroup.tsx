import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXLayout = "stacked" | "inline" | "inline-fill";
type CXOrder = "default" | "reversed";
const cxLayout = makeClass<CXLayout>(["inline", "inline-fill", "stacked"]);
const cxOrder = makeClass<CXOrder>(["default", "reversed"]);

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
    align-items: center;

    ${cxOrder["reversed"]} {
      flex-direction: row-reverse;
    }

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
  cxOrder?: CXOrder;
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      children,
      className,
      cxLayout = "stacked",
      cxOrder = "reversed",
      ...restProps
    },
    ref
  ) {
    return (
      <SButtonGroup
        className={clsx(className, cxLayout, cxOrder)}
        {...restProps}
        ref={ref}
      >
        {children}
      </SButtonGroup>
    );
  }
);

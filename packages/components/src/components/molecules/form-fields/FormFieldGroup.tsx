import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXLayout = "stacked" | "inline" | "inline-fill";

export type FormFieldGroupProps = JSX.IntrinsicElements["div"] & {
  cxLayout?: CXLayout;
};
const cxLayout = makeClass<CXLayout>(["inline", "inline-fill", "stacked"]);

const SDiv = styled.div`
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

export const FormFieldGroup = forwardRef<HTMLDivElement, FormFieldGroupProps>(
  function FormFieldGroup(
    { children, className, cxLayout = "stacked", ...restProps },
    ref
  ) {
    return (
      <SDiv {...restProps} className={clsx(className, cxLayout)} ref={ref}>
        {children}
      </SDiv>
    );
  }
);

import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";

import { makeClass, makeRem } from "../../theme/theme.utils";

type CXSize = "default" | "small";
const cxSizeAndError = makeClass<CXSize | "error">([
  "default",
  "small",
  "error"
]);

const SLabel = styled.label`
  font-family: var(--font-family);
  line-height: var(--font-line-height);
  margin-bottom: ${makeRem(4)};
  cursor: pointer;
  font-weight: bold;
  color: var(--color-black);
  display: block;
  width: auto;

  &${cxSizeAndError["default"]} {
    font-size: ${makeRem(14)};
  }
  &${cxSizeAndError["default"]} {
    font-size: ${makeRem(12)};
  }
  &${cxSizeAndError["error"]} {
    color: var(--color-danger);
  }
`;

export type InputLabelProps = JSX.IntrinsicElements["label"] & {
  cxSize?: "default" | "small";
  error?: string;
};

const InputLabelFC = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabelFC(
    { children, className, cxSize = "default", error = false, ...props },
    ref
  ) {
    return (
      <SLabel
        className={clsx(className, cxSize, error ? "error" : "")}
        {...props}
        ref={ref}
      >
        {children}
      </SLabel>
    );
  }
);
export const InputLabel = memo(InputLabelFC);

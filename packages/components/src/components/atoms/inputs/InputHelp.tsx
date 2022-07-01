import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXSize = "default" | "small";
const cxSizeAndError = makeClass<CXSize | "error">([
  "default",
  "small",
  "error"
]);

const SDiv = styled.div`
  font-family: var(--font-family);
  line-height: var(--font-line-height);
  color: var(--color-textSecondary);
  font-size: ${makeRem(14)};

  &${cxSizeAndError["default"]} {
    font-size: ${makeRem(14)};
    padding-left: ${makeRem(12)};
    padding-top: ${makeRem(8)};
  }
  &${cxSizeAndError["small"]} {
    font-size: ${makeRem(12)};
    padding-left: ${makeRem(10)};
    padding-top: ${makeRem(6)};
  }
  &${cxSizeAndError["error"]} {
    color: var(--color-danger);
  }
`;

export type InputHelpProps = JSX.IntrinsicElements["div"] & {
  error?: boolean | string;
  cxSize?: "default" | "small";
};

const InputHelpFC = forwardRef<HTMLDivElement, InputHelpProps>(
  function InputHelpFC(
    { className, children, cxSize = "default", error, ...props },
    ref
  ) {
    if (!children) {
      return null;
    }

    return (
      <SDiv
        className={clsx(className, cxSize, error ? "error" : "")}
        {...props}
        ref={ref}
      >
        {children}
      </SDiv>
    );
  }
);

export const InputHelp = memo(InputHelpFC);

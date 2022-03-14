import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";

import { makeClass, makeRem } from "../../theme/theme.utils";

type CXVariant = "text" | "contained";
type CXColor = "primary" | "secondary" | "danger" | "warning";
type CXSize = "small" | "large";

const cxVariant = makeClass<CXVariant>(["text", "contained"]);
const cxColor = makeClass<CXColor>([
  "primary",
  "secondary",
  "danger",
  "warning"
]);
const cxSize = makeClass<CXSize>(["large", "small"]);

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  cxVariant?: CXVariant;
  cxColor?: CXColor;
  cxSize?: CXSize;
};

const SButton = styled.button`
  border: 0;
  background: 0;
  margin: 0;
  padding: 0;
  min-width: ${makeRem(44)};
  min-height: ${makeRem(44)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-family);
  line-height: var(--font-line-height);
  font-size: ${makeRem(16)};

  ${cxVariant["contained"]},
  ${cxVariant["text"]} {
    min-width: ${makeRem(144)};
    padding-left: ${makeRem(24)};
    padding-right: ${makeRem(24)};
    border-radius: ${makeRem(2)};
    color: var(--color-textPrimary);
  }

  ${cxVariant["contained"]} {
    ${cxColor["danger"]} {
      background-color: var(--color-danger);
      color: var(--color-white);
    }
    ${cxColor["primary"]} {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
    ${cxColor["secondary"]} {
      background-color: var(--color-secondary);
      color: var(--color-textPrimary);
    }
    ${cxColor["warning"]} {
      background-color: var(--color-warning);
      color: var(--color-white);
    }
  }

  ${cxVariant["text"]} {
    background: transparent;

    ${cxColor["primary"]} {
      color: var(--color-primary);
    }
    ${cxColor["secondary"]} {
      color: var(--color-secondary);
    }
    ${cxColor["warning"]} {
      color: var(--color-warning);
    }
    ${cxColor["danger"]} {
      color: var(--color-danger);
    }
  }

  ${cxSize["large"]} {
    height: ${makeRem(44)};
    font-size: ${makeRem(16)};
    font-weight: bold;
  }

  ${cxSize["small"]} {
    height: ${makeRem(32)};
    font-size: ${makeRem(12)};
    font-weight: bold;
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      cxVariant,
      cxColor = "primary",
      cxSize = "large",
      className,
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <SButton
        ref={ref}
        className={clsx(className, cxVariant, cxSize, cxColor)}
        {...restProps}
      >
        {children}
      </SButton>
    );
  }
);

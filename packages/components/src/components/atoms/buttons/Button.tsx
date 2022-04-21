import { css } from "@linaria/core";
import clsx from "clsx";
import React from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXVariant = "text" | "contained";
type CXColor = "primary" | "secondary" | "danger" | "warning" | "success";
type CXSize = "small" | "large";

const cxVariant = makeClass<CXVariant>(["text", "contained"]);
const cxColor = makeClass<CXColor>([
  "primary",
  "secondary",
  "danger",
  "warning",
  "success"
]);
const cxSize = makeClass<CXSize>(["large", "small"]);

type ButtonBaseProps = {
  cxVariant?: CXVariant;
  cxColor?: CXColor;
  cxSize?: CXSize;
};

export type ButtonProps = JSX.IntrinsicElements["button"] & ButtonBaseProps;
export type ButtonLinkProps = JSX.IntrinsicElements["a"] & ButtonBaseProps;
export type ButtonContentProps = JSX.IntrinsicElements["div"] & ButtonBaseProps;

const SButtonCSS = css`
  border: 0;
  background: 0;
  margin: 0;
  padding: 0;
  min-width: ${makeRem(44)};
  height: ${makeRem(44)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-family);
  line-height: var(--font-line-height);
  font-size: ${makeRem(16)};

  &${cxVariant["contained"]}, &${cxVariant["text"]} {
    padding-left: ${makeRem(36)};
    padding-right: ${makeRem(36)};
    border-radius: ${makeRem(8)};
    color: var(--color-textPrimary);
    transition: all 0.05s ease-in-out;

    &:active {
      transform: scale(0.98);
    }

    &${cxSize["large"]} {
      min-width: ${makeRem(144)};
    }
  }

  &${cxVariant["contained"]} {
    &${cxColor["primary"]} {
      background-color: var(--color-primary);
      color: var(--color-white);
      box-shadow: 0 24px 44px -12px rgba(var(--color-primary-rgb), 0.35);
    }
    &${cxColor["secondary"]} {
      background-color: var(--color-secondary);
      color: var(--color-textPrimary);
      box-shadow: 0 24px 44px -12px rgba(var(--color-secondary-rgb), 0.35);
    }
    &${cxColor["danger"]} {
      background-color: var(--color-danger);
      color: var(--color-white);
      box-shadow: 0 24px 44px -12px rgba(var(--color-danger-rgb), 0.35);
    }
    &${cxColor["warning"]} {
      background-color: var(--color-warning);
      color: var(--color-white);
      box-shadow: 0 24px 44px -12px rgba(var(--color-warning-rgb), 0.35);
    }
    &${cxColor["success"]} {
      background-color: var(--color-success);
      color: var(--color-textPrimary);
      box-shadow: 0 24px 44px -12px rgba(var(--color-success-rgb), 0.35);
    }
  }

  &${cxVariant["text"]} {
    background: transparent;

    &${cxColor["primary"]} {
      color: var(--color-primary);
    }
    &${cxColor["secondary"]} {
      color: var(--color-secondary);
    }
    &${cxColor["warning"]} {
      color: var(--color-warning);
    }
    &${cxColor["danger"]} {
      color: var(--color-danger);
    }
    &${cxColor["success"]} {
      color: var(--color-success);
    }
  }

  &${cxSize["large"]} {
    height: ${makeRem(44)};
    font-size: ${makeRem(16)};
    font-weight: 500;
  }

  &${cxSize["small"]} {
    height: ${makeRem(32)};
    font-size: ${makeRem(12)};
    font-weight: 500;
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
      <button
        ref={ref}
        className={clsx(className, SButtonCSS, cxVariant, cxSize, cxColor)}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

export const ButtonContent = React.forwardRef<
  HTMLDivElement,
  ButtonContentProps
>(function ButtonLink(
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
    <div
      ref={ref}
      className={clsx(className, SButtonCSS, cxVariant, cxSize, cxColor)}
      {...restProps}
    >
      {children}
    </div>
  );
});

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
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
      <a
        ref={ref}
        className={clsx(className, SButtonCSS, cxVariant, cxSize, cxColor)}
        {...restProps}
      >
        {children}
      </a>
    );
  }
);

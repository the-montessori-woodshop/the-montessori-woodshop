import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { memo } from "react";

import { makeClass, makeRem } from "../../../theme";

type CXVariant = "body1" | "body2" | "caption" | "overline";
type CXColor =
  | "textPrimary"
  | "textSecondary"
  | "danger"
  | "warning"
  | "success"
  | "inherit";
const cxVariant = makeClass<CXVariant>([
  "body1",
  "body2",
  "caption",
  "overline"
]);
const cxColor = makeClass<CXColor>([
  "danger",
  "success",
  "textPrimary",
  "textSecondary",
  "warning",
  "inherit"
]);

export type TypographyCopyProps = (
  | JSX.IntrinsicElements["p"]
  | JSX.IntrinsicElements["span"]
  | JSX.IntrinsicElements["div"]
) & {
  cxNode?: "p" | "div" | "span";
  cxVariant?: "body1" | "body2" | "caption" | "overline";
  cxColor?:
    | "textPrimary"
    | "textSecondary"
    | "danger"
    | "warning"
    | "success"
    | "inherit";
};

const STypographyCopy = styled.div`
  font-family: var(--font-family);
  line-height: var(--font-line-height);

  &${cxVariant["body1"]} {
    font-size: ${makeRem(16)};
    color: var(--color-textPrimary);
  }

  &${cxVariant["body2"]} {
    font-size: ${makeRem(14)};
    color: var(--color-textSecondary);
  }

  &${cxVariant["caption"]} {
    font-size: ${makeRem(12)};
    color: var(--color-textPrimary);
  }

  &${cxVariant["overline"]} {
    font-size: ${makeRem(12)};
    text-transform: uppercase;
    color: var(--color-textSecondary);
  }

  &${cxColor["danger"]} {
    color: var(--color-danger);
  }
  &${cxColor["textPrimary"]} {
    color: var(--color-textPrimary);
  }
  &${cxColor["textSecondary"]} {
    color: var(--color-textSecondary);
  }
  &${cxColor["warning"]} {
    color: var(--color-warning);
  }
  &${cxColor["success"]} {
    color: var(--color-success);
  }
  &${cxColor["inherit"]} {
    color: inherit;
  }
`;

const TypographyCopyFC = React.forwardRef<
  HTMLParagraphElement | HTMLDivElement,
  TypographyCopyProps
>(function TypographyCopyFC(
  {
    cxNode = "div",
    cxVariant = "body1",
    cxColor = "inherit",
    className,
    children,
    ...restProps
  },
  ref
) {
  return (
    <STypographyCopy
      {...restProps}
      ref={ref}
      as={cxNode}
      className={clsx(className, cxVariant, cxColor)}
    >
      {children}
    </STypographyCopy>
  );
});

export const TypographyCopy = memo(TypographyCopyFC);

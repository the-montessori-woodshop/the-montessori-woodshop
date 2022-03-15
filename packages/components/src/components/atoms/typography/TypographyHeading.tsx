import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";

type HeadingNodes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

export type TypographyHeadingProps = JSX.IntrinsicElements[HeadingNodes] & {
  cxNode: HeadingNodes;
  cxVariant?: HeadingNodes | "subtitle1" | "subtitle2";
};

const SHeading = styled.h1`
  font-family: var(--font-family-heading);
  line-height: var(--font-line-height-heading);
  color: inherit;
  margin: 3rem 0 1.38rem;
`;

const CSS_H1 = css`
  margin-top: 0;
  font-size: 3.052rem;
  font-weight: bold;
`;
const CSS_H2 = css`
  font-size: 2.441rem;
`;
const CSS_H3 = css`
  font-size: 1.953rem;
  font-weight: bold;
`;
const CSS_H4 = css`
  font-size: 1.563rem;
`;
const CSS_H5 = css`
  font-size: 1.25rem;
`;
const CSS_H6 = css`
  font-size: 1rem;
`;
const CSS_STitle1 = css`
  font-family: var(--font-family);
  color: var(--color-textPrimary);
  font-size: 1.25rem;
`;
const CSS_STitle2 = css`
  font-family: var(--font-family);
  color: var(--color-textPrimary);
  font-size: 1rem;
`;

export const TypographyHeading = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement,
  TypographyHeadingProps
>(function TypographyHeading(
  { cxNode = "h1", cxVariant, className, children, ...restProps },
  ref
) {
  return (
    <SHeading
      {...restProps}
      ref={ref}
      as={cxNode}
      className={clsx(className, {
        [CSS_H1]: cxVariant === "h1",
        [CSS_H2]: cxVariant === "h2",
        [CSS_H3]: cxVariant === "h3",
        [CSS_H4]: cxVariant === "h4",
        [CSS_H5]: cxVariant === "h5",
        [CSS_H6]: cxVariant === "h6",
        [CSS_STitle1]: cxVariant === "subtitle1",
        [CSS_STitle2]: cxVariant === "subtitle2"
      })}
    >
      {children}
    </SHeading>
  );
});

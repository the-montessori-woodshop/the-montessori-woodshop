import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";

export type NavbarLinkListItemTextProps = JSX.IntrinsicElements["div"] & {
  active?: boolean;
};

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-heading);
  font-size: makeRem(16);
  position: relative;
  color: var(--color-black);

  &.isActive {
    font-weight: bold;
    &:after {
      content: "";
      position: absolute;
      top: ${`calc(100% + ${makeRem(12)})`};
      left: 0;
      right: 0;
      height: ${makeRem(1)};
      background: var(--color-black);
    }
  }
`;

export const NavbarLinkListItemText = forwardRef<
  HTMLDivElement,
  NavbarLinkListItemTextProps
>(function NavbarLinkListItemText(
  { children, className, active, ...props },
  ref
) {
  return (
    <SDiv
      className={clsx(className, {
        isActive: active
      })}
      {...props}
      ref={ref}
    >
      {children}
    </SDiv>
  );
});

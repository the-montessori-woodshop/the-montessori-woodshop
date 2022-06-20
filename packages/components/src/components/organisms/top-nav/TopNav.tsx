import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme";
import { TopNavSection } from "./TopNavSection";

type TopNavProps = JSX.IntrinsicElements["nav"];

const SNav = styled.nav`
  height: var(--topnav-width);
  border-bottom: ${makeRem(1)} solid var(--color-grey3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${makeRem(32)};

  &${TopNavSection} {
    &:first-child {
      flex: 1;
    }
  }
`;

export const TopNav = forwardRef<HTMLElement, TopNavProps>(function TopNav(
  { children, ...restProps },
  ref
) {
  return (
    <SNav {...restProps} ref={ref}>
      {children}
    </SNav>
  );
});

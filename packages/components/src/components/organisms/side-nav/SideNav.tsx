import { styled } from "@linaria/react";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme";
import { SideNavSection } from "./SideNavSection";

type SideNavProps = JSX.IntrinsicElements["nav"];

const SNav = styled.nav`
  width: var(--sidenav-width);
  background-color: var(--color-grey1);
  border-right: ${makeRem(1)} solid var(--color-grey3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &${SideNavSection} {
    &:first-child {
      flex: 1;
    }
  }
`;

export const SideNav = forwardRef<HTMLElement, SideNavProps>(function SideNav(
  { children, ...restProps },
  ref
) {
  return (
    <SNav {...restProps} ref={ref}>
      {children}
    </SNav>
  );
});

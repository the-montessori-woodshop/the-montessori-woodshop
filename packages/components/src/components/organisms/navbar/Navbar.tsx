import { styled } from "@linaria/react";
import React from "react";

import { makeRem } from "../../../theme/theme.utils";

export type NavProps = JSX.IntrinsicElements["nav"];

const SNavbar = styled.nav`
  padding-left: ${makeRem(24)};
  padding-right: ${makeRem(24)};
  display: flex;
  height: var(--navbar-height);
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  background-color: rgba(var(--color-white-rgba), 0.9);
  box-shadow: 0 -1px 11px 8px var(--color-drop-shadow);
  z-index: 10;
`;

export const Navbar = React.forwardRef<HTMLElement, NavProps>(function Navbar(
  { children, ...props },
  ref
) {
  return (
    <SNavbar {...props} ref={ref}>
      {children}
    </SNavbar>
  );
});

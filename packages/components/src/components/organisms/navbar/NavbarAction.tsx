import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme";

export type NavbarActionProps = JSX.IntrinsicElements["button"];

const SNavbarAction = styled.button`
  border: 0;
  background: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: ${makeRem(44)};
  width: ${makeRem(44)};
  margin-left: ${makeRem(12)};
`;

export const NavbarAction = forwardRef<HTMLButtonElement, NavbarActionProps>(
  function NavbarAction({ children, ...props }, ref) {
    return (
      <SNavbarAction {...props} ref={ref}>
        {children}
      </SNavbarAction>
    );
  }
);

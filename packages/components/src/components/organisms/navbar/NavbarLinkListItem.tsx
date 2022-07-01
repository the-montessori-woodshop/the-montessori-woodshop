import { styled } from "@linaria/react";
import React, { forwardRef } from "react";

import { makeRem } from "../../../theme/theme.utils";

export type NavbarLinkListItemProps = JSX.IntrinsicElements["li"];

const SNavbarLinkListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: ${makeRem(44)};
  }
`;

export const NavbarLinkListItem = forwardRef<
  HTMLLIElement,
  NavbarLinkListItemProps
>(function NavbarLinkListItem({ children, ...props }, ref) {
  return (
    <SNavbarLinkListItem {...props} ref={ref}>
      {children}
    </SNavbarLinkListItem>
  );
});

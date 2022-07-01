import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

export type NavbarSectionProps = JSX.IntrinsicElements["div"] & {
  cxMain?: boolean;
};
enum ClassNameEnum {
  expand = "expand"
}

const SDiv = styled.div`
  display: flex;
  align-items: center;

  &.expand {
    flex: 1;
  }
`;

export const NavbarSection = forwardRef<HTMLDivElement, NavbarSectionProps>(
  function NavbarSection(
    { children, className, cxMain = false, ...props },
    ref
  ) {
    return (
      <SDiv
        className={clsx(className, {
          [ClassNameEnum.expand]: cxMain
        })}
        {...props}
        ref={ref}
      >
        {children}
      </SDiv>
    );
  }
);

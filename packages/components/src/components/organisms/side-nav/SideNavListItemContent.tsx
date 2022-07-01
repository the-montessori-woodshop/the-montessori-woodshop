import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme";

export const SLi = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--color-grey4);

  & * {
    z-index: 1;
  }

  &::before {
    content: "";
    height: ${makeRem(54)};
    width: ${makeRem(54)};
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -${makeRem(54 / 2)};
    margin-top: -${makeRem(54 / 2)};
    border-radius: ${makeRem(4)};
    background: transparent;
    transition: all 0.15s ease-in-out;
  }

  &.active {
    color: var(--color-white);

    &::before {
      background: var(--color-primary);
    }
  }

  &:hover:not(.active):not(.logo) {
    color: var(--color-black);

    &::before {
      background: var(--color-grey3);
    }
  }
`;

export type SideNavListItemContentProps = JSX.IntrinsicElements["div"] & {
  isActive?: boolean;
};

export const SideNavListItemContent = forwardRef<
  HTMLDivElement,
  SideNavListItemContentProps
>(function SideNavListItemContent(
  { children, className, isActive, ...restProps },
  ref
) {
  return (
    <SLi
      {...restProps}
      className={clsx(className, {
        active: !!isActive
      })}
      ref={ref}
    >
      {children}
    </SLi>
  );
});

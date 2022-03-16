import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme";
import {
  TablistContextProviderProps,
  useTablistContextContext
} from "./Tablist.context";

const cxSize = makeClass<TablistContextProviderProps["cxSize"]>(["lg", "sm"]);

export type TabProps = JSX.IntrinsicElements["button"] & {
  isActive?: boolean;
};

export const STab = styled.button`
  padding: 0 ${makeRem(16)};
  border: none;
  background: none;

  &:hover:not(.active) {
    background-color: var(--color-grey2);
  }

  &${cxSize["lg"]} {
    height: ${makeRem(48)};
    border-radius: ${makeRem(4)};
    min-width: ${makeRem(200)};
    text-align: left;

    &.active {
      background-color: var(--color-grey3);
      color: var(--color-black);
      font-weight: bold;
    }
  }

  &${cxSize["sm"]} {
    height: ${makeRem(32)};
    border-radius: ${makeRem(2)};

    &.active {
      background-color: var(--color-primary);
      color: var(--color-white);
      font-weight: bold;
    }
  }
`;

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { children, className, isActive, ...restProps },
  ref
) {
  const { cxSize } = useTablistContextContext();

  return (
    <STab
      {...restProps}
      ref={ref}
      className={clsx(className, cxSize, {
        active: !!isActive
      })}
      aria-selected={isActive ? "true" : "false"}
    >
      {children}
    </STab>
  );
});

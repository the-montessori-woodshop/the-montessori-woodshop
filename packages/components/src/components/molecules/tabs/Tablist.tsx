import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme";
import {
  TablistContextProvider,
  TablistContextProviderProps
} from "./Tablist.context";

type CXLayout = "vertical" | "horizontal";
type CXVariant = "standalone" | "contained";

const cxLayout = makeClass<CXLayout>(["horizontal", "vertical"]);
const cxVariant = makeClass<CXVariant>(["standalone", "contained"]);

export type TabsListProps = JSX.IntrinsicElements["div"] & {
  /**
   * Provides a label that describes the purpose of the set of tabs.
   * @example
   * "aria-label=Entertainment"
   */
  ariaLabel: string;
  cxLayout: CXLayout;
  cxVariant?: CXVariant;
} & TablistContextProviderProps;

const SDiv = styled.div`
  &${cxLayout["horizontal"]} {
    display: flex;
    align-items: center;
    display: inline-block;

    &${cxVariant["contained"]} {
      border: ${makeRem(1)} solid var(--color-grey3);
      background: var(--color-grey1);
      border-radius: ${makeRem(4)};
      padding: ${makeRem(4)};
    }

    & > * + * {
      margin-left: ${makeRem(12)};
    }
  }

  &${cxLayout["vertical"]} {
    display: block;
    font-size: ${makeRem(16)} !important;

    & > * {
      display: block;
    }

    & > * + * {
      margin-top: ${makeRem(12)};
    }
  }

  &${cxVariant["standalone"]} {
  }
`;

export const Tablist = forwardRef<HTMLDivElement, TabsListProps>(
  function Tablist(
    {
      children,
      className,
      cxLayout,
      cxVariant = "standalone",
      cxSize,
      ariaLabel,
      ...restProps
    },
    ref
  ) {
    return (
      <TablistContextProvider cxSize={cxSize}>
        <SDiv
          role="tablist"
          aria-label={ariaLabel}
          {...restProps}
          ref={ref}
          className={clsx(className, cxLayout, cxVariant)}
        >
          {children}
        </SDiv>
      </TablistContextProvider>
    );
  }
);

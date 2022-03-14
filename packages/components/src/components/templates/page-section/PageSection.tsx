import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

import {
  makeClass,
  makeRem,
  makeResponsiveMedia
} from "../../../theme/theme.utils";

type CXLayout = "single-pane" | "split-pane";
type CXBackgrond = "main";

const cxLayout = makeClass<CXLayout>(["single-pane", "split-pane"]);
const cxBackground = makeClass<CXBackgrond>(["main"]);

export type PageSectionProps = JSX.IntrinsicElements["section"] & {
  cxLayout?: "single-pane" | "split-pane";
  cxBackground?: "main";
};

const SPageSection = styled.section`
  position: relative;
  padding: ${makeRem(24)};

  & > * {
    margin-left: auto;
    margin-right: auto;
    max-width: ${makeRem(1140)};
  }

  &${cxLayout["split-pane"]} {
    & > * {
      &:last-child {
        margin-top: ${makeRem(84)};
      }
    }
  }

  ${makeResponsiveMedia("desktop")} {
    padding: ${makeRem(84)};

    &${cxLayout["split-pane"]} {
      display: flex;
      justify-content: center;

      & > * {
        &:last-child {
          margin-top: 0;
          margin-left: ${makeRem(84)};
        }
      }
    }
  }

  &${cxBackground["main"]} {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      // background: url("/bg-main.webp");
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }
  }
`;

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  function PageSection(
    {
      className,
      cxLayout = "single-pane",
      cxBackground,
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <SPageSection
        {...restProps}
        className={clsx(className, cxLayout, cxBackground)}
        ref={ref}
      >
        {children}
      </SPageSection>
    );
  }
);

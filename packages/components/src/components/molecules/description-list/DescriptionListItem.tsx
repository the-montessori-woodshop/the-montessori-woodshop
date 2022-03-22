import clsx from "clsx";
import React, { forwardRef, memo } from "react";
import styled from "styled-components";

import {
  makeClass,
  makeRem,
  makeResponsiveMedia
} from "../../../theme/theme.utils";

type CXAlign = "left" | "right";
const cxAlign = makeClass<CXAlign>(["right", "left"]);

type DescriptionListItemProps = JSX.IntrinsicElements["div"] & {
  cxAlign?: "left" | "right";
};

const SDescriptionListItem = styled.div`
  display: flex;
  align-items: center;
  height: ${makeRem(44)};
  padding: 0 ${makeRem(16)};

  &:nth-child(2n) {
    background-color: var(--color-grey1);
  }

  & > *:first-child {
    ${makeResponsiveMedia("mobile")} {
      width: ${makeRem(160)};
      max-width: ${makeRem(220)};
      min-width: ${makeRem(160)};

      & > p {
        font-size: ${makeRem(14)} !important;
      }
    }
  }

  & > *:last-child {
    ${makeResponsiveMedia("mobile")} {
      text-align: right;
    }
    ${makeResponsiveMedia("tablet")} {
      text-align: left;
    }
  }

  ${cxAlign["left"]} {
    text-align: left;
  }

  ${cxAlign["right"]} {
    text-align: right;
  }
`;

const DescriptionListItemFC = forwardRef<
  HTMLDivElement,
  DescriptionListItemProps
>(function DescriptionListItemFC(
  { cxAlign, children, className, ...restProps },
  ref
) {
  return (
    <SDescriptionListItem
      className={clsx(className, cxAlign)}
      {...restProps}
      ref={ref}
    >
      {children}
    </SDescriptionListItem>
  );
});

export const DescriptionListItem = memo(DescriptionListItemFC);

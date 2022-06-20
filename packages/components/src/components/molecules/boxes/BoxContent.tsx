import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";

type CXVariant = "enclosed" | "line-separated" | "dense" | "no-gutters";
const cxVariant = makeClass<CXVariant | "has-titles">([
  "dense",
  "enclosed",
  "line-separated",
  "no-gutters",
  "has-titles"
]);

export type BoxContentProps = JSX.IntrinsicElements["div"] & {
  cxTitle?: string;
  cxSubtitle?: string;
  cxFull?: boolean;
  cxVariant?: CXVariant;
};

const SDiv = styled.div`
  & + & {
    margin-top: ${makeRem(48)};
  }

  &${cxVariant["enclosed"]} {
    padding: ${makeRem(24)};
    border-radius: ${makeRem(2)};
    border: ${makeRem(1)} solid var(--color-grey3);
  }

  &${cxVariant["line-separated"]} {
    border-top: ${makeRem(1)} solid var(--color-grey3);
    padding-top: ${makeRem(24)};
  }

  &${cxVariant["has-titles"]} {
    margin-top: ${makeRem(8)};
  }

  &${cxVariant["dense"]} {
    padding: ${makeRem(8)};
    border-radius: ${makeRem(2)};
    border: ${makeRem(1)} solid var(--color-grey3);
  }

  &${cxVariant["no-gutters"]} {
    border-radius: ${makeRem(2)};
    border: ${makeRem(1)} solid var(--color-grey3);
  }
`;

export const BoxContent = forwardRef<HTMLDivElement, BoxContentProps>(
  function BoxContent(
    {
      className,
      children,
      cxTitle,
      cxSubtitle,
      cxVariant = "enclosed",
      ...restProps
    },
    ref
  ) {
    return (
      <SDiv
        {...restProps}
        className={clsx(className, cxVariant, {
          hasTitles: cxTitle || cxSubtitle
        })}
        ref={ref}
      >
        {children}
      </SDiv>
    );
  }
);

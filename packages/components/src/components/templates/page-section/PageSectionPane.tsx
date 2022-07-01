import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { makeClass, makeResponsiveMedia } from "../../../theme/theme.utils";

type CXAlign = "left" | "center";
const cxAlign = makeClass<CXAlign>(["left", "center"]);

export type PageSectionPaneProps = JSX.IntrinsicElements["div"] & {
  cxAlign?: CXAlign;
};

const SPageSectionPane = styled.div`
  text-align: left;

  ${makeResponsiveMedia("desktop")} {
    margin-top: 0;
  }

  &${cxAlign["center"]} {
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    & * {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const PageSectionPane = forwardRef<HTMLDivElement, PageSectionPaneProps>(
  function PageSectionPane(
    { className, children, cxAlign = "center", ...restProps },
    ref
  ) {
    return (
      <SPageSectionPane
        {...restProps}
        className={clsx(className, cxAlign)}
        ref={ref}
      >
        {children}
      </SPageSectionPane>
    );
  }
);

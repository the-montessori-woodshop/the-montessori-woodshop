import { styled } from "@linaria/react";
import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";

import { makeRem } from "../../../theme";

export type TabPanelProps = JSX.IntrinsicElements["div"] & {
  /**
   * Refers to the tab element that controls the panel
   * Provides an accessible name for the tab panel.
   * @example
   * "aria-labeledby=ID_OF_TAB_FOR_THIS_PANEL"
   */
  ariaLabeledBy: string;
};

const SDiv = styled.div`
  padding: ${makeRem(28)};
`;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  function TabPanel({ children, className, ...restProps }, ref) {
    return (
      <SDiv role="tablist" {...restProps} ref={ref} className={clsx(className)}>
        {children}
      </SDiv>
    );
  }
);

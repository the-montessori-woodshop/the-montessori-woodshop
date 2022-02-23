import { ComponentMeta } from "@storybook/react";
import React, { forwardRef } from "react";

import { Responsive } from "./Responsive";

export default {
  title: "Molecules / Media / Responsive",
  component: Responsive
} as ComponentMeta<typeof Responsive>;

const Content = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  function Content({ children, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        ref={ref}
        style={{
          height: 100,
          width: 100,
          backgroundColor: "grey",
          ...restProps.style
        }}
      >
        {children}
      </div>
    );
  }
);

export const AtOrLessThanTablet = () => {
  return (
    <Responsive atOrLessThan="tablet">
      <Content>This should only display at less than or tablet</Content>
    </Responsive>
  );
};

export const AtOrLessThanDesktop = () => {
  return (
    <Responsive atOrLessThan="desktop">
      <Content>This should only display at less than or desktop</Content>
    </Responsive>
  );
};

export const AtOrGreaterThanDesktop = () => {
  return (
    <Responsive atOrGreaterThan="desktop">
      <Content>This should only display at less than or tablet</Content>
    </Responsive>
  );
};

export const OnlyMobile = () => {
  return (
    <Responsive only="mobile">
      <Content>This should only display on mobile</Content>
    </Responsive>
  );
};

export const OnlyTablet = () => {
  return (
    <Responsive only="tablet">
      <Content>This should only display on tablet</Content>
    </Responsive>
  );
};

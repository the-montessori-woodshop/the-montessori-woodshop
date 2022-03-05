import { ComponentMeta } from "@storybook/react";
import React, { forwardRef } from "react";

import { MediaQuery } from "./MediaQuery";

export default {
  title: "Molecules / Media / MediaQuery",
  component: MediaQuery
} as ComponentMeta<typeof MediaQuery>;

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
    <MediaQuery atOrLessThan="tablet">
      <Content>This should only display at less than or tablet</Content>
    </MediaQuery>
  );
};

export const AtOrLessThanDesktop = () => {
  return (
    <MediaQuery atOrLessThan="desktop">
      <Content>This should only display at less than or desktop</Content>
    </MediaQuery>
  );
};

export const AtOrGreaterThanDesktop = () => {
  return (
    <MediaQuery atOrGreaterThan="desktop">
      <Content>This should only display at less than or tablet</Content>
    </MediaQuery>
  );
};

export const OnlyMobile = () => {
  return (
    <MediaQuery only="mobile">
      <Content>This should only display on mobile</Content>
    </MediaQuery>
  );
};

export const OnlyTablet = () => {
  return (
    <MediaQuery only="tablet">
      <Content>This should only display on tablet</Content>
    </MediaQuery>
  );
};

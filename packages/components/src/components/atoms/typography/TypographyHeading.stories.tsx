import { ComponentMeta } from "@storybook/react";
import React from "react";

import { TypographyHeading } from "./TypographyHeading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Typography / TypographyHeading",
  component: TypographyHeading
} as ComponentMeta<typeof TypographyHeading>;

export const AllHeadings = () => {
  return (
    <>
      <TypographyHeading cxNode="h1">H1. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h2">H2. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h3">H3. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h4">H4. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h5">H5. A Visual Type Scale</TypographyHeading>
    </>
  );
};

export const AllHeadingsDifferentNodes = () => {
  return (
    <>
      <TypographyHeading cxNode="h1" cxVariant="h2">
        H1. Styled like an H2
      </TypographyHeading>
      <TypographyHeading cxNode="h2" cxVariant="h3">
        H2. Styled like an H3
      </TypographyHeading>
      <TypographyHeading cxNode="h3">H3. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h4">H4. A Visual Type Scale</TypographyHeading>
      <TypographyHeading cxNode="h5">H5. A Visual Type Scale</TypographyHeading>
    </>
  );
};

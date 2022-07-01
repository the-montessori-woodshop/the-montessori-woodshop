import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Fieldset } from "./Fieldset";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / Fieldset",
  component: Fieldset
} as ComponentMeta<typeof Fieldset>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args} />
);

export const LegendHidden = Template.bind({});
LegendHidden.args = {
  cxLegend: "This is the legend",
  children: (
    <div
      style={{
        height: "100px",
        width: "100%"
      }}
    />
  )
};

export const LegendShown = Template.bind({});
LegendShown.args = {
  cxLegend: "This is the legend",
  cxDisplayLegend: true,
  children: (
    <div
      style={{
        height: "100px",
        width: "100%"
      }}
    />
  )
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UnboxAlert } from "@woodshop/illustrations";
import React from "react";

import { Illustration } from "./Illustration";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Illustration / Illustration",
  component: Illustration
} as ComponentMeta<typeof Illustration>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration {...args} />
);

export const Base = Template.bind({});
Base.args = {
  cxSize: 300,
  children: <UnboxAlert />
};

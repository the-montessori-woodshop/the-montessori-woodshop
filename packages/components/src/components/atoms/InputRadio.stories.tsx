import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputRadio } from "./InputRadio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputRadio",
  component: InputRadio
} as ComponentMeta<typeof InputRadio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputRadio> = (args) => (
  <InputRadio {...args} />
);

export const base = Template.bind({});
base.args = {};

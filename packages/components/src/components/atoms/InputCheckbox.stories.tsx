import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputCheckbox } from "./InputCheckbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputCheckbox",
  component: InputCheckbox
} as ComponentMeta<typeof InputCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputCheckbox> = (args) => (
  <InputCheckbox {...args} />
);

export const Base = Template.bind({});
Base.args = {};

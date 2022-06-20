import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputTextarea } from "./InputTextarea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputTextarea",
  component: InputTextarea
} as ComponentMeta<typeof InputTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextarea> = (args) => (
  <InputTextarea {...args} />
);

export const Base = Template.bind({});
Base.args = {};

export const WPlaceholder = Template.bind({});
WPlaceholder.args = {
  placeholder: "This is some placeholder text"
};

export const WError = Template.bind({});
WError.args = {
  cxError: true
};

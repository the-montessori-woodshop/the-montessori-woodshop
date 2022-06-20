import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputFile } from "./InputFile";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputFile",
  component: InputFile
} as ComponentMeta<typeof InputFile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const Base = Template.bind({});
Base.args = {};

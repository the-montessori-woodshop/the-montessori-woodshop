import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldImageDropzone } from "./FormFieldImageDropzone";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldImageDropzone",
  component: FormFieldImageDropzone
} as ComponentMeta<typeof FormFieldImageDropzone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldImageDropzone> = (args) => (
  <FormFieldImageDropzone {...args} />
);

export const Base = Template.bind({});
Base.args = {};

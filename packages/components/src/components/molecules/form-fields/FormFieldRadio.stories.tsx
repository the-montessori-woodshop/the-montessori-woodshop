import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldRadio } from "./FormFieldRadio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldRadio",
  component: FormFieldRadio
} as ComponentMeta<typeof FormFieldRadio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldRadio> = (args) => (
  <FormFieldRadio {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base"
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "Tellus Ipsum Amet Purus Fringilla"
};

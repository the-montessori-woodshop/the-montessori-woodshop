import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldPassword } from "./FormFieldPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldPassword",
  component: FormFieldPassword
} as ComponentMeta<typeof FormFieldPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldPassword> = (args) => (
  <FormFieldPassword {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base"
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "FormFieldPassword w. Label"
};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  id: "wPlaceholder",
  label: "FormFieldPassword w. Label w. Placeholder",
  placeholder: "FormFieldPassword Placeholder"
};

export const wError = Template.bind({});
wError.args = {
  id: "wError",
  label: "FormFieldPassword w. Label w. Error",
  error: "FormFieldPassword error help text"
};

export const wHelp = Template.bind({});
wHelp.args = {
  id: "wHelp",
  label: "FormFieldPassword w. Label w. Help",
  help: "FormFieldPassword error help text"
};

export const wCenterAligned = Template.bind({});
wHelp.args = {
  id: "wHelp",
  cxAlignment: "center"
};

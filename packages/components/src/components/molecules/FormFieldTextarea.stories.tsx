import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldTextarea } from "./FormFieldTextarea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldTextarea",
  component: FormFieldTextarea
} as ComponentMeta<typeof FormFieldTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldTextarea> = (args) => (
  <FormFieldTextarea {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "base"
};

export const WLabel = Template.bind({});
WLabel.args = {
  id: "wLabel",
  label: "FormFieldTextarea w. Label"
};

export const WPlaceholder = Template.bind({});
WPlaceholder.args = {
  id: "WPlaceholder",
  label: "FormFieldTextarea w. Label w. Placeholder",
  placeholder: "FormFieldTextarea Placeholder"
};

export const WError = Template.bind({});
WError.args = {
  id: "WError",
  label: "FormFieldTextarea w. Label w. Error",
  error: "FormFieldTextarea error help text"
};

export const WHelp = Template.bind({});
WHelp.args = {
  id: "WHelp",
  label: "FormFieldTextarea w. Label w. Help",
  help: "FormFieldTextarea error help text"
};

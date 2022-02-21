import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldText } from "./FormFieldText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldText",
  component: FormFieldText
} as ComponentMeta<typeof FormFieldText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldText> = (args) => (
  <FormFieldText {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "Base"
};

export const WLabel = Template.bind({});
WLabel.args = {
  id: "WLabel",
  label: "FormFieldText w. Label"
};

export const WPlaceholder = Template.bind({});
WPlaceholder.args = {
  id: "WPlaceholder",
  label: "FormFieldText w. Label w. Placeholder",
  placeholder: "FormFieldText Placeholder"
};

export const WError = Template.bind({});
WError.args = {
  id: "WError",
  label: "FormFieldText w. Label w. Error",
  error: "FormFieldText error help text"
};

export const WHelp = Template.bind({});
WHelp.args = {
  id: "WHelp",
  label: "FormFieldText w. Label w. Help",
  help: "FormFieldText error help text"
};

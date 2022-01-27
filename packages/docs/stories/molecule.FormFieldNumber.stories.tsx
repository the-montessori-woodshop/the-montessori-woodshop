import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormFieldNumber } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldNumber",
  component: FormFieldNumber,
} as ComponentMeta<typeof FormFieldNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldNumber> = (args) => (
  <FormFieldNumber {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base",
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "FormFieldNumber w. Label",
};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  id: "wPlaceholder",
  label: "FormFieldNumber w. Label w. Placeholder",
  placeholder: "FormFieldNumber Placeholder",
};

export const wError = Template.bind({});
wError.args = {
  id: "wError",
  label: "FormFieldNumber w. Label w. Error",
  error: "FormFieldNumber error help text",
};

export const wHelp = Template.bind({});
wHelp.args = {
  id: "wHelp",
  label: "FormFieldNumber w. Label w. Help",
  help: "FormFieldNumber error help text",
};

export const wCenterAligned = Template.bind({});
wHelp.args = {
  id: "wHelp",
  cxAlignment: "center",
};

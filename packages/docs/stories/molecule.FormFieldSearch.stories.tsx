import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormFieldSearch } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldSearch",
  component: FormFieldSearch,
} as ComponentMeta<typeof FormFieldSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldSearch> = (args) => (
  <FormFieldSearch {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base",
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "FormFieldSearch w. Label",
};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  id: "wPlaceholder",
  label: "FormFieldSearch w. Label w. Placeholder",
  placeholder: "FormFieldSearch Placeholder",
};

export const wError = Template.bind({});
wError.args = {
  id: "wError",
  label: "FormFieldSearch w. Label w. Error",
  error: "FormFieldSearch error help text",
};

export const wHelp = Template.bind({});
wHelp.args = {
  id: "wHelp",
  label: "FormFieldSearch w. Label w. Help",
  help: "FormFieldSearch error help text",
};

export const wCenterAligned = Template.bind({});
wHelp.args = {
  id: "wHelp",
  cxAlignment: "center",
};

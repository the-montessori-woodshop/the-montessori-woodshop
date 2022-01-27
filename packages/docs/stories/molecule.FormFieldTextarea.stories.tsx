import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormFieldTextarea } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldTextarea",
  component: FormFieldTextarea,
} as ComponentMeta<typeof FormFieldTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldTextarea> = (args) => (
  <FormFieldTextarea {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base",
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "FormFieldTextarea w. Label",
};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  id: "wPlaceholder",
  label: "FormFieldTextarea w. Label w. Placeholder",
  placeholder: "FormFieldTextarea Placeholder",
};

export const wError = Template.bind({});
wError.args = {
  id: "wError",
  label: "FormFieldTextarea w. Label w. Error",
  error: "FormFieldTextarea error help text",
};

export const wHelp = Template.bind({});
wHelp.args = {
  id: "wHelp",
  label: "FormFieldTextarea w. Label w. Help",
  help: "FormFieldTextarea error help text",
};

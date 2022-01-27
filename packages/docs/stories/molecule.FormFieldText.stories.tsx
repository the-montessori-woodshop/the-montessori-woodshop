import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormFieldText } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldText",
  component: FormFieldText,
} as ComponentMeta<typeof FormFieldText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldText> = (args) => (
  <FormFieldText {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base",
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "FormFieldText w. Label",
};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  id: "wPlaceholder",
  label: "FormFieldText w. Label w. Placeholder",
  placeholder: "FormFieldText Placeholder",
};

export const wError = Template.bind({});
wError.args = {
  id: "wError",
  label: "FormFieldText w. Label w. Error",
  error: "FormFieldText error help text",
};

export const wHelp = Template.bind({});
wHelp.args = {
  id: "wHelp",
  label: "FormFieldText w. Label w. Help",
  help: "FormFieldText error help text",
};

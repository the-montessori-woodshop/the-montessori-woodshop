import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormFieldCheckbox } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldCheckbox",
  component: FormFieldCheckbox,
} as ComponentMeta<typeof FormFieldCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldCheckbox> = (args) => (
  <FormFieldCheckbox {...args} />
);

export const base = Template.bind({});
base.args = {
  id: "base",
};

export const wLabel = Template.bind({});
wLabel.args = {
  id: "wLabel",
  label: "Tellus Ipsum Amet Purus Fringilla",
};

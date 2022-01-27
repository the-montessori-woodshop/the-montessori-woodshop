import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputTextarea } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputTextarea",
  component: InputTextarea,
} as ComponentMeta<typeof InputTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextarea> = (args) => (
  <InputTextarea {...args} />
);

export const base = Template.bind({});
base.args = {};

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  placeholder: "This is some placeholder text",
};

export const wError = Template.bind({});
wError.args = {
  cxError: true,
};

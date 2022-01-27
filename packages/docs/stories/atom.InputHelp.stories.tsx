import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputHelp } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputHelp",
  component: InputHelp,
} as ComponentMeta<typeof InputHelp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputHelp> = (args) => (
  <InputHelp {...args} />
);

export const base = Template.bind({});
base.args = {
  children: "Input help",
};

export const baseWError = Template.bind({});
baseWError.args = {
  ...base.args,
  error: true,
};

export const small = Template.bind({});
small.args = {
  children: "Input help - size small",
  cxSize: "small",
};

export const smallWError = Template.bind({});
smallWError.args = {
  ...small.args,
  error: true,
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputLabel } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputLabel",
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args} />
);

export const base = Template.bind({});
base.args = {
  children: "Input label",
};

export const small = Template.bind({});
small.args = {
  children: "Input label - size small",
  cxSize: "small",
};

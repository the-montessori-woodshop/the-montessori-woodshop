import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputNumber } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputNumber",
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const base = Template.bind({});
base.args = {};

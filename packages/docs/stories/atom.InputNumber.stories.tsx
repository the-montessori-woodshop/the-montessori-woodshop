import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputNumber } from "@woodshop/components";
import { Pencil } from "@woodshop/icons";

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

export const wPlaceholder = Template.bind({});
wPlaceholder.args = {
  placeholder: "This is some placeholder text",
};

export const wPlaceholderAligndCenter = Template.bind({});
wPlaceholderAligndCenter.args = {
  placeholder: "This is some placeholder text",
  cxAlignment: "center",
};

export const wError = Template.bind({});
wError.args = {
  cxError: true,
};

export const wErrorAlginedCenter = Template.bind({});
wErrorAlginedCenter.args = {
  ...wError.args,
  cxAlignment: "center",
};

export const sizeSmall = Template.bind({});
sizeSmall.args = {
  cxSize: "small",
};

export const sizeSmall_wPlaceholder = Template.bind({});
sizeSmall_wPlaceholder.args = {
  ...sizeSmall.args,
  placeholder: "This is some placeholder text",
};

export const sizeSmall_wError = Template.bind({});
sizeSmall_wError.args = {
  ...sizeSmall.args,
  cxError: true,
};

export const sizeSmall_wError_alignedCenter = Template.bind({});
sizeSmall_wError_alignedCenter.args = {
  ...sizeSmall_wError.args,
  cxAlignment: "center",
};

export const wStartIcon = Template.bind({});
wStartIcon.args = {
  StartIcon: Pencil,
};

export const wEndIcon = Template.bind({});
wEndIcon.args = {
  EndIcon: Pencil,
};

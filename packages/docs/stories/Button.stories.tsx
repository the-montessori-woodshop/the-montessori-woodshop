import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained_Primary_Large = Template.bind({});
Contained_Primary_Large.args = {
  cxColor: "primary",
  cxVariant: "contained",
  cxSize: "large",
  children: "Primary Conatined Large Button",
};

export const Contained_Secondary_Large = Template.bind({});
Contained_Secondary_Large.args = {
  cxVariant: "contained",
  cxColor: "secondary",
  cxSize: "large",
  children: "Secondary Conatined Large Button",
};

export const Text_Primary_Large = Template.bind({});
Text_Primary_Large.args = {
  cxVariant: "text",
  cxColor: "primary",
  cxSize: "large",
  children: "Secondary Text Large Button",
};

export const Text_Secondary_Large = Template.bind({});
Text_Secondary_Large.args = {
  cxVariant: "text",
  cxColor: "secondary",
  cxSize: "large",
  children: "Secondary Text Large Button",
};

// Small
export const Contained_Primary_Small = Template.bind({});
Contained_Primary_Small.args = {
  cxColor: "primary",
  cxVariant: "contained",
  cxSize: "small",
  children: "Primary Conatined small Button",
};

export const Contained_Secondary_Small = Template.bind({});
Contained_Secondary_Small.args = {
  cxVariant: "contained",
  cxColor: "secondary",
  cxSize: "small",
  children: "Secondary Conatined small Button",
};

export const Text_Primary_Small = Template.bind({});
Text_Primary_Small.args = {
  cxVariant: "text",
  cxColor: "primary",
  cxSize: "small",
  children: "Secondary Text small Button",
};

export const Text_Secondary_Small = Template.bind({});
Text_Secondary_Small.args = {
  cxVariant: "text",
  cxColor: "secondary",
  cxSize: "small",
  children: "Secondary Text small Button",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TypographyCopy } from "@woodshop/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Typography - Copy",
  component: TypographyCopy,
} as ComponentMeta<typeof TypographyCopy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypographyCopy> = (args) => (
  <TypographyCopy {...args} />
);

export const body1 = Template.bind({});
body1.args = {
  cxVariant: "body1",
  children: "Primary Conatined Large Button",
};

export const body2 = Template.bind({});
body2.args = {
  cxVariant: "body2",
  children: "Primary Conatined Large Button",
};

export const caption = Template.bind({});
caption.args = {
  cxVariant: "caption",
  children: "Primary Conatined Large Button",
};

export const overline = Template.bind({});
overline.args = {
  cxVariant: "overline",
  children: "Primary Conatined Large Button",
};

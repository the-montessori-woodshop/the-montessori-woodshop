import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { TypographyCopy } from "./TypographyCopy";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Typography / TypographyCopy",
  component: TypographyCopy
} as ComponentMeta<typeof TypographyCopy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypographyCopy> = (args) => (
  <TypographyCopy {...args} />
);

export const body1 = Template.bind({});
body1.args = {
  cxVariant: "body1",
  children:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
};

export const body2 = Template.bind({});
body2.args = {
  cxVariant: "body2",
  children:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
};

export const caption = Template.bind({});
caption.args = {
  cxVariant: "caption",
  children:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
};

export const overline = Template.bind({});
overline.args = {
  cxVariant: "overline",
  children:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
};

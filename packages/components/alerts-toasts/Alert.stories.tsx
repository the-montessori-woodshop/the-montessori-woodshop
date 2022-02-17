import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Alert } from "./Alert";

export default {
  title: "Molecules / Alerts",
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Base = Template.bind({});
Base.args = {
  onClose: undefined,
  children:
    "combination explanation limited organization wooden stopped then hollow business oil root event replied search spin nearby automobile gravity particularly complete physical fireplace brass engineer"
};

export const Error = Template.bind({});
Error.args = {
  ...Base.args,
  variant: "error"
};

export const Warning = Template.bind({});
Warning.args = {
  ...Base.args,
  variant: "warning"
};

export const Successs = Template.bind({});
Successs.args = {
  ...Base.args,
  variant: "success"
};

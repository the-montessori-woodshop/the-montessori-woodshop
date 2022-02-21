import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldEmail } from "./FormFieldEmail";
import { FormFieldGroup } from "./FormFieldGroup";
import { FormFieldPassword } from "./FormFieldPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldGroup",
  component: FormFieldGroup
} as ComponentMeta<typeof FormFieldGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldGroup> = (args) => (
  <FormFieldGroup {...args} />
);

export const Stacked = Template.bind({});
Stacked.args = {
  children: (
    <>
      <FormFieldEmail id="email" label="Email address" />
      <FormFieldPassword id="password" label="Password" />
    </>
  )
};

export const InlineAndStacked = Template.bind({});
InlineAndStacked.args = {
  children: (
    <FormFieldGroup>
      <FormFieldGroup cxLayout="inline">
        <FormFieldEmail id="email" label="Email address" />
        <FormFieldPassword id="password" label="Password" />
      </FormFieldGroup>
      <FormFieldGroup cxLayout="stacked">
        <FormFieldEmail id="email" label="Email address" />
        <FormFieldPassword id="password" label="Password" />
      </FormFieldGroup>
    </FormFieldGroup>
  )
};

export const InlineFillAndStacked = Template.bind({});
InlineFillAndStacked.args = {
  children: (
    <FormFieldGroup>
      <FormFieldGroup cxLayout="inline-fill">
        <FormFieldEmail id="email" label="Email address" />
        <FormFieldPassword id="password" label="Password" />
        <FormFieldPassword id="confirm-password" label="Confirm Password" />
      </FormFieldGroup>
      <FormFieldGroup cxLayout="stacked">
        <FormFieldEmail id="email" label="Email address" />
        <FormFieldPassword id="password" label="Password" />
      </FormFieldGroup>
    </FormFieldGroup>
  )
};

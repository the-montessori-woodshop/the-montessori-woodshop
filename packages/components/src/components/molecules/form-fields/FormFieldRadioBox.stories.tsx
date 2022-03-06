import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FormFieldRadioBox } from "./FormFieldRadioBox";
import { FormFieldRadioBoxText } from "./FormFieldRadioBoxText";
import { FormFieldGroup } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molocules / FormFields / FormFieldRadioBox",
  component: FormFieldRadioBox
} as ComponentMeta<typeof FormFieldRadioBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFieldRadioBox> = (args) => (
  <FormFieldRadioBox {...args} />
);

export const Base = Template.bind({});
Base.args = {
  id: "base",
  children: "This is a radio box"
};

export const WithNodeChildren = Template.bind({});
WithNodeChildren.args = {
  id: "base",
  children: (
    <FormFieldRadioBoxText>
      <strong>This is strong</strong>&nbsp;this is regular
    </FormFieldRadioBoxText>
  )
};

export const WithFormFieldGrouping = () => {
  return (
    <FormFieldGroup>
      <FormFieldRadioBox id="option-1" name="group">
        Option 1
      </FormFieldRadioBox>
      <FormFieldRadioBox id="option-2" name="group">
        Option 2
      </FormFieldRadioBox>
    </FormFieldGroup>
  );
};

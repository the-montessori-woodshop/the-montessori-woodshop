import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Buttons / ButtonGroup",
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Stacked = Template.bind({});
Stacked.args = {
  children: (
    <>
      <Button cxVariant="contained">test</Button>
      <Button cxVariant="contained">test</Button>
    </>
  )
};

export const InlineAndStacked = Template.bind({});
InlineAndStacked.args = {
  children: (
    <ButtonGroup>
      <ButtonGroup cxLayout="inline">
        <Button cxVariant="text">test</Button>
        <Button cxVariant="contained">test</Button>
      </ButtonGroup>
      <ButtonGroup cxLayout="stacked">
        <Button cxVariant="contained">test</Button>
      </ButtonGroup>
    </ButtonGroup>
  )
};

export const InlineFillAndStacked = Template.bind({});
InlineFillAndStacked.args = {
  children: (
    <ButtonGroup>
      <ButtonGroup cxLayout="inline-fill">
        <Button cxVariant="contained">test</Button>
        <Button cxVariant="contained">test</Button>
      </ButtonGroup>
      <ButtonGroup cxLayout="stacked">
        <Button cxVariant="contained">test</Button>
        <Button cxVariant="contained">test</Button>
      </ButtonGroup>
    </ButtonGroup>
  )
};

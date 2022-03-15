import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pencil } from "@woodshop/icons";
import React from "react";

import { Icon } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Icons / Icon",
  component: Icon
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const base = Template.bind({});
base.args = {
  children: <Pencil />
};

export const incrementingSizes = () => {
  return (
    <>
      <Icon cxTitle="pencil">
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={36}>
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={48}>
        <Pencil />
      </Icon>
    </>
  );
};

export const incrementingSizesWColors = () => {
  return (
    <>
      <Icon cxTitle="pencil">
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={32} cxColor="grey5">
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={36} cxColor="grey3">
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={40} cxColor="danger">
        <Pencil />
      </Icon>
      <Icon cxTitle="pencil" cxSize={44} cxColor="success">
        <Pencil />
      </Icon>
    </>
  );
};

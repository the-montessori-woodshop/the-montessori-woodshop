import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "@woodshop/components";
import { Pencil } from "@woodshop/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Icons / Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const base = Template.bind({});
base.args = {
  children: <Pencil />,
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

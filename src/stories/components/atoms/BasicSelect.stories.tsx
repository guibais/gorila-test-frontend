import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicSelect from "../../../components/ui/atoms/basicSelect";
import "../../../App.scss";

export default {
  title: "Atoms/BasicSelect",
  component: BasicSelect,
  argTypes: {
    options: {
      control: "object",
    },
  },
} as ComponentMeta<typeof BasicSelect>;

const Template: ComponentStory<typeof BasicSelect> = (args) => (
  <BasicSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { title: "Opção 1", value: "Valor 1" },
    { title: "Opção 2", value: "Valor 2" },
    { title: "Opção 3", value: "Valor 3" },
  ],
};

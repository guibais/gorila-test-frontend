import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicInput from "../../../components/ui/atoms/basicInput";
import "../../../App.scss";

export default {
  title: "Atoms/BasicInput",
  component: BasicInput,
  argTypes: {
    currency: { control: "text" },
  },
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => (
  <BasicInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
  disabled: false,
  name: "name",
  currency: undefined,
};

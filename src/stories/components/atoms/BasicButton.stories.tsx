import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicButton from "../../../components/ui/atoms/basicButton";
import "../../../App.scss";

export default {
  title: "Atoms/BasicButton",
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => (
  <BasicButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  isOutlined: false,
  isLoading: false,
};

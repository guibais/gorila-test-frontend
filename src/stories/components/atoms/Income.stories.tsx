import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Income from "../../../components/ui/atoms/income";
import "../../../App.scss";

export default {
  title: "Atoms/Income",
  component: Income,
} as ComponentMeta<typeof Income>;

const Template: ComponentStory<typeof Income> = (args) => <Income {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "100",
  date: new Date().toISOString(),
  currency: "R$",
  isLoading: false,
};

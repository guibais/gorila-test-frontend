import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import IncomeList from "../../../components/ui/molecules/incomeList";

export default {
  IncomeList: "Molecules/IncomeList",
  component: IncomeList,
} as ComponentMeta<typeof IncomeList>;

const Template: ComponentStory<typeof IncomeList> = (args) => (
  <IncomeList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Renda Fixa",
  incomeList: [
    {
      value: "100",
      date: new Date().toISOString(),
      currency: "R$",
      isLoading: false,
    },
  ],
  isLoading: false,
};

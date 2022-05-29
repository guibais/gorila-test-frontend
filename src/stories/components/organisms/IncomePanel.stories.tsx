import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import IncomeList from "../../../components/ui/molecules/incomeList";

export default {
  IncomeList: "Organisms/IncomeList",
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
      isLoading: false,
      currency: "R$",
      date: new Date().toISOString(),
      value: "100",
    },
    {
      isLoading: false,
      currency: "R$",
      date: new Date().toISOString(),
      value: "100",
    },
  ],
};

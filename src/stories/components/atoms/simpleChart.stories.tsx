import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleChart } from "../../../components/ui/atoms/simpleChart";
import "../../../App.scss";

export default {
  title: "Atoms/SimpleChart",
  component: SimpleChart,
} as ComponentMeta<typeof SimpleChart>;

const Template: ComponentStory<typeof SimpleChart> = (args) => (
  <SimpleChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    labels: [`Renda Fixa 60%`, `Renda Variável 40%`],
    datasets: [
      {
        data: [600, 400],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
};

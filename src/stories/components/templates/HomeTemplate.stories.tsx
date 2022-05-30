import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import HomeTemplate from "../../../components/ui/templates/HomeTemplate";
import PlaceHolder from "../../assets/images/placeholder.png";
import { ButtonType } from "../../../components/ui/atoms/BasicButton";
import InlineSelect from "../../../components/ui/molecules/InlineSelect";
import InlineInput from "../../../components/ui/molecules/inlineInput";

export default {
  HomeTemplate: "Templates/HomeTemplate",
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageTitle: { title: "Carteira de Investimentos" },
  form: {
    inlineForm: [
      <InlineSelect
        key={0}
        select={{
          options: [
            { title: "Renda 1", value: "RENDA_FIXA" },
            { title: "Renda 2", value: "RENDA_VARIAVEL" },
          ],
        }}
      />,
      <InlineInput
        key={1}
        input={{
          placeholder: "Valor",
          name: "value",
          currency: "R$",
        }}
      />,
      <InlineInput
        key={2}
        input={{
          value: new Date().toISOString().substring(0, 10),
          placeholder: "Data da Compra",
          name: "date",
          type: "date",
        }}
      />,
    ],
    basicButton: {
      children: "Adicionar",
      onClick: () => {},
    },
  },
  incomes: {
    list: [
      {
        title: "Renda Fixa",
        isLoading: false,
        incomeList: [
          {
            date: new Date().toISOString(),
            value: "100,00",
            currency: "R$",
          },
          {
            date: new Date().toISOString(),
            value: "200,00",
            currency: "R$",
          },
          {
            date: new Date().toISOString(),
            value: "300,00",
            currency: "R$",
          },
        ],
      },
      {
        title: "Renda Variável",
        isLoading: true,
        incomeList: [],
      },
    ],
  },
  chartSection: {
    isLoading: false,
    showChart: true,
    title: "Resumo da Carteira",
    chart: {
      data: {
        labels: [`Renda Fixa 20%`, `Renda Variável 80%`],
        datasets: [
          {
            data: [100, 400],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
    },
  },
};

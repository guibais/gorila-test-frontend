import React from "react";
import { incomeType } from "../../../shared/models/incomeType";
import InlineInput from "../../ui/molecules/inlineInput";
import InlineSelect from "../../ui/molecules/InlineSelect";
import { useHomeHook } from "./homeHook";
import HomeTemplate from "../../ui/templates/homeTemplate";

function Home() {
  const {
    validator,
    isLoading,
    investmentForm,
    fixedInvestments,
    variableInvestments,
    fixedTotal,
    variableTotal,
    fixedTotalPerc,
    variableTotalPerc,
    setInvestmentForm,
    submitIncome,
    deleteIncome,
  } = useHomeHook();

  return (
    <HomeTemplate
      pageTitle={{ title: "Carteira de Investimentos" }}
      form={{
        inlineForm: [
          <InlineSelect
            key={0}
            select={{
              onChange: (e) =>
                setInvestmentForm({
                  ...investmentForm,
                  type: incomeType[e.target.value as keyof typeof incomeType],
                }),
              options: [
                { title: "Renda Fixa", value: "RENDA_FIXA" },
                { title: "Renda Variável", value: "RENDA_VARIAVEL" },
              ],
            }}
          />,
          <InlineInput
            key={1}
            input={{
              placeholder: "Valor",
              name: "value",
              onValueChange: (value) => {
                console.log(parseFloat(value));
                setInvestmentForm({
                  ...investmentForm,
                  value: (parseFloat(value) * 100).toString(),
                });
              },
              currency: "R$",
            }}
            feedback={validator.message(
              "value",
              investmentForm.value,
              "required",
              {
                messages: {
                  required: "O Valor é necessário",
                },
              }
            )}
          />,
          <InlineInput
            key={2}
            input={{
              value: investmentForm.date.toISOString().substring(0, 10),
              placeholder: "Data da Compra",
              name: "date",
              type: "date",
              onChange: (e) =>
                setInvestmentForm({
                  ...investmentForm,
                  date: new Date(e.target.value),
                }),
            }}
            feedback={validator.message(
              "date",
              investmentForm.date,
              "required",
              {
                messages: {
                  required: "A Data é necessária",
                },
              }
            )}
          />,
        ],
        basicButton: {
          children: "Adicionar",
          onClick: () => {
            submitIncome();
          },
        },
      }}
      incomes={{
        list: [
          {
            title: "Renda Fixa",
            isLoading,
            incomeList: fixedInvestments.map((investment) => ({
              date: investment.date.toString(),
              value: investment.value,
              action: () => {
                deleteIncome(investment.id!);
              },
            })),
          },
          {
            title: "Renda Variável",
            isLoading,
            incomeList: variableInvestments.map((investment) => ({
              date: investment.date.toString(),
              value: investment.value,
              action: () => {
                deleteIncome(investment.id!);
              },
            })),
          },
        ],
      }}
      chartSection={{
        isLoading,
        showChart: fixedTotal != 0 || variableTotal != 0,
        title: "Resumo da Carteira",
        chart: {
          options: {
            plugins: {
              tooltip: {
                callbacks: {
                  label: function ({ formattedValue }) {
                    return "R$" + formattedValue;
                  },
                },
              },
            },
          },
          data: {
            labels: [
              `Renda Fixa ${fixedTotalPerc.toFixed(2)}%`,
              `Renda Variável ${variableTotalPerc.toFixed(2)}%`,
            ],
            datasets: [
              {
                data: [fixedTotal, variableTotal],
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
      }}
    />
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { InvestmentService } from "../../services/investment.service";
import { incomeType } from "../../shared/models/incomeType";
import { InvestmentViewModel } from "../../viewmodel/investment.viewmodel";
import InlineInput from "../ui/molecules/inlineInput";
import InlineSelect from "../ui/molecules/InlineSelect";
import PageTitle from "../ui/molecules/pageTitle";
import IncomePanel from "../ui/organisms/incomePanel";
import InlineForm from "../ui/organisms/inlineForm";
import { InvestmentsReturnedViewModel } from "../../viewmodel/investmentsReturned.viewmodel";
import useValidator from "../../shared/hooks/useValidator";
import styled from "styled-components";
import { SimpleChart } from "../ui/atoms/simpleChart";

const HomeStyle = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Incomes = styled.section`
  margin-top: 80px;
`;

const ChartSection = styled.section`
  margin: 80px 0;
`;

function Home() {
  const investmentService = new InvestmentService();

  const [validator, showValidationMessage] = useValidator();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [investmentForm, setInvestmentForm] = useState<InvestmentViewModel>({
    type: incomeType.RENDA_FIXA,
    value: "",
    date: new Date(),
  });
  const [fixedInvestments, setFixedInvestments] = useState<
    InvestmentViewModel[]
  >([]);
  const [variableInvestments, setVariableInvestments] = useState<
    InvestmentViewModel[]
  >([]);
  const [fixedTotal, setFixedTotal] = useState(0);
  const [variableTotal, setVariableTotal] = useState(0);
  const [fixedTotalPerc, setFixedTotalPerc] = useState(0);
  const [variableTotalPerc, setVariableTotalPerc] = useState(0);

  const loadIncomes = async () => {
    setIsLoading(true);
    const resp = await investmentService.getAll();
    const incomes = resp.data as InvestmentsReturnedViewModel;
    setFixedInvestments(incomes.fixedInvestments);
    setVariableInvestments(incomes.variableInvestments);
    setFixedTotal(incomes.totalFixed);
    setFixedTotalPerc(
      (100 / (incomes.totalFixed + incomes.totalVariable)) * incomes.totalFixed
    );
    setVariableTotal(incomes.totalVariable);
    setVariableTotalPerc(
      (100 / (incomes.totalFixed + incomes.totalVariable)) *
        incomes.totalVariable
    );
    setIsLoading(false);
  };

  const submitIncome = async () => {
    if (!validator.allValid()) {
      showValidationMessage(true);
      return;
    }
    try {
      await investmentService.create(investmentForm);
      toast("Investimento criado!");
      loadIncomes();
    } catch (e) {
      toast.error("Falha ao salvar o investimento");
    }
  };

  const deleteIncome = async (id: string) => {
    if (confirm("Você realmente deseja deletar esse item?")) {
      try {
        await investmentService.delete(id);
        loadIncomes();
      } catch (error) {
        toast.error("Falha ao deletar o investimento");
      }
    }
  };

  useEffect(() => {
    loadIncomes();
  }, []);

  return (
    <HomeStyle className="container">
      <PageTitle title="Carteira de Investimentos" />
      <InlineForm
        inlineForm={[
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
                setInvestmentForm({
                  ...investmentForm,
                  value: value,
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
        ]}
        basicButton={{
          children: "Adicionar",
          onClick: () => {
            submitIncome();
          },
        }}
      />
      <Incomes className="incomes">
        <IncomePanel
          list={[
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
          ]}
        />
      </Incomes>
      <ChartSection className="col-md-4 col-12">
        <div className="card">
          <div className="card-header">Resumo da Carteira</div>
          <div className="card-body">
            {isLoading ? (
              <div className="loader">
                <div className="icon" />
              </div>
            ) : fixedTotal != 0 && variableTotal != 0 ? (
              <SimpleChart
                data={{
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
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              ></SimpleChart>
            ) : (
              "Nenhum dado inserido"
            )}
          </div>
        </div>
      </ChartSection>
    </HomeStyle>
  );
}

export default Home;

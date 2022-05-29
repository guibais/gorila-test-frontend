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

function Home() {
  const investmentService = new InvestmentService();

  const [validator, showValidationMessage] = useValidator();

  // States
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

  const loadIncomes = async () => {
    const resp = await investmentService.getAll();
    const incomes = resp.data as InvestmentsReturnedViewModel;
    setFixedInvestments(incomes.fixedInvestments);
    setVariableInvestments(incomes.variableInvestments);
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
    <div className="container">
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
              onChange: (e) =>
                setInvestmentForm({
                  ...investmentForm,
                  value: e.target.value,
                }),
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
          children: "Criar",
          onClick: () => {
            submitIncome();
          },
        }}
      />
      <section className="incomes">
        <IncomePanel
          list={[
            {
              title: "Renda Fixa",
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
      </section>
    </div>
  );
}

export default Home;

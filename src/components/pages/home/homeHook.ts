import { useEffect, useState } from "react";
import { InvestmentService } from "../../../services/investment.service";
import useValidator from "../../../shared/hooks/useValidator";
import { incomeType } from "../../../shared/models/incomeType";
import { InvestmentViewModel } from "../../../viewmodel/investment.viewmodel";
import { InvestmentsReturnedViewModel } from "../../../viewmodel/investmentsReturned.viewmodel";
import { toast } from "react-toastify";

export const useHomeHook = () => {
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
    setFixedInvestments(
      incomes.fixedInvestments.map((x) => ({
        ...x,
        value: (parseInt(x.value) / 100).toString(),
      }))
    );
    setVariableInvestments(
      incomes.variableInvestments.map((x) => ({
        ...x,
        value: (parseInt(x.value) / 100).toString(),
      }))
    );
    setFixedTotal(incomes.totalFixed / 100);
    setFixedTotalPerc(
      (100 / (incomes.totalFixed + incomes.totalVariable)) * incomes.totalFixed
    );
    setVariableTotal(incomes.totalVariable / 100);
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

  return {
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
  };
};

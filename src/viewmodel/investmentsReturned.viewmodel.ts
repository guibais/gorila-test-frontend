import { InvestmentViewModel } from "./investment.viewmodel";

export class InvestmentsReturnedViewModel {
  fixedInvestments!: InvestmentViewModel[];

  variableInvestments!: InvestmentViewModel[];

  totalVariable!: number;

  totalFixed!: number;
}

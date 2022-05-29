import { incomeType } from "../shared/models/incomeType";

export class InvestmentViewModel {
  id?: string;

  type!: incomeType;

  value!: string;

  date!: Date;
}

import { ApiImplementation } from "../shared/apiImplementation";
import { InvestmentViewModel } from "../viewmodel/investment.viewmodel";
import { ResponseViewModel } from "../viewmodel/response.viewmodel";
import { IService } from "./interface.service";

export class InvestmentService implements IService {
  path = "/investments";

  async getAll(): Promise<ResponseViewModel> {
    const resp = await ApiImplementation.get(`${this.path}`);
    return resp.data;
  }

  async create(investment: InvestmentViewModel): Promise<ResponseViewModel> {
    const resp = await ApiImplementation.post(`${this.path}`, investment);
    return resp.data;
  }

  async delete(investmentId: string): Promise<ResponseViewModel> {
    const resp = await ApiImplementation.del(`${this.path}/${investmentId}`);
    return resp.data;
  }
}

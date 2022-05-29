import { ResponseViewModel } from "../viewmodel/response.viewmodel";

export interface IService {
  getAll?(): Promise<ResponseViewModel>;
  create?(item: any): Promise<ResponseViewModel>;
  delete?(itemId: string): Promise<ResponseViewModel>;
}

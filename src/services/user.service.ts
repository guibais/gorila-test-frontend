import { ApiImplementation } from "../shared/apiImplementation";
import { LoginViewModel } from "../viewmodel/login.viewmodel";
import { RegisterViewModel } from "../viewmodel/register.viewmodel";
import { ResponseViewModel } from "../viewmodel/response.viewmodel";

export class UserService {
  path = "/users";

  async login(login: LoginViewModel): Promise<ResponseViewModel> {
    const resp = await ApiImplementation.post(`${this.path}/login`, login);
    return resp.data;
  }

  async register(register: RegisterViewModel): Promise<ResponseViewModel> {
    const resp = await ApiImplementation.post(`${this.path}`, register);
    return resp.data;
  }
}

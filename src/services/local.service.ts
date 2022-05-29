import { LocalPersistence } from "../shared/localPersistence";
import { LocalUserViewModel } from "../viewmodel/localUser.viewmodel";

export class LocalService {
  path = "/users";

  login(localUserViewModel: LocalUserViewModel): void {
    LocalPersistence.addItem("user", localUserViewModel.user);
    LocalPersistence.addItem("token", localUserViewModel.token);
  }

  logout(): void {
    LocalPersistence.removeItem("user");
    LocalPersistence.removeItem("token");
  }

  isAuthenticated() {
    return LocalPersistence.getItem("token") != null;
  }
}

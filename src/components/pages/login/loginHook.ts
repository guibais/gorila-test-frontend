import { useState } from "react";
import { LocalService } from "../../../services/local.service";
import { UserService } from "../../../services/user.service";
import useValidator from "../../../shared/hooks/useValidator";
import { LoginViewModel } from "../../../viewmodel/login.viewmodel";
import { toast } from "react-toastify";

export const useLoginHook = () => {
  const userService = new UserService();
  const localService = new LocalService();

  const [validator, showValidationMessage] = useValidator();

  // States
  const [login, setLoginValue] = useState<LoginViewModel>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    if (!validator.allValid()) {
      showValidationMessage(true);
      return;
    }
    try {
      setIsLoading(true);
      const resp = await userService.login(login);
      localService.login({
        token: resp.data.access_token,
        user: resp.data.user,
      });
      setIsLoading(false);

      window.location.href = "/";
    } catch (error) {
      setIsLoading(false);
      toast.error("Falha ao fazer o login");
    }
  };

  return {
    validator,
    login,
    isLoading,
    submit,
    setLoginValue,
  };
};

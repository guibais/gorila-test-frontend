import { useState } from "react";
import { LocalService } from "../../../services/local.service";
import { UserService } from "../../../services/user.service";
import useValidator from "../../../shared/hooks/useValidator";
import { RegisterViewModel } from "../../../viewmodel/register.viewmodel";
import { toast } from "react-toastify";

export const useRegisterHook = () => {
  // States
  const [register, setRegisterValue] = useState<RegisterViewModel>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validator, showValidationMessage] = useValidator();

  const submit = async () => {
    const userService = new UserService();
    const localService = new LocalService();
    if (!validator.allValid()) {
      showValidationMessage(true);
      return;
    }
    try {
      setIsLoading(true);
      const resp = await userService.register(register);
      localService.login({
        token: resp.data.access_token,
        user: resp.data.user,
      });
      setIsLoading(false);
      window.location.href = "/";
    } catch (error) {
      setIsLoading(false);
      toast.error("Falha ao se registrar");
    }
  };
  return {
    register,
    isLoading,
    validator,
    submit,
    setRegisterValue,
  };
};

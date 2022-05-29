import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DefaultForm from "../ui/organisms/defaultForm";
import GorilaLogo from "../../assets/images/LogoGorila.svg";
import { UserService } from "../../services/user.service";
import { ButtonType } from "../ui/atoms/BasicButton";
import { LocalService } from "../../services/local.service";
import useValidator from "../../shared/hooks/useValidator";
import { LoginViewModel } from "../../viewmodel/login.viewmodel";

function Login() {
  const userService = new UserService();
  const localService = new LocalService();

  const navigate = useNavigate();
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

  return (
    <div className="container">
      <div className="row justify-content-md-center my-auto h-100 align-middle">
        <div className="col-4">
          <DefaultForm
            title={{
              children: "Login",
              image: GorilaLogo,
              alt: "Gorila Logo",
            }}
            defaultForm={[
              {
                label: { children: "Email", for: "email" },
                input: {
                  type: "text",
                  placeholder: "Digite seu Email",
                  name: "email",
                  onChange: (e) =>
                    setLoginValue({ ...login, email: e.target.value }),
                },
                feedback: validator.message(
                  "email",
                  login.email,
                  "required|email",
                  {
                    messages: {
                      required: "O Email é necessário",
                      email: "Email Inválido",
                    },
                  }
                ),
              },
              {
                label: { children: "Senha", for: "password" },
                input: {
                  type: "password",
                  placeholder: "Digite sua Senha",
                  name: "password",
                  onChange: (e) =>
                    setLoginValue({ ...login, password: e.target.value }),
                },
                feedback: validator.message(
                  "password",
                  login.password,
                  "required",
                  {
                    messages: {
                      required: "A Senha é necessária",
                    },
                  }
                ),
              },
            ]}
            infoButton={{
              children: "Não tem conta? Registre-se",
              onClick: () => navigate("/register"),
            }}
            basicButton={{
              children: "Login",
              isLoading,
              type: ButtonType.SUBMIT,
              onClick: () => {
                submit();
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DefaultForm from "../ui/organisms/defaultForm";
import GorilaLogo from "../../assets/images/icon_gorila.png";
import { UserService } from "../../services/user.service";
import { ButtonType } from "../ui/atoms/BasicButton";
import { LocalService } from "../../services/local.service";
import useValidator from "../../shared/hooks/useValidator";

function Login() {
  const userService = new UserService();
  const localService = new LocalService();

  const navigate = useNavigate();
  const [validator, showValidationMessage] = useValidator();

  // States
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    if (!validator.allValid()) {
      showValidationMessage(true);
      return;
    }
    try {
      setIsLoading(true);
      const resp = await userService.register({ name, email, password });
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

  return (
    <div className="container">
      <div className="row justify-content-md-center my-auto h-100 align-middle">
        <div className="col-4">
          <DefaultForm
            title={{
              children: "Registrar",
              image: GorilaLogo,
              alt: "Gorila Logo",
            }}
            defaultForm={[
              {
                label: { children: "Nome", for: "name" },
                input: {
                  type: "text",
                  placeholder: "Digite seu Nome",
                  name: "name",
                  onChange: (e) => setNameValue(e.target.value),
                },
                feedback: validator.message(
                  "name",
                  name,
                  "required|min:3|max:50",
                  {
                    messages: {
                      required: "A Senha é necessária",
                      min: "O Nome deve ter no mínimo 3 caracteres",
                      max: "O Nome deve ter no máximo 50 caracteres",
                    },
                  }
                ),
              },
              {
                label: { children: "Email", for: "email" },
                input: {
                  type: "text",
                  placeholder: "Digite seu Email",
                  name: "email",
                  onChange: (e) => setEmailValue(e.target.value),
                },
                feedback: validator.message("email", email, "required|email", {
                  messages: {
                    required: "O Email é necessário",
                    email: "Email Inválido",
                  },
                }),
              },
              {
                label: { children: "Senha", for: "password" },
                input: {
                  type: "password",
                  placeholder: "Digite sua Senha",
                  name: "password",
                  onChange: (e) => setPasswordValue(e.target.value),
                },
                feedback: validator.message(
                  "password",
                  password,
                  "required|min:8|max:30",
                  {
                    messages: {
                      required: "A Senha é necessária",
                      min: "A Senha deve ter no mínimo 8 caracteres",
                      max: "A Senha deve ter no máximo 30 caracteres",
                    },
                  }
                ),
              },
            ]}
            infoButton={{
              children: "Já tem conta? Faça Login",
              onClick: () => navigate("/login"),
            }}
            basicButton={{
              children: "Registrar",
              isLoading,
              type: ButtonType.SUBMIT,
              onClick: (e) => {
                e.preventDefault();
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

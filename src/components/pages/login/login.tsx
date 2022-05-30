import React from "react";
import { useNavigate } from "react-router-dom";
import GorilaLogo from "../../../assets/images/LogoGorila.svg";
import { ButtonType } from "../../ui/atoms/BasicButton";
import { useLoginHook } from "./loginHook";
import AuthTemplate from "../../ui/templates/authTemplate";

const Login = () => {
  const navigate = useNavigate();

  const { isLoading, login, validator, setLoginValue, submit } = useLoginHook();

  return (
    <AuthTemplate
      form={{
        title: {
          children: "Login",
          image: GorilaLogo,
          alt: "Gorila Logo",
        },
        defaultForm: [
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
        ],
        infoButton: {
          children: "Não tem conta? Registre-se",
          onClick: () => navigate("/register"),
        },
        basicButton: {
          children: "Login",
          isLoading,
          type: ButtonType.SUBMIT,
          onClick: () => {
            submit();
          },
        },
      }}
    />
  );
};

export default Login;

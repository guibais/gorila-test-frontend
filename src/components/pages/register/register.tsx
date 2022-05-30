import React from "react";
import { useNavigate } from "react-router-dom";
import GorilaLogo from "../../../assets/images/LogoGorila.svg";
import { ButtonType } from "../../ui/atoms/BasicButton";
import { useRegisterHook } from "./registerHook";
import AuthTemplate from "../../ui/templates/authTemplate";

const Register = () => {
  const navigate = useNavigate();

  const { isLoading, register, validator, setRegisterValue, submit } =
    useRegisterHook();

  return (
    <AuthTemplate
      form={{
        title: {
          children: "Registrar",
          image: GorilaLogo,
          alt: "Gorila Logo",
        },
        defaultForm: [
          {
            label: { children: "Nome", for: "name" },
            input: {
              type: "text",
              placeholder: "Digite seu Nome",
              name: "name",
              onChange: (e) =>
                setRegisterValue({ ...register, name: e.target.value }),
            },
            feedback: validator.message(
              "name",
              register.name,
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
              onChange: (e) =>
                setRegisterValue({ ...register, email: e.target.value }),
            },
            feedback: validator.message(
              "email",
              register.email,
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
                setRegisterValue({ ...register, password: e.target.value }),
            },
            feedback: validator.message(
              "password",
              register.password,
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
        ],
        infoButton: {
          children: "Já tem conta? Faça Login",
          onClick: () => navigate("/login"),
        },
        basicButton: {
          children: "Registrar",
          isLoading,
          type: ButtonType.SUBMIT,
          onClick: (e) => {
            e.preventDefault();
            submit();
          },
        },
      }}
    />
  );
};

export default Register;

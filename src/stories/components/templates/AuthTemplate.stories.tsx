import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import AuthTemplate from "../../../components/ui/templates/authTemplate";
import PlaceHolder from "../../assets/images/placeholder.png";
import { ButtonType } from "../../../components/ui/atoms/BasicButton";

export default {
  AuthTemplate: "Templates/AuthTemplate",
  component: AuthTemplate,
} as ComponentMeta<typeof AuthTemplate>;

const Template: ComponentStory<typeof AuthTemplate> = (args) => (
  <AuthTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  form: {
    title: {
      children: "Registrar",
      image: PlaceHolder,
      alt: "Gorila Logo",
    },
    defaultForm: [
      {
        label: { children: "Nome", for: "name" },
        input: {
          type: "text",
          placeholder: "Digite seu Nome",
          name: "name",
        },
      },
      {
        label: { children: "Email", for: "email" },
        input: {
          type: "text",
          placeholder: "Digite seu Email",
          name: "email",
        },
      },
      {
        label: { children: "Senha", for: "password" },
        input: {
          type: "password",
          placeholder: "Digite sua Senha",
          name: "password",
        },
      },
    ],
    infoButton: {
      children: "Já tem conta? Faça Login",
      onClick: () => {},
    },
    basicButton: {
      children: "Registrar",
      isLoading: false,
      type: ButtonType.SUBMIT,
      onClick: () => {},
    },
  },
};

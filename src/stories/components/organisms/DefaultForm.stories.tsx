import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import DefaultForm from "../../../components/ui/organisms/defaultForm";
import PlaceHolder from "../../assets/images/placeholder.png";

export default {
  DefaultForm: "Organisms/DefaultForm",
  component: DefaultForm,
} as ComponentMeta<typeof DefaultForm>;

const Template: ComponentStory<typeof DefaultForm> = (args) => (
  <DefaultForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: {
    children: "Login",
    image: PlaceHolder,
    alt: "Gorila Logo",
  },
  defaultForm: [
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
    children: "Não tem conta? Registre-se",
  },
  basicButton: {
    children: "Login",
    isLoading: false,
  },
};

export const Error = Template.bind({});
Error.args = {
  title: {
    children: "Login",
    image: "",
    alt: "Gorila Logo",
  },
  defaultForm: [
    {
      label: { children: "Email", for: "email" },
      input: {
        type: "text",
        placeholder: "Digite seu Email",
        name: "email",
      },
      feedback: "Email Inválido",
    },
    {
      label: { children: "Senha", for: "password" },
      input: {
        type: "password",
        placeholder: "Digite sua Senha",
        name: "password",
      },
      feedback: "A Senha é necessária",
    },
  ],
  infoButton: {
    children: "Não tem conta? Registre-se",
  },
  basicButton: {
    children: "Login",
    isLoading: false,
  },
};

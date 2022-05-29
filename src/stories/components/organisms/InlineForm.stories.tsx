import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import InlineForm from "../../../components/ui/organisms/inlineForm";
import InlineSelect from "../../../components/ui/molecules/InlineSelect";
import InlineInput from "../../../components/ui/molecules/inlineInput";

export default {
  InlineForm: "Organisms/InlineForm",
  component: InlineForm,
} as ComponentMeta<typeof InlineForm>;

const Template: ComponentStory<typeof InlineForm> = (args) => (
  <InlineForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inlineForm: [
    <InlineSelect
      key={0}
      select={{
        options: [
          { title: "Renda Fixa", value: "RENDA_FIXA" },
          { title: "Renda Variável", value: "RENDA_VARIAVEL" },
        ],
      }}
    />,
    <InlineInput
      key={1}
      input={{
        placeholder: "Valor",
        name: "value",
        currency: "R$",
      }}
    />,
    <InlineInput
      key={2}
      input={{
        placeholder: "Data da Compra",
        name: "date",
        type: "date",
      }}
    />,
  ],
  basicButton: {
    children: "Adicionar",
  },
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import InlineInput from "../../../components/ui/molecules/inlineInput";

export default {
  InlineInput: "Molecules/InlineInput",
  component: InlineInput,
} as ComponentMeta<typeof InlineInput>;

const Template: ComponentStory<typeof InlineInput> = (args) => (
  <InlineInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  input: { placeholder: "Digite...", name: "input" },
};
export const Error = Template.bind({});
Error.args = {
  input: { placeholder: "Digite...", name: "input" },
  feedback: "O Valor é necessário",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import InputFormGroup from "../../../components/ui/molecules/inputFormGroup";

export default {
  InputFormGroup: "Molecules/InputFormGroup",
  component: InputFormGroup,
} as ComponentMeta<typeof InputFormGroup>;

const Template: ComponentStory<typeof InputFormGroup> = (args) => (
  <InputFormGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: { children: "titulo", for: "title" },
  input: { name: "titulo" },
};
export const Error = Template.bind({});
Error.args = {
  label: { children: "titulo", for: "title" },
  input: { name: "titulo" },
  feedback: "O Titulo é necessário",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import Title from "../../../components/ui/atoms/title";

export default {
  title: "Atoms/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https..",
  alt: "",
  children: "texto",
};

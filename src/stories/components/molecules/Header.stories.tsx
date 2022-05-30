import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import { Header } from "../../../components/ui/molecules/header";
import PlaceHolder from "../../assets/images/placeholder.png";

export default {
  Header: "Molecules/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: PlaceHolder,
  alt: "Placeholder",
  actionButton: {
    children: "Sair",
  },
};

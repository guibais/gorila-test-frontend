import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import PageTitle from "../../../components/ui/molecules/pageTitle";

export default {
  PageTitle: "Molecules/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Título",
};

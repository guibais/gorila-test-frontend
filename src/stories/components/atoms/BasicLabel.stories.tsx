import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicLabel from "../../../components/ui/atoms/BasicLabel";
import "../../../App.scss";

export default {
  title: "Atoms/BasicLabel",
  component: BasicLabel,
} as ComponentMeta<typeof BasicLabel>;

const Template: ComponentStory<typeof BasicLabel> = (args) => (
  <BasicLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "title",
};

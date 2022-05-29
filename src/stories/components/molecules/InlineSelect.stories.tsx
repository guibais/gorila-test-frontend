import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../App.scss";
import InlineSelect from "../../../components/ui/molecules/InlineSelect";

export default {
  InlineSelect: "Molecules/InlineSelect",
  component: InlineSelect,
} as ComponentMeta<typeof InlineSelect>;

const Template: ComponentStory<typeof InlineSelect> = (args) => (
  <InlineSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  select: {
    options: [
      { title: "Opção 1", value: "1" },
      { title: "Opção 1", value: "2" },
      { title: "Opção 1", value: "3" },
    ],
  },
};

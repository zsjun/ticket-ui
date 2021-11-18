import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./index";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;
const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>{args.children}</Table>
);
export const DefatulTable = Template.bind({});
// 传入属性
DefatulTable.args = {
};

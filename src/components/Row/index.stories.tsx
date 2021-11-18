import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Row from "./index";

export default {
  title: "Row",
  component: Row,
} as ComponentMeta<typeof Row>;
const Template: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>{args.children}</Row>
);
export const DefatulRow = Template.bind({});
// 传入属性
DefatulRow.args = {
};

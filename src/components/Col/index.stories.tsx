import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Col from "./index";

export default {
  title: "Col",
  component: Col,
} as ComponentMeta<typeof Col>;
const Template: ComponentStory<typeof Col> = (args) => (
  <Col {...args}>{args.children}</Col>
);
export const DefatulCol = Template.bind({});
// 传入属性
DefatulCol.args = {
};

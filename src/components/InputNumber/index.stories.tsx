import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputNumber from "./index";

export default {
  title: "InputNumber",
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;
const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args}>{args.children}</InputNumber>
);
export const DefatulInputNumber = Template.bind({});
// 传入属性
DefatulInputNumber.args = {
};

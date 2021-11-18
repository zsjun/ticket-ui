import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>{args.children}</Input>
);
export const DefatulInput = Template.bind({});
// 传入属性
DefatulInput.args = {
};

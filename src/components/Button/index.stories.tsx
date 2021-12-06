import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "确定",
  type: "primary",
};
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "重置",
  type: "default",
};
export const TextButton = Template.bind({});
TextButton.args = {
  children: "新建任务",
  type: "text",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popconfirm from "./index";

export default {
  title: "Popconfirm",
  component: Popconfirm,
} as ComponentMeta<typeof Popconfirm>;
const Template: ComponentStory<typeof Popconfirm> = (args) => (
  <Popconfirm {...args}>{args.children}</Popconfirm>
);
export const DefatulPopconfirm = Template.bind({});
// 传入属性
DefatulPopconfirm.args = {
};

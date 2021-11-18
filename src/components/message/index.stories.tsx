import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import message from "./index";

export default {
  title: "message",
  component: message,
} as ComponentMeta<typeof message>;
const Template: ComponentStory<typeof message> = (args) => (
  <message {...args}>{args.children}</message>
);
export const Defatulmessage = Template.bind({});
// 传入属性
Defatulmessage.args = {
};

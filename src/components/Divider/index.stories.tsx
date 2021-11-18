import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./index";

export default {
  title: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;
const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args}>{args.children}</Divider>
);
export const DefatulDivider = Template.bind({});
// 传入属性
DefatulDivider.args = {
};

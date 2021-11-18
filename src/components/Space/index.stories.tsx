import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Space from "./index";

export default {
  title: "Space",
  component: Space,
} as ComponentMeta<typeof Space>;
const Template: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>{args.children}</Space>
);
export const DefatulSpace = Template.bind({});
// 传入属性
DefatulSpace.args = {
};

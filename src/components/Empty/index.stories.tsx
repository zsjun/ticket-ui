import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Empty from "./index";

export default {
  title: "Empty",
  component: Empty,
} as ComponentMeta<typeof Empty>;
const Template: ComponentStory<typeof Empty> = (args) => (
  <Empty {...args}>{args.children}</Empty>
);
export const DefatulEmpty = Template.bind({});
// 传入属性
DefatulEmpty.args = {
};

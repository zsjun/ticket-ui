import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./index";

export default {
  title: "Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;
const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>{args.children}</Menu>
);
export const DefatulMenu = Template.bind({});
// 传入属性
DefatulMenu.args = {
};

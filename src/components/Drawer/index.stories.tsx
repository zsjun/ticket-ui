import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Drawer from "./index";

export default {
  title: "Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;
const Template: ComponentStory<typeof Drawer> = (args) => (
  <Drawer {...args}>{args.children}</Drawer>
);
export const DefatulDrawer = Template.bind({});
// 传入属性
DefatulDrawer.args = {
};

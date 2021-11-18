import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./index";

export default {
  title: "Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;
const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args}>{args.children}</Switch>
);
export const DefatulSwitch = Template.bind({});
// 传入属性
DefatulSwitch.args = {
};

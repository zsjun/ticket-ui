import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./index";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>{args.children}</Dropdown>
);
export const DefatulDropdown = Template.bind({});
// 传入属性
DefatulDropdown.args = {
};

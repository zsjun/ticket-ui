import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./index";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;
const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>{args.children}</Select>
);
export const DefatulSelect = Template.bind({});
// 传入属性
DefatulSelect.args = {
};

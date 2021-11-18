import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./index";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>{args.children}</Checkbox>
);
export const DefatulCheckbox = Template.bind({});
// 传入属性
DefatulCheckbox.args = {
};

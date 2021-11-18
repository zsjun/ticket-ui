import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./index";

export default {
  title: "Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;
const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}>{args.children}</Radio>
);
export const DefatulRadio = Template.bind({});
// 传入属性
DefatulRadio.args = {
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePicker from "./index";

export default {
  title: "DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;
const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args}>{args.children}</DatePicker>
);
export const DefatulDatePicker = Template.bind({});
// 传入属性
DefatulDatePicker.args = {
};

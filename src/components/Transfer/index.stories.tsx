import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Transfer from "./index";

export default {
  title: "Transfer",
  component: Transfer,
} as ComponentMeta<typeof Transfer>;
const Template: ComponentStory<typeof Transfer> = (args) => (
  <Transfer {...args}>{args.children}</Transfer>
);
export const DefatulTransfer = Template.bind({});
// 传入属性
DefatulTransfer.args = {
};

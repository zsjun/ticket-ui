import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Progress from "./index";

export default {
  title: "Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;
const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args}>{args.children}</Progress>
);
export const DefatulProgress = Template.bind({});
// 传入属性
DefatulProgress.args = {
};

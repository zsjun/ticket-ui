import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./index";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;
const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
);
export const DefatulBadge = Template.bind({});
// 传入属性
DefatulBadge.args = {
};

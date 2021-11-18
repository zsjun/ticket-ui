import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./index";

export default {
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;
const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args}>{args.children}</Tag>
);
export const DefatulTag = Template.bind({});
// 传入属性
DefatulTag.args = {
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "./index";

export default {
  title: "PageHeader",
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;
const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args}>{args.children}</PageHeader>
);
export const DefatulPageHeader = Template.bind({});
// 传入属性
DefatulPageHeader.args = {
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./index";

export default {
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;
const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>{args.children}</Tabs>
);
export const DefatulTabs = Template.bind({});
// 传入属性
DefatulTabs.args = {
};

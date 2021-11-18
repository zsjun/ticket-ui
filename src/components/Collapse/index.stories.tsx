import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Collapse from "./index";

export default {
  title: "Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;
const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>{args.children}</Collapse>
);
export const DefatulCollapse = Template.bind({});
// 传入属性
DefatulCollapse.args = {
};

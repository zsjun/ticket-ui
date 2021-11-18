import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popover from "./index";

export default {
  title: "Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;
const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>{args.children}</Popover>
);
export const DefatulPopover = Template.bind({});
// 传入属性
DefatulPopover.args = {
};

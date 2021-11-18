import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./index";

export default {
  title: "Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>{args.children}</Tooltip>
);
export const DefatulTooltip = Template.bind({});
// 传入属性
DefatulTooltip.args = {
};

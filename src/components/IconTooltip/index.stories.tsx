import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconTooltip from "./index";

export default {
  title: "IconTooltip",
  component: IconTooltip,
} as ComponentMeta<typeof IconTooltip>;
const Template: ComponentStory<typeof IconTooltip> = (args) => (
  <IconTooltip {...args}>{args.children}</IconTooltip>
);
export const DefatulIconTooltip = Template.bind({});
// 传入属性
DefatulIconTooltip.args = {
};

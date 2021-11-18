import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spin from "./index";

export default {
  title: "Spin",
  component: Spin,
} as ComponentMeta<typeof Spin>;
const Template: ComponentStory<typeof Spin> = (args) => (
  <Spin {...args}>{args.children}</Spin>
);
export const DefatulSpin = Template.bind({});
// 传入属性
DefatulSpin.args = {
};

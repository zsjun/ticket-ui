import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "确定",
};

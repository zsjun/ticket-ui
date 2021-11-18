import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AutoComplete from "./index";

export default {
  title: "AutoComplete",
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;
const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args}>{args.children}</AutoComplete>
);
export const DefatulAutoComplete = Template.bind({});
// 传入属性
DefatulAutoComplete.args = {
};

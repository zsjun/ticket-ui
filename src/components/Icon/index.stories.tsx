import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./index";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;
const Template: ComponentStory<typeof Icon> = (args) => <Icon>确定</Icon>;
export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

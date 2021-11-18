import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WhiteTopBar from "./index";

export default {
  title: "WhiteTopBar",
  component: WhiteTopBar,
} as ComponentMeta<typeof WhiteTopBar>;
const Template: ComponentStory<typeof WhiteTopBar> = (args) => (
  <WhiteTopBar {...args}>{args.children}</WhiteTopBar>
);
export const DefaultWhiteTopBar = Template.bind({});
DefaultWhiteTopBar.args = {
  isBack: true,
  onBackClick: () => {
    console.log(11);
  },
  children: 11223,
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WhiteTopBar from "./index";

export default {
  title: "WhiteTopBar",
  component: WhiteTopBar,
} as ComponentMeta<typeof WhiteTopBar>;
const Template: ComponentStory<typeof WhiteTopBar> = (args) => (
  <WhiteTopBar
    {...args}
    title={1122}
    // isBack
    // onBackClick={() => {
    //   console.log(2233);
    // }}
  >
    确定111
  </WhiteTopBar>
);
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

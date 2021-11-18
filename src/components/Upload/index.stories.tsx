import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Upload from "./index";

export default {
  title: "Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;
const Template: ComponentStory<typeof Upload> = (args) => (
  <Upload {...args}>{args.children}</Upload>
);
export const DefatulUpload = Template.bind({});
// 传入属性
DefatulUpload.args = {
};

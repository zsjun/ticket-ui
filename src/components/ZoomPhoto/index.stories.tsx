import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ZoomPhoto from "./index";

export default {
  title: "ZoomPhoto",
  component: ZoomPhoto,
} as ComponentMeta<typeof ZoomPhoto>;
const Template: ComponentStory<typeof ZoomPhoto> = (args) => (
  <ZoomPhoto {...args}>{args.children}</ZoomPhoto>
);
export const DefatulZoomPhoto = Template.bind({});
// 传入属性
DefatulZoomPhoto.args = {
  size: 200,
  imgurl: "./box-no-data.png",
};

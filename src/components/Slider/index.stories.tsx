import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Slider from "./index";

export default {
  title: "Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;
const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>{args.children}</Slider>
);
export const DefatulSlider = Template.bind({});
// 传入属性
DefatulSlider.args = {
};

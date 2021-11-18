import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfigProvider from "./index";

export default {
  title: "ConfigProvider",
  component: ConfigProvider,
} as ComponentMeta<typeof ConfigProvider>;
const Template: ComponentStory<typeof ConfigProvider> = (args) => (
  <ConfigProvider {...args}>{args.children}</ConfigProvider>
);
export const DefatulConfigProvider = Template.bind({});
// 传入属性
DefatulConfigProvider.args = {
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagination from "./index";

export default {
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args}>{args.children}</Pagination>
);
export const DefatulPagination = Template.bind({});
// 传入属性
DefatulPagination.args = {
};

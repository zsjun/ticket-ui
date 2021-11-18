import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./index";

export default {
  title: "Form",
  component: Form,
} as ComponentMeta<typeof Form>;
const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>{args.children}</Form>
);
export const DefatulForm = Template.bind({});
// 传入属性
DefatulForm.args = {
};

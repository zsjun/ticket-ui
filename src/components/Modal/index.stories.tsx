import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./index";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>{args.children}</Modal>
);
export const DefatulModal = Template.bind({});
// 传入属性
DefatulModal.args = {
};

import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./index";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;
const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>{args.children}</Box>
);
export const LoadingBox = Template.bind({});

LoadingBox.args = {
  isLoading: true,
  style: {
    width: "100px",
    height: "100px",
    border: "1px solid #000",
  },
};

export const NoDataBox = Template.bind({});

NoDataBox.args = {
  isLoading: false,
  style: {
    width: "200px",
    height: "200px",
    border: "1px solid #000",
  },
};
export const hasDataBox = Template.bind({});

hasDataBox.args = {
  isLoading: false,
  data: [12, 23],
  children: <div>111</div>,
  style: {
    width: "200px",
    height: "200px",
    border: "1px solid #000",
  },
};

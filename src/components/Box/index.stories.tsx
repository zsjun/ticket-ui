import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./index";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;
const Template: ComponentStory<typeof Box> = (args) => (
  <Box isLoading={false} data={[112]}>
    确定
  </Box>
);
export const LoggedIn = Template.bind({});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Drawer,{ defaultDrawerProps } from "./index";

describe("test Drawer component", () => {
  it("should render the correct default Drawer", () => {
    const wrapper = render(<Drawer {...defaultDrawerProps}>Nice</Drawer>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

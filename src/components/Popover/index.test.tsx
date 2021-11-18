import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Popover,{ defaultPopoverProps } from "./index";

describe("test Popover component", () => {
  it("should render the correct default Popover", () => {
    const wrapper = render(<Popover {...defaultPopoverProps}>Nice</Popover>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

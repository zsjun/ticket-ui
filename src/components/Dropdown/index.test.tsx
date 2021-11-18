import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown,{ defaultDropdownProps } from "./index";

describe("test Dropdown component", () => {
  it("should render the correct default Dropdown", () => {
    const wrapper = render(<Dropdown {...defaultDropdownProps}>Nice</Dropdown>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

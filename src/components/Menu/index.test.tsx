import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu,{ defaultMenuProps } from "./index";

describe("test Menu component", () => {
  it("should render the correct default Menu", () => {
    const wrapper = render(<Menu {...defaultMenuProps}>Nice</Menu>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

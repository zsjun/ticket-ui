import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button,{ defaultButtonProps } from "./index";

describe("test Button component", () => {
  it("should render the correct default Button", () => {
    const wrapper = render(<Button {...defaultButtonProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

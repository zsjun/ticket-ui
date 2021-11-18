import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox,{ defaultCheckboxProps } from "./index";

describe("test Checkbox component", () => {
  it("should render the correct default Checkbox", () => {
    const wrapper = render(<Checkbox {...defaultCheckboxProps}>Nice</Checkbox>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

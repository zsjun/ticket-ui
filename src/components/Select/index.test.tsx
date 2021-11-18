import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select,{ defaultSelectProps } from "./index";

describe("test Select component", () => {
  it("should render the correct default Select", () => {
    const wrapper = render(<Select {...defaultSelectProps}>Nice</Select>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

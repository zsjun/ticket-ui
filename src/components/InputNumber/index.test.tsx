import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber,{ defaultInputNumberProps } from "./index";

describe("test InputNumber component", () => {
  it("should render the correct default InputNumber", () => {
    const wrapper = render(<InputNumber {...defaultInputNumberProps}>Nice</InputNumber>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

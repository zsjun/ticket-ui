import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DatePicker,{ defaultDatePickerProps } from "./index";

describe("test DatePicker component", () => {
  it("should render the correct default DatePicker", () => {
    const wrapper = render(<DatePicker {...defaultDatePickerProps}>Nice</DatePicker>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

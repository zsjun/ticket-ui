import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Radio,{ defaultRadioProps } from "./index";

describe("test Radio component", () => {
  it("should render the correct default Radio", () => {
    const wrapper = render(<Radio {...defaultRadioProps}>Nice</Radio>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

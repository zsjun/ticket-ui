import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input,{ defaultInputProps } from "./index";

describe("test Input component", () => {
  it("should render the correct default Input", () => {
    const wrapper = render(<Input {...defaultInputProps}>Nice</Input>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form,{ defaultFormProps } from "./index";

describe("test Form component", () => {
  it("should render the correct default Form", () => {
    const wrapper = render(<Form {...defaultFormProps}>Nice</Form>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

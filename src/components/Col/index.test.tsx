import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Col,{ defaultColProps } from "./index";

describe("test Col component", () => {
  it("should render the correct default Col", () => {
    const wrapper = render(<Col {...defaultColProps}>Nice</Col>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

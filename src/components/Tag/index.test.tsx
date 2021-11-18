import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tag,{ defaultTagProps } from "./index";

describe("test Tag component", () => {
  it("should render the correct default Tag", () => {
    const wrapper = render(<Tag {...defaultTagProps}>Nice</Tag>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

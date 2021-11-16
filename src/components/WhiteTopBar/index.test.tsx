import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WhiteTopBar, { baseDefaultProps } from "./index";

describe("test WhiteTopBar component", () => {
  it("should render the correct default WhiteTopBar", () => {
    const wrapper = render(
      <WhiteTopBar {...baseDefaultProps}>Nice</WhiteTopBar>
    );
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
    fireEvent.click(element);
  });
});

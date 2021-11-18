import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Space,{ defaultSpaceProps } from "./index";

describe("test Space component", () => {
  it("should render the correct default Space", () => {
    const wrapper = render(<Space {...defaultSpaceProps}>Nice</Space>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

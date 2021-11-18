import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Divider,{ defaultDividerProps } from "./index";

describe("test Divider component", () => {
  it("should render the correct default Divider", () => {
    const wrapper = render(<Divider {...defaultDividerProps}>Nice</Divider>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

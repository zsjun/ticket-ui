import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Collapse,{ defaultCollapseProps } from "./index";

describe("test Collapse component", () => {
  it("should render the correct default Collapse", () => {
    const wrapper = render(<Collapse {...defaultCollapseProps}>Nice</Collapse>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tooltip,{ defaultTooltipProps } from "./index";

describe("test Tooltip component", () => {
  it("should render the correct default Tooltip", () => {
    const wrapper = render(<Tooltip {...defaultTooltipProps}>Nice</Tooltip>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

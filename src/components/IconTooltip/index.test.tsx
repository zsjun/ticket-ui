import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IconTooltip,{ defaultIconTooltipProps } from "./index";

describe("test IconTooltip component", () => {
  it("should render the correct default IconTooltip", () => {
    const wrapper = render(<IconTooltip {...defaultIconTooltipProps}>Nice</IconTooltip>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

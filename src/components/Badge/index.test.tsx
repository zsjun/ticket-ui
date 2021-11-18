import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Badge,{ defaultBadgeProps } from "./index";

describe("test Badge component", () => {
  it("should render the correct default Badge", () => {
    const wrapper = render(<Badge {...defaultBadgeProps}>Nice</Badge>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

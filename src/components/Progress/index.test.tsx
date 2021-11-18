import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Progress,{ defaultProgressProps } from "./index";

describe("test Progress component", () => {
  it("should render the correct default Progress", () => {
    const wrapper = render(<Progress {...defaultProgressProps}>Nice</Progress>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

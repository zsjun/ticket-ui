import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Empty,{ defaultEmptyProps } from "./index";

describe("test Empty component", () => {
  it("should render the correct default Empty", () => {
    const wrapper = render(<Empty {...defaultEmptyProps}>Nice</Empty>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

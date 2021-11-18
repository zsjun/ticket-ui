import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Transfer,{ defaultTransferProps } from "./index";

describe("test Transfer component", () => {
  it("should render the correct default Transfer", () => {
    const wrapper = render(<Transfer {...defaultTransferProps}>Nice</Transfer>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

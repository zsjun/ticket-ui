import React from "react";
import { render, fireEvent } from "@testing-library/react";
import message,{ defaultmessageProps } from "./index";

describe("test message component", () => {
  it("should render the correct default message", () => {
    const wrapper = render(<message {...defaultmessageProps}>Nice</message>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

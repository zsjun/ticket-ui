import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Row,{ defaultRowProps } from "./index";

describe("test Row component", () => {
  it("should render the correct default Row", () => {
    const wrapper = render(<Row {...defaultRowProps}>Nice</Row>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

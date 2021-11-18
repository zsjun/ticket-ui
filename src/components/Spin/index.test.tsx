import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Spin,{ defaultSpinProps } from "./index";

describe("test Spin component", () => {
  it("should render the correct default Spin", () => {
    const wrapper = render(<Spin {...defaultSpinProps}>Nice</Spin>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

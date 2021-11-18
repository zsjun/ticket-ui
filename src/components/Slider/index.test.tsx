import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Slider,{ defaultSliderProps } from "./index";

describe("test Slider component", () => {
  it("should render the correct default Slider", () => {
    const wrapper = render(<Slider {...defaultSliderProps}>Nice</Slider>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

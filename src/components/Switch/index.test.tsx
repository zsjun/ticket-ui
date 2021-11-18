import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch,{ defaultSwitchProps } from "./index";

describe("test Switch component", () => {
  it("should render the correct default Switch", () => {
    const wrapper = render(<Switch {...defaultSwitchProps}>Nice</Switch>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

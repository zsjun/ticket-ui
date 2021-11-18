import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs,{ defaultTabsProps } from "./index";

describe("test Tabs component", () => {
  it("should render the correct default Tabs", () => {
    const wrapper = render(<Tabs {...defaultTabsProps}>Nice</Tabs>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

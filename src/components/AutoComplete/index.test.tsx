import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AutoComplete,{ defaultAutoCompleteProps } from "./index";

describe("test AutoComplete component", () => {
  it("should render the correct default AutoComplete", () => {
    const wrapper = render(<AutoComplete {...defaultAutoCompleteProps}>Nice</AutoComplete>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

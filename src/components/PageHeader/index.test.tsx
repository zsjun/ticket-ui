import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageHeader,{ defaultPageHeaderProps } from "./index";

describe("test PageHeader component", () => {
  it("should render the correct default PageHeader", () => {
    const wrapper = render(<PageHeader {...defaultPageHeaderProps}>Nice</PageHeader>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

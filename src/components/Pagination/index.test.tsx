import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination,{ defaultPaginationProps } from "./index";

describe("test Pagination component", () => {
  it("should render the correct default Pagination", () => {
    const wrapper = render(<Pagination {...defaultPaginationProps}>Nice</Pagination>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

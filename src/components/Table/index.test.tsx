import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Table,{ defaultTableProps } from "./index";

describe("test Table component", () => {
  it("should render the correct default Table", () => {
    const wrapper = render(<Table {...defaultTableProps}>Nice</Table>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

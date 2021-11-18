import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Popconfirm,{ defaultPopconfirmProps } from "./index";

describe("test Popconfirm component", () => {
  it("should render the correct default Popconfirm", () => {
    const wrapper = render(<Popconfirm {...defaultPopconfirmProps}>Nice</Popconfirm>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});

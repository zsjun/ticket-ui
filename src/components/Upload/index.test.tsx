import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Upload,{ defaultUploadProps } from "./index";

describe("test Upload component", () => {
  it("should render the correct default Upload", () => {
    const wrapper = render(<Upload {...defaultUploadProps}>Nice</Upload>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});
